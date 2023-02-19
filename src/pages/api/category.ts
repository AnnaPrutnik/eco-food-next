import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const response = await fetch(`${process.env.API_HOST}/categories`);
  const data = await response.json();
  res.status(200).json(data);
}
