import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse<{ text: string }>): void {
    const { query: { id } } = req;
    res.status(200).json({ text: 'Hello ' + id });
};
