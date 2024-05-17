import { NextResponse, NextRequest } from "next/server";

export default function middleware(req) {
  let user = req.cookies.get("user");

  let url = req.url;

  const secureRoutes = ["/dashboard", "/search", "/admin", "/profile"];

  // console.log(url);
  // console.log(user);

  const isSecureRoute = secureRoutes.some((route) => url.includes(route));

  if (!user && isSecureRoute) {
    return NextResponse.redirect(new URL("/signup", req.url));
  }

  return NextResponse.next();
}
