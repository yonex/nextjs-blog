import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse): void {
    res.setDraftMode({ enable: true });
    res.end('draft mode is enabled');
}
