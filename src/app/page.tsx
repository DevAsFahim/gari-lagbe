import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PublicHome from "@/components/PublicHome";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-white text-black">
      <Navbar/>
      <PublicHome />
      <Footer/>
    </div>
  );
}
