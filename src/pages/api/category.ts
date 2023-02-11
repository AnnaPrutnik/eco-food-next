import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const response = await axios(`/categories`);
  const data = await response.json();
  res.status(200).json(data);
}
