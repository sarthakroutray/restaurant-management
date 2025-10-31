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

// DELETE /api/customers/:id
router.delete("/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    await prisma.customer.delete({
      where: { customerId: id }
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "Failed to delete customer" });
  }
});

// GET /api/customers/contacts
router.get("/contacts", async (req, res) => {
  const contacts = await prisma.customerContact.findMany();
  res.json(contacts);
});

// POST /api/customers/contacts
router.post("/contacts", async (req, res) => {
  const { customerId, contactNo, email } = req.body;
  const contact = await prisma.customerContact.create({
    data: { customerId, contactNo, email }
  });
  res.status(201).json(contact);
});

export default router;
