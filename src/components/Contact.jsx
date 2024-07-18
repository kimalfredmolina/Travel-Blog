import background from '../assets/phbg.avif';

const Contact = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-cover bg-center rounded-lg" 
      style={{ backgroundImage: `url(${background})` }}>
      <div className="bg-black bg-opacity-80 p-8 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">Contact Us</h2>
        <form>
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input 
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              id="name" 
              type="text" 
              placeholder="Your Name"/>
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input 
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              id="email" 
              type="email" 
              placeholder="Your Email"/>
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="subject">
              Subject
            </label>
            <input 
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              id="subject" 
              type="text" 
              placeholder="Subject"/>
          </div>
          <div className="mb-6">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea 
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              id="message" 
              rows="5" 
              placeholder="Your Message">
            </textarea>
          </div>
          <div className="flex items-center justify-center">
            <button 
              className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
              type="button">SEND
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;

