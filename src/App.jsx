import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";
import CrewMember from "./components/CrewMember";
import Tech from "./components/Tech";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="destination" element={<Destination />}>
          <Route path=":planetName" element={<Destination />} />
        </Route>
        <Route path="crew" element={<Crew />}>
          <Route path="crew/:name" element={<CrewMember />} />
        </Route>
        <Route path="technology" element={<Technology />}>
          <Route path="technology/:id" element={<Tech />}></Route>
        </Route>
        <Route path="*" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
