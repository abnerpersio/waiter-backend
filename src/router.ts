import { Router } from 'express';

import { upload } from './middlewares/upload';
import { createCategory } from './useCases/categories/createCategory';
import { listCategories } from './useCases/categories/listCategories';
import { listProductsByCategory } from './useCases/categories/listProductsByCategory';
import { cancelOrder } from './useCases/orders/cancelOrder';
import { changeOrderStatus } from './useCases/orders/changeOrderStatus';
import { createOrder } from './useCases/orders/createOrder';
import { listOrders } from './useCases/orders/listOrders';
import { createProduct } from './useCases/products/createProduct';
import { listProducts } from './useCases/products/listProducts';

export const router = Router();

router.get('/categories', listCategories);

router.post('/categories', createCategory);

router.get('/categories/:categoryId/products', listProductsByCategory);

router.get('/products', listProducts);

router.post('/products', upload.single('image'), createProduct);

router.get('/orders', listOrders);

router.post('/orders', createOrder);

router.patch('/orders/:orderId', changeOrderStatus);

router.delete('/orders/:orderId', cancelOrder);
