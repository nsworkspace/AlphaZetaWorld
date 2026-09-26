import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Products from "./pages/Products";

import Contact from "./pages/Contact/Contact";
import WebAppDevelopment from "./pages/WebAppDevelopment/WebAppDevelopment";
import AiVideo from "./pages/AiVideo/AiVideo";
import ProductsLab from "./pages/ProductsLab/ProductsLab";
import SeoAi from "./pages/SeoAi";

function MainLayout() {
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

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/web-app-development"
            element={<WebAppDevelopment />}
          />
          <Route path="/ai-video" element={<AiVideo />} />
          <Route path="/products-lab" element={<ProductsLab />} />
          <Route path="/seo-ai" element={<SeoAi />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}