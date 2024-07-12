
const Home = () => {
  return (
    <div>
      <div className="absolute inset-0 bg-opacity-50 flex flex-col justify-center items-center text-center text-white">
        <h1 className="text-4xl text-black md:text-6xl font-bold">Explore the world with exciting people</h1>
        <p className="mt-4 text-lg text-black md:text-xl">We help people to find ideal company for joint trips</p>
        <button className="mt-8 bg-orange-500 text-white px-6 py-3 rounded-full text-lg hover:bg-orange-600">
          Start
        </button>
      </div>
    </div>
  );
}

export default Home;