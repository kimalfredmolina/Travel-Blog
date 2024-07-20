

const Pricing = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-12">
      <h1 className="text-4xl font-bold mb-8">Plans and Pricing</h1>
      <div className="flex mb-8">
        <button className="bg-gray-200 px-4 py-2 rounded-l-full">Yearly</button>
        <button className="bg-white px-4 py-2 rounded-r-full">Monthly</button>
      </div>
      <div className="flex space-x-8">
        <div className="bg-white p-8 rounded-lg shadow-lg w-80">
          <h2 className="text-xl font-bold text-center mb-4">Free</h2>
          <p className="text-4xl font-bold text-center mb-4">$0</p>
          <ul className="mb-8">
            <li className="mb-2">Limited to 3 Slide Decks</li>
            <li className="mb-2">Custom Branding</li>
            <li className="mb-2">Unlimited Sharing</li>
          </ul>
          <button className="w-full bg-purple-500 text-white py-2 rounded-lg">Get Started</button>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg w-80">
          <h2 className="text-xl font-bold text-center mb-4">Pro</h2>
          <p className="text-4xl font-bold text-center mb-4">$10 <span className="text-sm">/ month</span></p>
          <p className="text-center mb-4">For up to 4 members</p>
          <ul className="mb-8">
            <li className="mb-2">1-4 Members</li>
            <li className="mb-2">Unlimited Slide Decks</li>
            <li className="mb-2">Private Slide Decks</li>
            <li className="mb-2">Remove Paste Branding</li>
          </ul>
          <button className="w-full bg-purple-500 text-white py-2 rounded-lg">Get Started</button>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg w-80">
          <h2 className="text-xl font-bold text-center mb-4">Team</h2>
          <p className="text-4xl font-bold text-center mb-4">$30 <span className="text-sm">/ month</span></p>
          <p className="text-center mb-4">For up to 25 members</p>
          <ul className="mb-8">
            <li className="mb-2">5-25 Members</li>
            <li className="mb-2">Unlimited Slide Decks</li>
            <li className="mb-2">Private Slide Decks</li>
            <li className="mb-2">Remove Paste Branding</li>
            <li className="mb-2">Priority Customer Support</li>
          </ul>
          <button className="w-full bg-purple-500 text-white py-2 rounded-lg">Get Started</button>
        </div>
      </div>
      <p className="mt-4 text-gray-500">Contact us for Enterprise plans or for teams larger than 25 members.</p>
    </div>
  );
};

export default Pricing;

