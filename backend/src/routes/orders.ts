import { Router } from "express";
import prisma from "../prismaClient";

const router = Router();

// GET /api/orders
router.get("/", async (req, res) => {
  const orders = await prisma.order.findMany({
    include: { customer: true, orderItems: { include: { menuItem: true } } },
    orderBy: { orderDate: "desc" }
  });
  res.json(orders);
});

// POST /api/orders
// body: { customerId, orderDate, items: [{ itemId, quantity }, ...] }
router.post("/", async (req, res) => {
  const { customerId, orderDate, items } = req.body;
  const created = await prisma.order.create({
    data: {
      customerId,
      orderDate: new Date(orderDate),
      orderItems: {
        create: items.map((it: any) => ({ itemId: it.itemId, quantity: it.quantity }))
      }
    },
    include: { orderItems: true }
  });
  res.status(201).json(created);
});

export default router;
