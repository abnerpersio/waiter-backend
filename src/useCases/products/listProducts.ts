import { Request, Response } from 'express';

import { Product } from '../../app/models/Product';

export async function listProducts(_: Request, res: Response) {
  try {
    const products = await Product.find();

    return res.json(products);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}
