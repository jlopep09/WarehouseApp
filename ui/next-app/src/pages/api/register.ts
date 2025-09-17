import type { NextApiRequest, NextApiResponse } from "next";
import { getAuth } from "@clerk/nextjs/server";
import { pool } from "@/lib/db";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    // getAuth lee la cookie / headers de la request en Pages Router
    const { userId } = getAuth(req);

    if (!userId) {
      return res.status(401).json({ error: "No autenticado" });
    }

    await pool.query("INSERT IGNORE INTO Users (id) VALUES (?)", [userId]);

    return res.status(200).json({ success: true, userId });
  } catch (err) {
    console.error("Register error:", err);
    return res.status(500).json({ error: "Error al guardar usuario" });
  }
}
