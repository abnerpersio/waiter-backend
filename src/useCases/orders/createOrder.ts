import { Request, Response } from 'express';

import { Order } from '../../app/models/Order';

type Data = {
  table: string;
  products: {
    product: string;
    quantity: number | string;
  }[];
};

type OrderRequest = Request<unknown, unknown, Data>;

export async function createOrder(req: OrderRequest, res: Response) {
  try {
    const { table, products } = req.body;

    if (!table)
      return res.status(400).json({
        message: 'Table is required',
      });

    if (!products)
      return res.status(400).json({
        message: 'Products are required',
      });

    const order = await Order.create({
      table,
      products: products.map(({ product, quantity }) => ({
        product,
        quantity: Number(quantity),
      })),
    });

    res.status(201).json(order);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}
