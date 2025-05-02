import Header from "../components/Header";
import Footer from "../components/Footer";

import { Outlet } from "react-router";


function Default() {
  return (
    <>
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default Default;
