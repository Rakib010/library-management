import { Outlet } from "react-router";
import Navbar from "./layout/Navbar";
import { Footer } from "./pages/components/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
