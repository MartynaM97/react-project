import styles from "./Card.module.scss";
import clsx from "clsx";
import { useDispatch } from "react-redux";
import { toggleFavoriteCard } from "../../redux/cardsRedux.js";
import { removeCard } from "../../redux/cardsRedux.js";

const Card = (props) => {
  const dispatch = useDispatch();

  const toggle = (e) => {
    e.preventDefault();
    dispatch(toggleFavoriteCard(props.id));
  };

  const remove = (e) => {
    e.preventDefault();
    dispatch(removeCard(props.id));
  };

  return (
    <li className={styles.card}>
      {props.title}
      <div>
        <button
          className={clsx(
            "fa fa-star-o",
            styles.button,
            props.isFavorite && styles.isActive
          )}
          onClick={toggle}
        ></button>
        <button
          className={clsx("fa fa-trash", styles.button)}
          onClick={remove}
        ></button>
      </div>
    </li>
  );
};

export default Card;
