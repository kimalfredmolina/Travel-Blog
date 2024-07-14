import luz1 from "../assets/luz1.jpg";
import luz2 from "../assets/luz2.jpeg";
import luz3 from "../assets/luz3.jpg";
import luz4 from "../assets/luz4.jpg";

import vis1 from "../assets/vis1.jpg";
import vis2 from "../assets/vis2.jpg";
import vis3 from "../assets/vis3.webp";
import vis4 from "../assets/vis4.webp";

const Info = () => {
  return (
    <div className="container mx-auto p-4">

      <div className="text-black w-full text-center">
        <h1 className="text-5xl font-bold">Philippines Tourist Attractions</h1>
      </div>

      <div className="programs-section mt-8">
        <h2 className="text-2xl font-bold mb-4 text-black">Luzon Tourist Spot</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="card bg-white shadow-md rounded-lg p-4 relative">
            <img src={luz1} alt="Luz1" className="rounded-lg"/>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white w-full text-center">
              <h3 className="text-xl font-semibold">Ilocos Norte</h3>            
            </div>
          </div>
          <div className="card bg-white shadow-md rounded-lg p-4 relative">
            <img src={luz2} alt="Luz2" className="rounded-lg"/>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white w-full text-center">
              <h3 className="text-xl font-semibold">Ifuogao</h3>
            </div>
          </div>
          <div className="card bg-white shadow-md rounded-lg p-4 relative">
            <img src={luz3} alt="Luz3" className="rounded-lg"/>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white w-full text-center">
              <h3 className="text-xl font-semibold">Bicol</h3>
            </div>
          </div>
          <div className="card bg-white shadow-md rounded-lg p-4 relative">
            <img src={luz4} alt="Luz4" className="rounded-lg"/>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white w-full text-center">
              <h3 className="text-xl font-semibold">Pangasinan</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="programs-section mt-8">
        <h2 className="text-2xl font-bold mb-4 text-black">Visayas Tourist Spot</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="card bg-white shadow-md rounded-lg p-4 relative">
            <img src={vis1} alt="Tvis1" className="rounded-lg"/>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white w-full text-center">
              <h3 className="text-xl font-semibold">Cebu</h3>
            </div>
          </div>
          <div className="card bg-white shadow-md rounded-lg p-4 relative">
            <img src={vis2} alt="vis2" className="rounded-lg"/>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white w-full text-center">
              <h3 className="text-xl font-semibold">Boracay, Aklan</h3>
            </div>
          </div>
          <div className="card bg-white shadow-md rounded-lg p-4 relative">
            <img src={vis3} alt="vis3" className="rounded-lg"/>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white w-full text-center">
              <h3 className="text-xl font-semibold">Bohol</h3>
            </div>
          </div>
          <div className="card bg-white shadow-md rounded-lg p-4 relative">
            <img src={vis4} alt="vis4" className="rounded-lg"/>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white w-full text-center">
              <h3 className="text-xl font-semibold">Guimaras</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="programs-section mt-8">
        <h2 className="text-2xl font-bold mb-4 text-black">Mindanao Tourist Spot</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="card bg-white shadow-md rounded-lg p-4 relative">
            <img src="../assets/luz5.jpg" alt="min1" className="rounded-lg"/>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white w-full text-center">
              <h3 className="text-xl font-semibold">Tanzania</h3>
            </div>
          </div>
          <div className="card bg-white shadow-md rounded-lg p-4 relative">
            <img src="../assets/luz6.jpg" alt="min2" className="rounded-lg"/>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white w-full text-center">
              <h3 className="text-xl font-semibold">Vietnam</h3>
            </div>
          </div>
          <div className="card bg-white shadow-md rounded-lg p-4 relative">
            <img src="../assets/luz7.jpg" alt="min3" className="rounded-lg"/>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white w-full text-center">
              <h3 className="text-xl font-semibold">Nepal</h3>
            </div>
          </div>
          <div className="card bg-white shadow-md rounded-lg p-4 relative">
            <img src="../assets/luz8.jpg" alt="min4" className="rounded-lg"/>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white w-full text-center">
              <h3 className="text-xl font-semibold">Nicaragua</h3>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Info;
