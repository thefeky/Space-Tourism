import "./App.css";
import { DataProvider } from "./contexts/DataContext";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <>
    <DataProvider>
      <AppRoutes />
    </DataProvider>
    </>
  );
}

export default App;
