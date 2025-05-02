import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "@/pages/Homepage";
import Destination from "@/pages/Destination";
import Crew from "@/pages/Crew";
import Technology from "@/pages/Technology";
import RootLayout from "@/layout/RootLayout";

function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<Homepage />} />
            <Route path="destination" element={<Destination />}>
              <Route path=":planetName" element={<Destination />} />
            </Route>
            <Route path="crew" element={<Crew />}>
              <Route path=":name" element={<Crew />} />
            </Route>
            <Route path="technology" element={<Technology />}>
              <Route path=":techName" element={<Technology />} />
            </Route>
            <Route path="*" element={<Homepage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default AppRoutes;
