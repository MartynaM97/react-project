import styles from "./Favorite.module.scss";
import PageTitle from "../PageTitle/PageTitle";
import Card from "../Card/Card.js";
import { useSelector } from "react-redux";
import { getFavoriteCards } from "../../redux/cardsRedux.js";

const Favorite = () => {
  const favoriteCards = useSelector(getFavoriteCards);

  if (favoriteCards.length === 0)
    return (
      <div>
        <PageTitle>FAVORITE</PageTitle>
        <p className={styles.subtitle}>No favorite cards</p>
      </div>
    );

  return (
    <div>
      <PageTitle>FAVORITE</PageTitle>
      <div className={styles.cardsWrapper}>
        <div className={styles.column}>
          <ul className={styles.cards}>
            {favoriteCards.map((card) => (
              <Card
                key={card.id}
                id={card.id}
                isFavorite={card.isFavorite}
                title={card.title}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Favorite;
