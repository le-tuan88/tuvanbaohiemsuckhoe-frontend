import { NextResponse } from "next/server";
import { getPaginatedPosts } from "@/lib/wp";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const after = searchParams.get("after");
    
    if (!after) {
        return NextResponse.json({ error: "Missing after cursor parameter" }, { status: 400 });
    }

    try {
        const data = await getPaginatedPosts(9, after);
        return NextResponse.json(data);
    } catch (error) {
        console.error("Error fetching more posts:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
