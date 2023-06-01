import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ScrollToTopButton from "../../components/ScrollToTopButton";
import styles from "./Principal.module.css";

function Principal() {

  return (
    <>
      <ScrollToTopButton />
      <Header />
      <div className={styles.home}>
            <div className={styles.text}>
                <h1>"A book is proof that humans are capable of working magic"</h1>
                <a href="https://pt.wikipedia.org/wiki/Carl_Sagan" target="_blank">Carl Sagan</a>
            </div>
        </div>

      <Footer />
    </>
  );
}

export default Principal;