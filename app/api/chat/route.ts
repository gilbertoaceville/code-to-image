import { NextResponse } from "next/server";
import OpenAI from "openai";

export const runtime = "edge";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export async function POST(req: Request) {
  try {
    const { messages }: { messages: Message[] } = await (req.body as any);

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages,
    });

    return NextResponse.json(response);
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({ error: error.message });
  }
}
