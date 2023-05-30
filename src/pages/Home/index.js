import Card from "../../components/Card";
import Category, { categories, filterCategory } from "../../components/Category";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Carousel from "../../components/Carousel";
import ScrollToTopButton from "../../components/ScrollToTopButton";

function Home() {

  return (
    <>
      <ScrollToTopButton />
      <Header />
      <Container>

        {categories.map((category, index) =>
          <Category category={category} key={index} >
            <Carousel>
              {filterCategory(index).map((video) => <Card id={video.id} key={video.id} url={video.url} cover={video.cover} />)}
            </Carousel>
          </Category>
        )}
      </Container>

      <Footer />
    </>
  );
}

export default Home;
