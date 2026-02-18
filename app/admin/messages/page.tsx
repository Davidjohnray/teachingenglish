import fs from "fs";
import path from "path";
import Client from "./client";

export default function AdminMessagesPage() {
  const filePath = path.join(process.cwd(), "messages.json");

  let messages = [];

  if (fs.existsSync(filePath)) {
    messages = JSON.parse(fs.readFileSync(filePath, "utf8"));
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Messages</h1>
      <Client messages={messages} />
    </div>
  );
}
