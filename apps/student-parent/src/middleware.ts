import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Public routes that don't need auth
  const publicRoutes = [
    "/",
    "/student-login",
    "/portal/login",
    "/portal/signup",
    "/report",
    "/api/auth",
    "/api/schools",
    "/api/mwalimu",
    "/api/parent/login",
    "/api/parent/signup",
    "/api/classes",
    "/api/enrollments",
  ];

  const isPublic = publicRoutes.some((route) => pathname.startsWith(route));
  if (isPublic) return NextResponse.next();

  // Check for JWT cookie
  const token = request.cookies.get("skuli_token")?.value;
  if (!token) {
    if (pathname.startsWith("/student")) {
      return NextResponse.redirect(new URL("/student-login", request.url));
    }
    if (pathname.startsWith("/portal")) {
      return NextResponse.redirect(new URL("/portal/login", request.url));
    }
    return NextResponse.redirect(new URL("/student-login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)"],
};
