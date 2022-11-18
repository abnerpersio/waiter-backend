import { Request, Response } from 'express';

import { Category } from '../../app/models/Category';

type Data = {
  icon: string;
  name: string;
};

type CategoryRequest = Request<unknown, unknown, Data>;

export async function createCategory(req: CategoryRequest, res: Response) {
  try {
    const { icon, name } = req.body;

    if (!name)
      return res.status(400).json({
        message: 'Name is required',
      });

    if (!icon)
      return res.status(400).json({
        message: 'Icon is required',
      });

    const category = await Category.create({ icon, name });

    res.status(201).json(category);
  } catch {
    res.sendStatus(500);
  }
}
