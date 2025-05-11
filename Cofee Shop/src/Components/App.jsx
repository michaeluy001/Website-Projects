import Header from "./Header";
import HeroArea from "./Hero/HeroArea";
import Features from "./Features";
import Socials from "./Socials";
import Footer
 from "./Footer";
function App() {
  return (
    <>
      <div className="scroll-smooth relative w-full h-full snap-y">
        <Header />
        <HeroArea />
        <Features />
        <Socials />
        <Footer />
      </div>
    </>
  );
}

export default App;
