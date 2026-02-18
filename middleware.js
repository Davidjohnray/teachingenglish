import { NextResponse } from "next/server";

/**
 * Middleware ONLY runs on admin pages
 * It will NOT run on:
 * - /api/*
 * - /contact
 * - public pages
 */
export function middleware(req) {
  const isLoggedIn = req.cookies.get("admin-auth");

  if (!isLoggedIn) {
    return NextResponse.redirect(new URL("/admin/login", req.url));
  }

  return NextResponse.next();
}

/**
 * 🔑 THIS IS THE KEY PART
 * Middleware will ONLY run on /admin/messages
 */
export const config = {
  matcher: ["/admin/messages"],
};
