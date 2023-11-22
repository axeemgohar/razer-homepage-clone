import { Fragment } from "react";
import Nav from "./components/nav/Nav.component";
import Card from "./components/card/Card.component";
import PromoCard from "./components/promocard/PromoCard.component";
import Footer from "./components/footer/Footer.component";
import "./App.css";
const App = () => {
  return (
    <Fragment>
      <Nav />
      <Card
        container="section-one-container"
        content="section-one-content"
        links="section-one-links"
        heading="RING IN THE WINNING SEASON"
        description="DECK THE HALLS WITH EXCLUSIVE OFFERS"
        firstLink="Shop Now"
      />
      <Card
        container="section-two-container"
        content="section-two-content"
        links="section-two-links"
        heading="THE RAZER IMMERSIVE LINE"
        description="MAXIMUM IMMERSION: ACTIVATED"
        firstLink="Learn More"
      />
      <Card
        container="section-three-container"
        content="section-three-content"
        links="section-three-links"
        heading="NEW RAZER BLADE 16"
        description="AUTOMOBILI LAMBORGHINI EDITION"
        firstLink="Learn More"
        secondLink="Buy"
      />
      <div className="promos-flex-container">
        <PromoCard
          container="promo-one-container"
          content="promo-one-content"
          links="promo-one-links"
          heading="THE RAZER FUJIN PRO"
          description="PLAY HARD. BREATH EASY."
          link1="Learn More"
          link2="Buy"
        />
        <PromoCard
          container="promo-two-container"
          content="promo-two-content"
          links="promo-two-links"
          heading="RAZER BLADE 16 & 18 MERCURY"
          description="GET A RAZER GIFT CARD OF UP TO US$400"
          link1="Razer Blade 16"
          link2="Razer Blade 18"
        />
        <PromoCard
          container="promo-three-container"
          content="promo-three-content"
          links="promo-three-links"
          heading="DOLCE&GABBANA | RAZER"
          description="STYLED TO WIN"
          link1="Learn More"
        />
        <PromoCard
          container="promo-four-container"
          content="promo-four-content"
          links="promo-four-links"
          heading="RAZER VIPER MINI SIGNATURE&nbsp;EDITION"
          description="ESPORTS HARDWARE PIECE OF THE YEAR"
          link1="Vote for Us"
        />
        <PromoCard
          container="promo-five-container"
          content="promo-five-content"
          links="promo-five-links"
          heading="DECK THE HALLS WITH SNEKI&nbsp;SNEK"
          description="DOUBLE THE TREES, DOUBLE THE JOY"
          link1="Learn More"
        />
        <PromoCard
          container="promo-six-container"
          content="promo-six-content"
          links="promo-six-links"
          heading="GETTING A RAZER GIFT CARD?"
          description="GET A BONUS ONE ON US"
          link1="Shop Now"
        />
      </div>
      <Footer />
    </Fragment>
  );
};

export default App;
