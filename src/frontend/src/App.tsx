import { Toaster } from "@/components/ui/sonner";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { createRootRoute, createRoute } from "@tanstack/react-router";
import { Outlet } from "@tanstack/react-router";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import About from "./pages/About";
import Admin from "./pages/Admin";
import Contact from "./pages/Contact";
import Emergency from "./pages/Emergency";
import Home from "./pages/Home";
import Programs from "./pages/Programs";
import ReportIncident from "./pages/ReportIncident";
import Technology from "./pages/Technology";

function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

const rootRoute = createRootRoute({ component: RootLayout });

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});
const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: About,
});
const programsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/programs",
  component: Programs,
});
const technologyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/technology",
  component: Technology,
});
const emergencyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/emergency",
  component: Emergency,
});
const reportRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/report",
  component: ReportIncident,
});
const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: Contact,
});
const adminRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/admin",
  component: Admin,
});

const routeTree = rootRoute.addChildren([
  homeRoute,
  aboutRoute,
  programsRoute,
  technologyRoute,
  emergencyRoute,
  reportRoute,
  contactRoute,
  adminRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
