"use client"

import { NextResponse } from 'next/server'
import { withAuth } from "@kinde-oss/kinde-auth-nextjs/middleware";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

// This function can be marked `async` if using `await` inside
export async function middleware(request) {
    const { isAuthenticated } = getKindeServerSession();
    if (!(await isAuthenticated())) {
        return NextResponse.redirect(new URL('/api/auth/login?post_login_redirect_url=/details/1', request.url))
    }
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: '/details/:path*',
}