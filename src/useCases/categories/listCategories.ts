import { Request, Response } from 'express';

import { Category } from '../../app/models/Category';

export async function listCategories(_: Request, res: Response) {
  try {
    const categories = await Category.find();

    return res.json(categories);
  } catch {
    res.sendStatus(500);
  }
}
