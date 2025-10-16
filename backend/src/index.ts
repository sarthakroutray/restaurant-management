import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import customersRouter from "./routes/customers";
import categoriesRouter from "./routes/categories";
import menuItemsRouter from "./routes/menuItems";
import ordersRouter from "./routes/orders";

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

app.use(cors({ origin: ["http://localhost:3000", "http://localhost:5173"] }));
app.use(express.json());

app.use("/api/customers", customersRouter);
app.use("/api/categories", categoriesRouter);
app.use("/api/menu-items", menuItemsRouter);
app.use("/api/orders", ordersRouter);

app.get("/api/health", (req, res) => res.json({ ok: true }));

app.listen(port, () => {
  console.log(`Backend listening on http://localhost:${port}`);
});
