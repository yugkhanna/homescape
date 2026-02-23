import "@/App.css";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Verticals from "@/components/Verticals";
import Partners from "@/components/Partners";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Toaster } from "sonner";

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Toaster
        position="top-right"
        theme="dark"
        toastOptions={{
          style: {
            background: "#0f172a",
            border: "1px solid #1e293b",
            color: "#f8fafc",
          },
        }}
      />
      <Header />
      <main>
        <Hero />
        <About />
        <Verticals />
        <Partners />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
