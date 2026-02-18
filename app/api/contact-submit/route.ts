import { NextResponse } from "next/server";

export async function POST() {
  console.log("✅ CONTACT-SUBMIT API HIT");
  return NextResponse.json({ success: true });
}
