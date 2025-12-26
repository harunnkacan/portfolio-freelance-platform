import '@/lib/errorReporter';
import { enableMapSet } from "immer";
enableMapSet();
import React from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
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
import { AboutPage } from '@/pages/AboutPage'
import { Toaster } from '@/components/ui/sonner'
import { ThemeProvider } from '@/components/layout/ThemeProvider';
import { SiteLayout } from '@/components/layout/SiteLayout';
const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: "/",
    element: <SiteLayout />,
    errorElement: <RouteErrorBoundary />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "hakkinda", element: <AboutPage /> },
      { path: "blog", element: <BlogPage /> },
      { path: "blog/:id", element: <BlogDetailPage /> },
      { path: "market", element: <MarketPage /> },
      { path: "market/:id", element: <MarketDetailPage /> },
      { path: "services", element: <ServicesPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "auth", element: <AuthPage /> },
      { path: "panel", element: <DashboardPage /> },
    ]
  },
  { 
    path: "/admin", 
    element: <AdminPage />, 
    errorElement: <RouteErrorBoundary /> 
  },
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