import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(request: Request) {
  console.log("✅ CONTACTDATA API HIT");

  const body = await request.json();
  const { name, email, message } = body;

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const filePath = path.join(process.cwd(), "messages.json");

  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, "[]", "utf-8");
  }

  const messages = JSON.parse(fs.readFileSync(filePath, "utf-8"));

  messages.push({
    name,
    email,
    message,
    date: new Date().toISOString(),
  });

  fs.writeFileSync(filePath, JSON.stringify(messages, null, 2), "utf-8");

  return NextResponse.json({ success: true });
}
