import { Request, Response } from 'express';

import { Product } from '../../app/models/Product';

type Params = {
  categoryId: string;
};

export async function listProductsByCategory(req: Request<Params>, res: Response) {
  try {
    const { categoryId } = req.params;

    const products = await Product.find().where('category').equals(categoryId);

    return res.json(products);
  } catch {
    res.sendStatus(500);
  }
}
