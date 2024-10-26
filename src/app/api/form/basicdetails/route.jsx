import { connectDb } from "../../db/connection";

connectDb();

export async function GET() {
    return new Response(JSON.stringify({ name: "John Doe" }));
}

export async function POST(request) {
    const body = await request.json();
    return new Response(JSON.stringify(body));
}