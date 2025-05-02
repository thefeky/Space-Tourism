// import Footer from "@/components/Shared/Footer";
import NavigationBar from "@/components/Shared/NavigationBar";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <>
      <NavigationBar />
      <Outlet />
      {/* <Footer /> */}
    </>
  );
}

export default RootLayout;
