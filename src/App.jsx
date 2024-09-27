import Footer from "./components/common/Footer";
import Section from "./components/common/Section";
import Navbar from "./components/navbar/Navbar";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <Section>
      <Navbar />
      <Outlet />
      <Footer />
    </Section>
  );
}
