import bg from "../assets/bg.jpg";
import bg2 from "../assets/bg2.jpg";

const Home = () => {
  return (
    <div>
      <div className="mt-16">
        <div 
          id="Home" 
          className="bg-cover bg-center text-center text-white py-20 rounded-lg" 
          style={{ backgroundImage: `url(${bg})` }}>
          <div className="container mx-auto">
            <h1 className="text-5xl font-bold">Explore Philippines</h1>
            <p className="mt-4">Experience the best destination in Philippines</p>
            <div className="mt-8 flex justify-center space-x-4">
              <button className="bg-orange-500 text-black hover:bg-orange-600 px-4 py-2 rounded-full font-bold">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      <div id="About" className="bg-foreground text-black py-20">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 p-4">
            <img src={bg2} alt="Philippines Beach" className="rounded-lg" />
          </div>
          <div className="md:w-1/2 p-4">
            <h2 className="text-3xl font-bold">Why Visit The Philippines?</h2>
            <p className="mt-4 text-black font-bold">
              Discover the Philippines, an archipelago of over 7,000 islands boasting stunning beaches, vibrant culture, and unparalleled natural beauty. Whether you're seeking adventure, relaxation, or cultural experiences, the Philippines has something for everyone.
            </p>
            <p className="mt-4 text-black font-semibold">
              From the white sands of Boracay to the breathtaking Chocolate Hills of Bohol, the Philippines offers a diverse range of attractions. Experience the warmth and hospitality of the Filipino people while enjoying world-class amenities and unique local flavors.
            </p>
            <button className="mt-4 bg-orange-500 text-black hover:bg-orange-600 px-4 py-2 rounded-full font-semibold">Explore More</button>
          </div>
        </div>
      </div>


    </div>
  );
}

export default Home;