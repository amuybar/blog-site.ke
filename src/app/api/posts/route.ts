
import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongoose";
import Post from "@/models/Post";

interface PostData {
  title: string;
  content: string;
}

export async function POST(req: NextRequest) {
  await dbConnect();

  const { title, content }: PostData = await req.json();

  if (!title || !content) {
    return NextResponse.json(
      { error: "Missing title or content" },
      { status: 400 }
    );
  }

  const newPost = new Post({ title, content });
  await newPost.save();

  return NextResponse.json(newPost, { status: 201 });
}

export async function GET() {
  await dbConnect();
  const posts = await Post.find({});
  return NextResponse.json(posts, { status: 200 });
}
