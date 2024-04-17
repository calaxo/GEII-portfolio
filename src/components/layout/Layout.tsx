import Header from "@layout/Header";
import Footer from "@layout/Footer";
import { Outlet } from "react-router-dom";


const Layout = () => (
  <>
    <Header />

    <Outlet />

    <Footer/>
  </>
);

export default Layout;