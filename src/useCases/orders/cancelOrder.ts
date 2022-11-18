import { Request, Response } from 'express';

import { Order } from '../../app/models/Order';

type Params = {
  orderId: string;
};

export async function cancelOrder(req: Request<Params>, res: Response) {
  try {
    const { orderId } = req.params;

    await Order.findByIdAndDelete(orderId);

    return res.sendStatus(204);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}
