// src/App.js
import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Cards from "./components/Cards";
import Programs from "./components/Programs";
import Features from "./components/Features";
import CompareTable from "./components/CompareTable";
import Plan from "./components/Plan";
import Store from "./components/Store";
import Ratings from "./components/Ratings";
import Faqs from "./components/Faqs";
import Account from "./components/Account";
import Footer from "./components/Footer";
// Import PopupForm component when ready

function App() {
  // const [formOpen, setFormOpen] = useState(false);

  return (
    <div className="bg-gray-50">
      <Header />
      <HeroSection />
      <Cards />
      <Programs />
      <Features />
      <CompareTable />
      <Plan />
      <Store />
      <Ratings />
      <Faqs />
      <Account />
      <Footer />
    </div>
  );
}

export default App;
