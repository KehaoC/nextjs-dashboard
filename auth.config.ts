import type { NextAuthConfig } from "next-auth";

export const authConfig = {
    pages: {
        signIn: '/login',
    },
    callbacks: {
        authorized({ auth, request: { nextUrl }}) {
            const isLoggedIn = !!auth?.user;
            const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');

            if (isOnDashboard) {
                if ( isLoggedIn ) return true;
            }
            else if (isLoggedIn) {
                return Response.redirect( new URL('/dashboard', nextUrl));
            }
            return true;
        }
    },
    providers: [], // 添加 providers 为空数组即可。
} satisfies NextAuthConfig;