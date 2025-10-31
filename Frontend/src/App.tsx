import { useState } from "react"
import { Button } from "@/components/ui/button"
import { CustomersManager } from "@/components/customers-manager"
import { CategoriesManager } from "@/components/categories-manager"
import { MenuManager } from "@/components/menu-manager"
import { OrdersManager } from "@/components/orders-manager"
import { AnalyticsManager } from "@/components/analytics-manager"

type TabKey = "orders" | "menu" | "categories" | "customers" | "analytics"

const tabs: { key: TabKey; label: string }[] = [
  { key: "orders", label: "Orders" },
  { key: "menu", label: "Menu Items" },
  { key: "categories", label: "Categories" },
  { key: "customers", label: "Customers" },
  { key: "analytics", label: "Analytics" },
]

function App() {
  const [active, setActive] = useState<TabKey>("orders")

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-100/40">
      <main className="mx-auto max-w-7xl px-4 py-8 md:px-6 md:py-12">
        {/* Gorgeous Header with Gradient */}
        <header className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 p-10 shadow-2xl shadow-blue-500/30">
          <h1 className="text-5xl font-black tracking-tight text-white md:text-6xl drop-shadow-lg">
            Restaurant Management
          </h1>
          <p className="mt-4 text-xl text-blue-100 font-semibold">
            Streamline your restaurant operations with modern design
          </p>
        </header>

        {/* Modern Tab Pills */}
        <nav className="mb-10 flex flex-wrap gap-3">
          {tabs.map((t) => (
            <Button
              key={t.key}
              variant={active === t.key ? "default" : "outline"}
              size="lg"
              onClick={() => setActive(t.key)}
              aria-pressed={active === t.key}
              className={
                active === t.key
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold shadow-xl shadow-blue-400/50 hover:shadow-2xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 border-0"
                  : "font-semibold border-2 border-slate-300 hover:border-blue-500 hover:bg-blue-50 hover:text-blue-700 transition-all duration-200"
              }
            >
              {t.label}
            </Button>
          ))}
        </nav>

        <div className="space-y-10">
          {active === "orders" ? <OrdersManager /> : null}
          {active === "menu" ? <MenuManager /> : null}
          {active === "categories" ? <CategoriesManager /> : null}
          {active === "customers" ? <CustomersManager /> : null}
          {active === "analytics" ? <AnalyticsManager /> : null}
        </div>

        {/* Stylish Footer */}
        <footer className="mt-20 rounded-2xl bg-gradient-to-r from-slate-100 to-blue-100 border-2 border-slate-200 p-6 text-center shadow-lg">
          <p className="text-sm font-semibold text-slate-700">
            <span className="text-blue-600">API Status:</span>{" "}
            <span className="font-mono bg-white px-3 py-1 rounded-lg shadow-sm">
              {import.meta.env.VITE_API_BASE_URL || "Using relative paths"}
            </span>
          </p>
        </footer>
      </main>
    </div>
  )
}

export default App
