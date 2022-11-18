import { Request, Response } from 'express';

import { Product } from '../../app/models/Product';

type Data = {
  name: string;
  description: string;
  price: number | string;
  category: string;
  ingredients: string;
};

type ProductRequest = Request<unknown, unknown, Data>;

export async function createProduct(req: ProductRequest, res: Response) {
  try {
    const imagePath = req.file?.filename;
    const { name, description, price, category, ingredients } = req.body;

    const product = await Product.create({
      name,
      description,
      price: Number(price),
      category,
      ingredients: ingredients ? JSON.parse(ingredients) : [],
      imagePath,
    });

    return res.status(201).json(product);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}
