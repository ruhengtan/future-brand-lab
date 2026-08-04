import OpenAI from "openai";

export function getOpenAIClient() {
  if (!process.env.OPENAI_API_KEY) throw new Error("OPENAI_API_KEY is not configured");
  return new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
}

export const ARTICLE_ANALYSIS_PROMPT = `You are a senior technology brand strategist and English coach.
Analyze the supplied English technology article. Return JSON with exactly these keys:
keyPoints (3 concise strings), brandInsights (2 strategic strings), and vocabulary
(4 objects with term and plain-English definition). Ground every claim in the article.`;
