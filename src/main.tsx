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
import { WorkPage } from '@/pages/WorkPage'
import { ContactPage } from '@/pages/ContactPage'
import { AuthPage } from '@/pages/AuthPage'
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
    element: <WorkPage />, // Placeholder for Phase 1
    errorElement: <RouteErrorBoundary />,
  },
  {
    path: "/market",
    element: <WorkPage />, // Placeholder for Phase 1
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
    element: <HomePage />, // Placeholder
    errorElement: <RouteErrorBoundary />,
  },
  {
    path: "/admin",
    element: <HomePage />, // Placeholder
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