import { Router } from "express";
import prisma from "../prismaClient";

const router = Router();

// GET /api/customers
router.get("/", async (req, res) => {
  const customers = await prisma.customer.findMany({
    include: { contacts: true }
  });
  res.json(customers);
});

// POST /api/customers
router.post("/", async (req, res) => {
  const { name, contacts } = req.body;
  const newCustomer = await prisma.customer.create({
    data: {
      name: name,
      contacts: {
        create: contacts || []
      }
    },
    include: { contacts: true }
  });
  res.status(201).json(newCustomer);
});

export default router;
