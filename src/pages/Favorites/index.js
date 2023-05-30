import Header from "../../components/Header";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import VideoList from "../../components/VideoList";
import styles from "./Favorites.module.css";
import { useFavoriteContext } from "../../contexts/Favorites";
import ScrollToTopButton from "../../components/ScrollToTopButton";

function Favorites() {

    const { favorite } = useFavoriteContext()

    return (
        <>
            <ScrollToTopButton />
            <Header />
            <Container>
                <section className={styles.favorites}>
                    <h2>Favorites</h2>
                    { <VideoList videos={favorite} emptyHeading="Empty" /> }
                </section>
            </Container>
            <Footer />
        </>
    );
}

export default Favorites;
