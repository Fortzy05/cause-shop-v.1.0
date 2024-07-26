import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ShoppingPage from "./components/ShoppingPage";
import ShoppingpageHighlight from "./components/ShoppingpageHighlight";
function page() {
  return (
    <section>
      <Header />
      <ShoppingPage />
      
      <Footer />
    </section>
  );
}

export default page;
