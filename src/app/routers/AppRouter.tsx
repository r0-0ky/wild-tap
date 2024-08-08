import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import { HomePage } from "../../pages/home-page";

export const AppRouter: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: '/home',
      element: <HomePage />,
    },
    {
      path: '*',
      element: <Navigate to="/home" />
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}