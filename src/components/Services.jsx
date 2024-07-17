import airplaneIcon from '../assets/airplane.png';
import limoIcon from '../assets/car.jpg';
import hotelIcon from '../assets/hotel.png';
import chefIcon from '../assets/chef.png';
import ticketsIcon from '../assets/ticket.png';
import supportIcon from '../assets/support.png';
import tourGuideIcon from '../assets/tour.png';
import likeIcon from '../assets/like.png';

const Services = () => {
  const services = [
    { icon: airplaneIcon, title: 'Airport assistance' },
    { icon: limoIcon, title: 'Private airport transfers & limousine service' },
    { icon: hotelIcon, title: 'Hotel reservations & private accommodations' },
    { icon: chefIcon, title: 'Private chef & catering service' },
    { icon: ticketsIcon, title: 'Organization of tickets for cultural events & exhibitions' },
    { icon: supportIcon, title: '24hrs support' },
    { icon: tourGuideIcon, title: 'Local Tour Guides' },
    { icon: likeIcon, title: 'Best recommendations for authentic experiences' },
  ];

  return (
    <div className="container mx-auto p-8 mt-8 mb-8">
      <h2 className="text-5xl font-bold text-center mb-8 text-black">Our Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 text-black font-semibold">
        {services.map((service, index) => (
          <div key={index} className="text-center">
            <img src={service.icon} alt={service.title} className="mx-auto mb-4 h-24 w-24" />
            <p className="text-lg">{service.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;

