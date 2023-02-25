import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const response = await fetch(`${process.env.API_HOST}/sort-by`);
  const data = await response.json();
  console.log(data);
  res.status(200).json(data);
}
