import {NextResponse} from 'next/server';

export async function middleware(request) {
    if (request.nextUrl.pathname === "/") {
        let userId;

        if (request.cookies.has('__prepr_uid')) {
            userId = request.cookies.get('__prepr_uid');
        } else {
            userId = crypto.randomUUID()
        }

        const response = await fetch("https://graphql.prepr.io/557bfab9e6b119286807bcd30648d512ef992b8f73b20a9f4d6af0a8a1d399c3", {
            headers: {
                "Prepr-Customer-Id": userId,
                "Prepr-Bucket-Customer": true
            }
        })

        const bucket = response.headers.get('x-prepr-customer-bucket');

        if (bucket === "B") {
            const url = request.nextUrl.clone()
            url.pathname = '/homeb'
            return NextResponse.redirect(url)
        }

        return NextResponse.next();
    }

}

export const config = {
    matcher: '/',
}