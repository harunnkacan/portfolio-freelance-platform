import '@/lib/errorReporter';
import { enableMapSet } from "immer";
enableMapSet();
import React from 'react'
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
import { AdminPage } from '@/pages/AdminPage'
import { ServicesPage } from '@/pages/ServicesPage'
import { Toaster } from '@/components/ui/sonner'
import { ThemeProvider } from '@/components/layout/ThemeProvider';
const queryClient = new QueryClient();
const router = createBrowserRouter([
  { path: "/", element: <HomePage />, errorElement: <RouteErrorBoundary /> },
  { path: "/blog", element: <BlogPage />, errorElement: <RouteErrorBoundary /> },
  { path: "/blog/:id", element: <BlogDetailPage />, errorElement: <RouteErrorBoundary /> },
  { path: "/market", element: <MarketPage />, errorElement: <RouteErrorBoundary /> },
  { path: "/market/:id", element: <MarketDetailPage />, errorElement: <RouteErrorBoundary /> },
  { path: "/services", element: <ServicesPage />, errorElement: <RouteErrorBoundary /> },
  { path: "/contact", element: <ContactPage />, errorElement: <RouteErrorBoundary /> },
  { path: "/auth", element: <AuthPage />, errorElement: <RouteErrorBoundary /> },
  { path: "/panel", element: <DashboardPage />, errorElement: <RouteErrorBoundary /> },
  { path: "/admin", element: <AdminPage />, errorElement: <RouteErrorBoundary /> },
]);
createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <ErrorBoundary>
          <RouterProvider router={router} />
          <Toaster richColors position="bottom-right" />
        </ErrorBoundary>
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)