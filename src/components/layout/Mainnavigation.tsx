import { Fragment, ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

type MainNavigation = {
  children: ReactNode;
};

function MainNavigation({ children }: MainNavigation) {
  return (
    <Fragment>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>

      <footer>
        <Footer />
      </footer>
    </Fragment>
  );
}

export default MainNavigation;
