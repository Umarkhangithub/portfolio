import './Card.scss'

const Card = (props) => {
  return (
    <div className="box card bg-sky-500 text-white color shadow-xl hover:scale-105">
      <div className={`p-4 h-64`}>
        <h2 className="card-title text-xl pb-2">{props.name}</h2>
        <p>{props.description}</p>
        <p>{props.level}</p>
      </div>
    </div>
  );
};

export default Card;
