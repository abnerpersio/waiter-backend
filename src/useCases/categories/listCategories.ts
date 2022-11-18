import { Request, Response } from 'express';

import { Category } from '../../app/models/Category';

export async function listCategories(_: Request, res: Response) {
  try {
    const categories = await Category.find();

    return res.json(categories);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}
