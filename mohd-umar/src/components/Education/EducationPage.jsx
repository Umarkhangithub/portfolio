import Card from "../UI/Card";
import { useTrail, animated } from 'react-spring';

const EducationPage = () => {
  const skills = [
    {
      className: 'card1',
      id: 1,
      name: "2022: HTML & CSS",
     
      description: 'I learned the basics of HTML and CSS, including how to structure and style web pages.',
      level: "Intermediate",
    },
    { 
      className: 'card2',
      id: 2,
      name: "2022: HTML5 & CSS3(flex-box, gird etc)",
     
      description:  'I learned the basics of HTML5 and CSS3, including how to create responsive web pages using flex-box and grid.',
      level: "Advanced",
    },
    { 
      className: 'card3',
      id: 3,
      name: "2023: JavaScript & jquery",
     
      description:  'I learned the basics of JavaScript and jQuery, including how to create interactive web pages.',

      level: "Intermediate",
    },
    {
      className: 'card4',
      id: 4,
      name: "2023: Version control(Git GitHub) ",
     
      description:  'I learned the basics of version control using Git and GitHub, including how to manage code changes and collaborate with others.',

      level: "Intermediate",
    },
    { 
      className: 'card5',
      id: 5,
      name: "2023: Bootstrap & Tailwind",
      description:  ' learned the basics of Bootstrap and Tailwind, including how to create responsive web pages using these frameworks.',
      level: "Intermediate",
    },
    { 
      className: 'card6',
      id: 6,
      name: "2024: React",
      description: 'I learned react and state management, including how to create interactive web pages using this framework.',
      level: "Advanced",
    },
    { 
      className: 'card7',
      id: 7,
      name: "2024: Material UI",
      description:  'I learned advanced features of Material UI, including how to create responsive web pages using this framework.',
      level: "Intermediate",
    },
   
    { 
      className: 'card8',
      id: 8,
      name: "2024: React Router",
      description:  'I learned react router and how to create interactive web pages using this framework.',
      level: "Intermediate",
    },
   
  ];


   // Create trail animations for the cards
   const trail = useTrail(skills.length, {
    opacity: 1,
    
    transform: 'translateY(0px)',
    from: { opacity: 0, transform: 'translateY(20px)' },
    delay: 300, // Initial delay before the first card starts animating
    config: { tension: 200, friction: 20 }, // Smoothness and speed of animation
  });

  return (
    <div className="hero bg-transparent min-h-screen w-11/12 md:9/12 lg:w-9/12 mx-auto pt-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-6">Education</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 pb-10">
        {trail.map((style, index) => (
        <animated.div key={skills[index].id} style={style}>
          <Card
            className={skills[index].className}
            name={skills[index].name}
            description={skills[index].description}
            level={skills[index].level}
          />
        </animated.div>
      ))}
        </div>
      </div>
    </div>
  );
};

export default EducationPage;
