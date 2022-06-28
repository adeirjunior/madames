import type { NextApiRequest, NextApiResponse } from "next";
import { client } from '../../lib/client';

type Data = {
    results: string[],
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const query: string = req.query.q ? `*[_type == "product" && name == "${req.query.q}"]` : `*[_type == "product"]`;
    if (req.method === 'GET') {
        const results = await client.fetch(query);
        console.log( await client.fetch(`*[_type == "product"]{name}`));
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ results }))
        res.redirect('/search');
    }
}