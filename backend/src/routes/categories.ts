import { Router } from "express";
import prisma from "../prismaClient";

const router = Router();

router.get("/", async (req, res) => {
  const categories = await prisma.category.findMany({ include: { menuItems: true } });
  res.json(categories);
});

router.post("/", async (req, res) => {
  const { categoryName } = req.body;
  const cat = await prisma.category.create({ data: { categoryName } });
  res.status(201).json(cat);
});

export default router;
