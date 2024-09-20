import { NextAuthOptions, User } from "next-auth";
import { AdapterUser } from "next-auth/adapters";
import CredentialsProvider from "next-auth/providers/credentials";
import KakaoProvider from "next-auth/providers/kakao";

interface Data {
  success: boolean;
  message: string;
  data: {
    accessToken: string;
  }
  error: object | null;
}

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "text", placeholder: "SSG" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req): Promise<any> {
        // console.log(credentials)
        if (!credentials?.email || !credentials?.password) {
          // 서버에 통신하여 로그인 처리
          return null;
        }

        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: credentials.email,
            password: credentials.password
          })
        })

        if (res.ok) {
          const data = await res.json()
          // console.log(data)
          // get header
          const headerValue = res.headers.get('authorization');
          // console.log("일반로그인성공")
          // console.log("headervalue:", headerValue);
          // console.log(user)
          const user = {
            email: credentials.email,
            accessToken: headerValue,
            name: data.name,
            uuid: data.uuid
          }
            return user;
        }
        return "/";
      }
    }),
    KakaoProvider(
      {
        clientId: process.env.KAKAO_CLIENT_ID || "",
        clientSecret: process.env.KAKAO_CLIENT_SECRET || "",
      },
    ),//todo 소셜로그인 후 통합회원가입 혹은 통합회원 여부 확인
  ],//어떤걸로 로그인할껀가 정의
  callbacks: {
    async signIn({ user, profile, account }): Promise<any> { //user, profile
      const userInformation:User | AdapterUser = user;
      if (userInformation && profile) {
        // console.log("로그인 성공")
        // console.log("user:", userInformation)
        // console.log(profile)
        // 회원인지 아닌지 확인
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/sns-login`, {
          //여기서 백엔드하고 통신, 벡엔드가 만들어줘야됨
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            //여기서 벡엔드로 보내는 데이터
            snsId: userInformation.id,
            snsType: account?.provider,
            email: userInformation.email,
          })
        })
        const getData:Data = await res.json();
        // console.log("getData:", getData)
        if (!getData.success)
          return `/join/formsocial?email=${userInformation.email}&snsId=${userInformation.id}&snsType=${account?.provider}`;
          // 회원이 아니면 회원가입 페이지로 이동
          // console.log("getData.data:", getData.data)
          userInformation.accessToken = getData.data?.accessToken;
          return userInformation
      }

      return true
    },

    async jwt({ token, user }) {
      return { ...token, ...user };
    },

    async session({ session, token }) {
      session.user = token as any;
      return session;
    },

    async redirect({ url, baseUrl }) {
      // console.log(url, baseUrl)
      if (url.startsWith("/")) return `${baseUrl}${url}`
      // Allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) return url
      return baseUrl
    }
  },
  pages: {//기본으로 제공하는 로그인을 커스텀하고 싶으면 링크를 걸어줘야됨.
    signIn: "/memberlogin",
    error: "/error",//로그인 실패시
  },
}