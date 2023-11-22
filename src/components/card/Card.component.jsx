import "./card.styles.css";

const Card = ({
  container,
  content,
  links,
  heading,
  description,
  firstLink,
  secondLink,
}) => {
  return (
    <section className={`card-container ${container}`}>
      <div className={`card-content-container ${content}`}>
        <h2>{heading}</h2>
        <p>{description}</p>
        <div className={`card-links-container ${links}`}>
          {firstLink && <a href="/">{firstLink}</a>}
          {secondLink && <a href="/">{secondLink}</a>}
        </div>
      </div>
    </section>
  );
};

export default Card;
