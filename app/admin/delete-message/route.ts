import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { date } = await req.json();

  if (!date) {
    return NextResponse.json({ error: "Missing date" }, { status: 400 });
  }

  const filePath = path.join(process.cwd(), "messages.json");

  if (!fs.existsSync(filePath)) {
    return NextResponse.json({ success: true });
  }

  const messages = JSON.parse(fs.readFileSync(filePath, "utf8"));

  const filtered = messages.filter((m: any) => m.date !== date);

  fs.writeFileSync(filePath, JSON.stringify(filtered, null, 2));

  return NextResponse.json({ success: true });
}
