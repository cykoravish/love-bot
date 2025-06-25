import type { RouteObject } from "react-router-dom";
import BirthdayLanding from "../pages/BirthdayLanding";
import LoveTalks from "../pages/LoveTalks";
import Dashboard from "../pages/Dashboard";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <BirthdayLanding />,
  },
  {
    path: "/love-talks",
    element: <LoveTalks />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
];
