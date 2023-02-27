import type { NextApiRequest, NextApiResponse } from 'next';
import sort from 'db/sort-by.json';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json(sort);
}
