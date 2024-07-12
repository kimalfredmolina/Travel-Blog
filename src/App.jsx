import Navbar from "./components/Navbar"
import Home from "./components/Home"

const App = () => {
  return (
    <div>
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>


      <div className="container mx-auto px-8">
        <Navbar />
        <Home />
        </div>
    </div>
  );
}

export default App;
