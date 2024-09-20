import NextAuth, {DefaultSession} from "next-auth/next";

declare module "next-auth" {
    interface Session {
        user: {
            accessToken: string;
            name: string;
            email: string;
            uuid: string;
        } & DefaultSession["user"];
    }
}

declare module "next-auth" {
    interface User {
        accessToken: string;
        name: string;
        email: string;
        uuid: string;
    } 
}