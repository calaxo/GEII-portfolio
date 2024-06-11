import Header from "@layout/Header";
import Footer from "@layout/Footer";
import { Outlet } from "react-router-dom";
import ScrollToAnchor from "@components/ScrollToAnchor";

const Layout = () => (
  <>
    <Header />

  <ScrollToAnchor /> {/* Composant de défilement */}
    <Outlet />

    <Footer/>
  </>
);

export default Layout;