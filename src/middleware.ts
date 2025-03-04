import { NextRequest, NextResponse } from "next/server";
import { Ratelimit } from "@upstash/ratelimit";
import { kv } from "@vercel/kv";

const ratelimit = new Ratelimit({
	redis: kv,
	// 5 requests from the same IP in 10 seconds
	limiter: Ratelimit.slidingWindow(10, "5 s"),
});

// Define which routes you want to rate limit
export const config = {
	matcher: "/",
};

export default async function middleware(request: NextRequest) {
	// You could alternatively limit based on user ID or similar
	const ip =
		request.headers.get("x-forwarded-for") ||
		request.headers.get("x-real-ip") ||
		"127.0.0.1";
	const { success, pending, limit, reset, remaining } =
		await ratelimit.limit(ip);
	return success
		? NextResponse.next()
		: NextResponse.redirect(new URL("/blocked", request.url));
}
