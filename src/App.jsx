import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";
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
          <Route path=":name" element={<Crew />} />
        </Route>
        <Route path="technology" element={<Technology />}>
          <Route path="technology/:id" element={<Technology />} />
        </Route>
        <Route path="*" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
