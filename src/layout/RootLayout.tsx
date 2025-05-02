import NavigationBar from "@/components/Shared/NavigationBar";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <>
      <NavigationBar />
      <Outlet />
    </>
  );
}

export default RootLayout;
