import logements from "../../data/logement.json";
import Card from "../components/Card";

function Home() {
  return (
    <>
      <div className="banner">
        <p className="banner__text">Chez vous, partout et ailleurs</p>
        <img className="banner__img" src="/public/assets/img-accueil.jpg" />
      </div>
      <section className="gallery">
      {logements.map(({ title, cover, id }) => (
        <Card key={id} title={title} cover={cover} id={id} />
      ))}
      </section>
    </>
  );
}

export default Home;
