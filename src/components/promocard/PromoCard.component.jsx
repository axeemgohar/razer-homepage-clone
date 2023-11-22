import "./promocard.styles.css";

const PromoCard = ({
  container,
  content,
  links,
  heading,
  description,
  link1,
  link2,
}) => {
  return (
    <section className={`promo-card-container ${container}`}>
      <div className={`promo-card-content-container ${content}`}>
        <h3>{heading}</h3>
        <p>{description}</p>
        <div className={`promo-card-links-container ${links}`}>
          {link1 && <a href="/">{link1}</a>}
          {link2 && <a href="/">{link2}</a>}
        </div>
      </div>
    </section>
  );
};

export default PromoCard;
