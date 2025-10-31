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

// DELETE /api/categories/:id
router.delete("/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    await prisma.category.delete({
      where: { categoryId: id }
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "Failed to delete category" });
  }
});

export default router;
