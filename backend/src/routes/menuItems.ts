import { Router } from "express";
import prisma from "../prismaClient";

const router = Router();

router.get("/", async (req, res) => {
  const items = await prisma.menuItem.findMany({ include: { category: true } });
  res.json(items);
});

router.post("/", async (req, res) => {
  const { name, price, categoryId } = req.body;
  const item = await prisma.menuItem.create({
    data: { name, price, categoryId }
  });
  res.status(201).json(item);
});

export default router;
