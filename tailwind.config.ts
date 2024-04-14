import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'inset': 'inset 0 -1px 0 0 #f5f5f5'
      },
      transitionProperty: {
        'custom': 'background-image',
      },
      transitionDuration: {
        'custom': '0.3s',
      },
      transitionTimingFunction: {
        'custom': 'cubic-bezier(0.47, -0.4, 0.52, 1.31)',
      },
      transitionDelay: {
        'custom': '0s',
      },
      gridTemplateColumns: {
        'custom': 'repeat(auto-fill, minmax(calc(50% - 8px), 1fr))',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'loginIcon': "url('https://sui.ssgcdn.com/ui/m_ssg/img/sprites/sp_cmemlogin_cico_20230912@2x.png')",
        'sp_product': "url('https://sui.ssgcdn.com/ui/m_ssg/img/sprites/sp_product_20240219@2x.png')",
        'sp_myssg_review': "url('https://sui.ssgcdn.com/ui/m_ssg/img/sprites/sp_myssg_review_20240208@2x.png')",
      },
      padding: {
        'bottom': 'calc((100% - 16px * 2) * (1 / 0.8575) + 16px)',
      },
    },
  },
  plugins: [],
};
export default config;
