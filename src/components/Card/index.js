import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import iconFavorite from "./favorite.png";     /* branco */
import iconUnfavorite from "./unfavorite.png"; /* vermelho */
import { useFavoriteContext } from "../../contexts/Favorites";

function Card({ id, url, cover }) {

    const { favorite, addFavorite } = useFavoriteContext()
    const isFavorite = favorite.some((fav) => fav.id === id)
    const icone = !isFavorite ? iconFavorite : iconUnfavorite

    return (
        <section className={styles.card}>
            <a href={url} target="_blank" >
                <img src={cover} alt="Capa" className={styles.capa} />
            </a>
            <figure className={styles.icon}>
                <img
                    src={icone}
                    alt="Ícone"
                    onClick={() => addFavorite({id})}
                />
            </figure>
        </section>
    );
}

export default Card;
