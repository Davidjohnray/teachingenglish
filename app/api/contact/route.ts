import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(request: Request) {
  console.log("🔥 CONTACT API POST HIT");

  try {
    const body = await request.json();
    console.log("📦 BODY RECEIVED:", body);

    const { name, email, message } = body;

    if (!name || !email || !message) {
      console.log("❌ MISSING FIELDS");
      return NextResponse.json(
        { error: "Missing fields" },
        { status: 400 }
      );
    }

    const filePath = path.join(process.cwd(), "messages.json");
    console.log("📁 FILE PATH:", filePath);

    // Ensure file exists
    if (!fs.existsSync(filePath)) {
      console.log("📄 messages.json NOT FOUND — creating it");
      fs.writeFileSync(filePath, "[]", "utf-8");
    }

    const fileData = fs.readFileSync(filePath, "utf-8");
    console.log("📖 FILE BEFORE WRITE:", fileData);

    const messages = JSON.parse(fileData);

    messages.push({
      name,
      email,
      message,
      date: new Date().toISOString(),
    });

    fs.writeFileSync(filePath, JSON.stringify(messages, null, 2), "utf-8");

    console.log("✅ MESSAGE SAVED");

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("💥 CONTACT API ERROR:", error);
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}
