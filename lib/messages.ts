import fs from "fs";
import path from "path";

export type ContactMessage = {
  id: string;
  name: string;
  email: string;
  message: string;
  date: string;
};

const filePath = path.join(process.cwd(), "messages.json");

export function getMessages(): ContactMessage[] {
  if (!fs.existsSync(filePath)) return [];
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

export function deleteMessage(id: string) {
  if (!fs.existsSync(filePath)) return;

  const messages: ContactMessage[] = JSON.parse(
    fs.readFileSync(filePath, "utf8")
  );

  const filtered = messages.filter((msg) => msg.id !== id);

  fs.writeFileSync(filePath, JSON.stringify(filtered, null, 2));
}
