import type { NextApiRequest, NextApiResponse } from 'next';
import categories from 'db/category.json';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json(categories);
}
