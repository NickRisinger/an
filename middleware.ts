import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    const response = NextResponse.next();
    if (request.cookies.has('city')) {
        console.log(request.cookies.get('city'))
    } else {
        console.log('Город отсутствует, выполняю запрос...')
        response.cookies.set('city', 'Кострома')
    }
    return response;
}

export const config = {
  matcher: "/",
};
