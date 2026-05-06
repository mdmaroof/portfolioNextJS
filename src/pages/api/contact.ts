import type { NextApiRequest, NextApiResponse } from "next";

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyxU6-sVwV0SVPuAuu8GRrLXXG1kDwBsmfFwS8nSH9ptJhjxeXpG8gUMlQ4ffDpgCyC/exec";

type ContactPayload = {
  name?: string;
  email?: string;
  message?: string;
};

type ApiResponse = {
  ok: boolean;
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse>,
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false, message: "Method not allowed" });
  }

  const { name, email, message } = (req.body ?? {}) as ContactPayload;
  if (!name || !email || !message) {
    return res
      .status(400)
      .json({ ok: false, message: "name, email and message are required" });
  }

  try {
    const scriptResponse = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    });

    if (!scriptResponse.ok) {
      throw new Error(`Apps Script request failed with ${scriptResponse.status}`);
    }

    return res.status(200).json({ ok: true, message: "Message saved" });
  } catch (error) {
    console.error("Failed to save contact message:", error);
    return res
      .status(500)
      .json({ ok: false, message: "Failed to save message in Google Sheet" });
  }
}
