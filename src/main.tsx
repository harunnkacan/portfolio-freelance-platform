import '@/lib/errorReporter';
import { enableMapSet } from "immer";
enableMapSet();
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { RouteErrorBoundary } from '@/components/RouteErrorBoundary';
import '@/index.css'
import { HomePage } from '@/pages/HomePage'
import { BlogPage } from '@/pages/BlogPage'
import { MarketPage } from '@/pages/MarketPage'
import { BlogDetailPage } from '@/pages/BlogDetailPage'
import { MarketDetailPage } from '@/pages/MarketDetailPage'
import { ContactPage } from '@/pages/ContactPage'
import { AuthPage } from '@/pages/AuthPage'
import { DashboardPage } from '@/pages/DashboardPage'
import { Toaster } from '@/components/ui/sonner'
const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <RouteErrorBoundary />,
  },
  {
    path: "/blog",
    element: <BlogPage />,
    errorElement: <RouteErrorBoundary />,
  },
  {
    path: "/blog/:id",
    element: <BlogDetailPage />,
    errorElement: <RouteErrorBoundary />,
  },
  {
    path: "/market",
    element: <MarketPage />,
    errorElement: <RouteErrorBoundary />,
  },
  {
    path: "/market/:id",
    element: <MarketDetailPage />,
    errorElement: <RouteErrorBoundary />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
    errorElement: <RouteErrorBoundary />,
  },
  {
    path: "/auth",
    element: <AuthPage />,
    errorElement: <RouteErrorBoundary />,
  },
  {
    path: "/panel",
    element: <DashboardPage />,
    errorElement: <RouteErrorBoundary />,
  },
  {
    path: "/admin",
    element: <DashboardPage />, // Placeholder for Phase 4 Admin
    errorElement: <RouteErrorBoundary />,
  },
]);
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary>
        <RouterProvider router={router} />
        <Toaster richColors position="bottom-right" />
      </ErrorBoundary>
    </QueryClientProvider>
  </StrictMode>,
)