import Card from '../UI/Card'
import { useTrail, animated } from 'react-spring';

const ServicePage = () => {

  const services =[

    {
      className:"card1",
      id:1,
      title:"Custom Website Development",
      description:"We provide the best custom website development services to our clients.",
    },
    {
      className:"card2",
      id:2,
      title: 'Single Page Applications (SPAs)',
      description: ' We provide the best SPAs development services to our clients, using React Library.',
    },
    {
      className:"card3",
      id:3,
      title: 'Responsive Web Design',
      description: 'We provide the best responsive web design services to our clients, Ensuring websites are mobile-friendly and look great on all devices and screen sizes.',
    },
    {
      className:"card4",
      id:4,
      title:'UI/UX Design',
      description: 'We provide the best UI/UX design services to our clients.',
      },
      {
        className:"card5",
        id:5,
        title:'Website Maintenance and Support',
        description: 'We provide the best website maintenance and support services to our clients.',
        },
        {
          className:"card6",
          id:6,
          title: 'Cross-Browser Compatibility',
          description: 'We provide the best cross-browser compatibility services to our clients.',
        },
        {
          className:"card7",
          id:7,
          title: 'Search Engine Optimization (SEO)',
          description: 'We provide the best SEO services to our clients.',
        },
        {
          className:"card8",
          id:8,
          title: 'Consultation and Code Review',
          description: 'We provide the best consultation and code review services to our clients.',
        },
        {
          className:"card9",
          id:9,
          title: 'API Integration',
          description: 'We provide the best API integration services to our clients.',
        },
        {
          className:"card10",
          id: 10,
          title: 'Web Animation and Interactivity',
          description: 'Implementing animations and interactive elements to enhance user engagement.',
        },
        {
          className:"card11",
          id:11,
          title: 'Web Accessibility',
          description: 'Ensuring websites are accessible to people with disabilities.',

        },
        {
          className:"card12",
          id:12,
          title: 'Web Security',
          description: 'Protecting websites from cyber threats and vulnerabilities.',
        },
        {
          className:"card13",
          id:13,
          title: 'Custom Component Development',
          description: 'Developing custom components to meet specific project requirements.',
        }
  ]

  
   // Create trail animations for the cards
   const trail = useTrail(services.length, {
    opacity: 1,
    transform: 'translateY(0px)',
    from: { opacity: 0, transform: 'translateY(20px)' },
    delay: 300, // Initial delay before the first card starts animating
    config: { tension: 200, friction: 20 }, // Smoothness and speed of animation
  });

  return (
    <div className="hero bg-transparent min-h-screen w-11/12 md:9/12 lg:w-9/12 mx-auto pt-20">
    <div className="container mx-auto py-10">
      <h2 className="text-3xl font-bold text-center mb-6">Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 pb-10">
      {trail.map((style, index) => (
        <animated.div key={services[index].id} style={style}>
          <Card
            name={services[index].title}
            description={services[index].description}
          />
        </animated.div>
      ))}
      </div>
    </div>
  </div>



  )
}

export default ServicePage
