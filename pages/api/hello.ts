import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse<{ text: string }>): void {
    res.status(200).json({ text: 'Hello' });
}
