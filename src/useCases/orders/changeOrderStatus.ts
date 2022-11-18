import { Request, Response } from 'express';

import { Order } from '../../app/models/Order';

type Params = {
  orderId: string;
};

type Data = {
  status: string;
};

type ChangeStatusRequest = Request<Params, unknown, Data>;

export async function changeOrderStatus(req: ChangeStatusRequest, res: Response) {
  try {
    const { orderId } = req.params;
    const { status } = req.body;

    if (!['WAITING', 'IN_PRODUCTION', 'DONE'].includes(status))
      return res.status(400).json({
        message: 'Status should be one of these: WAITING, IN_PRODUCTION, DONE.',
      });

    await Order.findByIdAndUpdate(orderId, { status });

    return res.sendStatus(204);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}
