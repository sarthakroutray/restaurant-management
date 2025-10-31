import { Router } from "express";
import prisma from "../prismaClient";

const router = Router();

// Get all menu items with category and price
router.get("/menu-items", async (req, res) => {
  try {
    const items = await prisma.menuItem.findMany({
      include: { category: true },
      orderBy: { name: "asc" }
    });
    
    const result = items.map(item => ({
      Name: item.name,
      Category: item.category?.categoryName || "N/A",
      Price: parseFloat(item.price.toString())
    }));
    
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch menu items" });
  }
});

// Get popular items (most ordered)
router.get("/popular-items", async (req, res) => {
  try {
    const result: any = await prisma.$queryRawUnsafe(`
      SELECT mi.Name, COUNT(oi.OrderItemID) AS TotalOrders
      FROM OrderItems oi
      JOIN MenuItems mi ON oi.ItemID = mi.ItemID
      GROUP BY mi.ItemID, mi.Name
      ORDER BY TotalOrders DESC
    `);
    
    // Convert BigInt to Number for JSON serialization
    const formatted = result.map((row: any) => ({
      Name: row.Name,
      TotalOrders: Number(row.TotalOrders)
    }));
    
    res.json(formatted);
  } catch (error) {
    console.error("Popular items error:", error);
    res.status(500).json({ error: "Failed to fetch popular items" });
  }
});

// Get complete order history
router.get("/order-history", async (req, res) => {
  try {
    const result: any = await prisma.$queryRawUnsafe(`
      SELECT c.Name AS CustomerName, o.OrderDate, mi.Name AS ItemName, oi.Quantity
      FROM Customers c
      JOIN Orders o ON c.CustomerID = o.CustomerID
      JOIN OrderItems oi ON o.OrderID = oi.OrderID
      JOIN MenuItems mi ON oi.ItemID = mi.ItemID
      ORDER BY o.OrderDate DESC
    `);
    
    res.json(result);
  } catch (error) {
    console.error("Order history error:", error);
    res.status(500).json({ error: "Failed to fetch order history" });
  }
});

// Get high-value customers (spent > 2000)
router.get("/high-spenders", async (req, res) => {
  try {
    const result: any = await prisma.$queryRawUnsafe(`
      SELECT c.Name AS CustomerName, 
             SUM(oi.Quantity * mi.Price) AS TotalSpent
      FROM Customers c
      JOIN Orders o ON c.CustomerID = o.CustomerID
      JOIN OrderItems oi ON o.OrderID = oi.OrderID
      JOIN MenuItems mi ON oi.ItemID = mi.ItemID
      GROUP BY c.Name, c.CustomerID
      HAVING SUM(oi.Quantity * mi.Price) > 2000
      ORDER BY TotalSpent DESC
    `);
    
    // Convert BigInt/Decimal to Number for JSON serialization
    const formatted = result.map((row: any) => ({
      CustomerName: row.CustomerName,
      TotalSpent: Number(row.TotalSpent)
    }));
    
    res.json(formatted);
  } catch (error) {
    console.error("High spenders error:", error);
    res.status(500).json({ error: "Failed to fetch high spenders" });
  }
});

// Get top 3 revenue-generating items
router.get("/top-revenue", async (req, res) => {
  try {
    const result: any = await prisma.$queryRawUnsafe(`
      SELECT mi.Name, 
             SUM(oi.Quantity) AS TotalQuantity,
             SUM(oi.Quantity * mi.Price) AS TotalRevenue
      FROM OrderItems oi
      JOIN MenuItems mi ON oi.ItemID = mi.ItemID
      GROUP BY mi.Name, mi.ItemID
      ORDER BY TotalQuantity DESC
      LIMIT 3
    `);
    
    // Convert BigInt/Decimal to Number for JSON serialization
    const formatted = result.map((row: any) => ({
      Name: row.Name,
      TotalQuantity: Number(row.TotalQuantity),
      TotalRevenue: Number(row.TotalRevenue)
    }));
    
    res.json(formatted);
  } catch (error) {
    console.error("Top revenue error:", error);
    res.status(500).json({ error: "Failed to fetch top revenue items" });
  }
});

export default router;
