import { useSpring, animated } from 'react-spring';


const Icon = (props) => {
  
  const hoverAnimation = useSpring({
    from: { opacity: 0, transform: 'scale(1)', rotate: -40 },
    to: { opacity: 1, transform: 'scale(1.2)', rotate: 10 },
    delay: 1300,
    config: { tension: 170, friction: 26 },
});

  return (
  <animated.div className="icon" style={hoverAnimation}>
     <a href={props.link} target="_blank" className=" bg-white rounded-md gap-2 grid  text-2xl m-2">
              <i
                className={`${props.brands} ${props.iconName} bg-transparent text-sky-500 p-2  hover:bg-sky-800 hover:rounded-md hover:text-white duration-500`}
                title={props.title}
              ></i>
            </a>
  </animated.div>
  )
}

export default Icon
