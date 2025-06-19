import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
	const url = req.nextUrl.searchParams.get("url");
	if (!url) {
		return new NextResponse("Missing url", { status: 400 });
	}

	// Only allow Notion S3 URLs for security
	if (
		!url.startsWith("https://prod-files-secure.s3.") &&
		!url.startsWith(
			"https://s3.us-west-2.amazonaws.com/secure.notion-static.com/"
		)
	) {
		return new NextResponse("Invalid Notion image URL", { status: 400 });
	}

	const notionRes = await fetch(url);

	const contentType = notionRes.headers.get("content-type") || "";
	if (!contentType.startsWith("image/")) {
		const text = await notionRes.text();
		return new NextResponse(
			`The requested resource isn't a valid image: ${text}`,
			{ status: 400 }
		);
	}

	const imageBuffer = await notionRes.arrayBuffer();
	return new NextResponse(Buffer.from(imageBuffer), {
		status: 200,
		headers: {
			"Content-Type": contentType,
			"Cache-Control": "public, max-age=86400",
		},
	});
}
