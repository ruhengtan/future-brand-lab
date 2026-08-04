import { NextResponse } from "next/server";
import { ARTICLE_ANALYSIS_PROMPT, getOpenAIClient } from "@/lib/openai";

export async function POST(request: Request) {
  const { content } = (await request.json()) as { content?: string };
  if (!content || content.trim().length < 80) return NextResponse.json({ error: "Please provide at least 80 characters." }, { status: 400 });
  if (content.length > 30_000) return NextResponse.json({ error: "Article is too long." }, { status: 400 });
  try {
    const completion = await getOpenAIClient().chat.completions.create({
      model: process.env.OPENAI_MODEL || "gpt-4o-mini",
      response_format: { type: "json_object" },
      temperature: 0.3,
      messages: [{ role: "system", content: ARTICLE_ANALYSIS_PROMPT }, { role: "user", content }]
    });
    return NextResponse.json(JSON.parse(completion.choices[0].message.content || "{}"));
  } catch (error) {
    console.error("Article analysis failed", error);
    return NextResponse.json({ error: "AI analysis is temporarily unavailable." }, { status: 500 });
  }
}
