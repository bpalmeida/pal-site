import { createBrowserRouter } from "react-router";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Lessons from "./pages/school/Lessons";
import Rides from "./pages/school/Rides";
import Events from "./pages/school/Events";
// KidsCamp hidden for now
// import KidsCamp from "./pages/school/KidsCamp";
import Boarding from "./pages/Boarding";
import Facilities from "./pages/Facilities";
import Location from "./pages/Location";
import Gallery from "./pages/Gallery";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "school/lessons", Component: Lessons },
      { path: "school/rides", Component: Rides },
      { path: "school/events", Component: Events },
      // { path: "school/kids-camp", Component: KidsCamp },
      { path: "boarding", Component: Boarding },
      { path: "facilities", Component: Facilities },
      { path: "gallery", Component: Gallery },
      { path: "location", Component: Location },
    ],
  },
]);
