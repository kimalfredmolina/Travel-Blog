import bg from "../assets/bg.jpg";
import bg2 from "../assets/bg2.jpg";

const Home = () => {
  return (
    <div>
      <div className="mt-16">
        <div 
          id="Home" 
          className="bg-cover bg-center text-center text-white py-20" 
          style={{ backgroundImage: `url(${bg})` }}>
          <div className="container mx-auto">
            <h1 className="text-5xl font-bold">Explore Philippines</h1>
            <p className="mt-4">Experience the best destination in Philippines</p>
            <div className="mt-8 flex justify-center space-x-4">
              <button className="bg-orange-500 text-black hover:bg-orange-600 px-4 py-2 rounded-full">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      <div id="About" className="bg-foreground text-background py-20">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 p-4">
            <img src={bg2} alt="Cabin Interior" className="rounded shadow-lg" />
          </div>
          <div className="md:w-1/2 p-4">
            <h2 className="text-3xl font-bold">Why choose The Cabin Pros?</h2>
            <p className="mt-4">
              We offer the most luxurious cabins with top-notch amenities and breathtaking views. Our cabins are located in the most serene and picturesque locations, providing you with a perfect getaway
              from the hustle and bustle of city life.
            </p>
            <p className="mt-4">Our team ensures that every cabin is well-maintained and equipped with everything you need for a comfortable stay. From cozy fireplaces to modern kitchens, we have it all.</p>
            <button className="mt-4 bg-primary text-primary-foreground hover:bg-primary/80 px-4 py-2 rounded">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;