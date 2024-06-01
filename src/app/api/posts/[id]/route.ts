
import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongoose";
import Post from "@/models/Post";
import { ObjectId } from "mongoose";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  await dbConnect();

  const post = await Post.findById(params.id as unknown as ObjectId);

  if (!post) {
    return NextResponse.json({ error: "Post not found" }, { status: 404 });
  }

  return NextResponse.json(post, { status: 200 });
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  await dbConnect();
  const { title, content }: { title: string; content: string } =
    await req.json();

  const updatedPost = await Post.findByIdAndUpdate(
    params.id as unknown as ObjectId,
    { title, content },
    { new: true }
  );

  if (!updatedPost) {
    return NextResponse.json({ error: "Post not found" }, { status: 404 });
  }

  return NextResponse.json(updatedPost, { status: 200 });
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  await dbConnect();
  const deletedPost = await Post.findByIdAndDelete(params.id as unknown as ObjectId);

  if (!deletedPost) {
    return NextResponse.json({ error: "Post not found" }, { status: 404 });
  }

  return NextResponse.json(deletedPost, { status: 200 });
}
