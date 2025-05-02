import logements from "../../data/logement.json";
import Card from "../components/Card";

function Home() {
  return (
    <>
      <h1>Coucou</h1>
      {logements.map(({ title, cover, id }) => (
        <Card key={id} title={title} cover={cover} id={id} />
      ))}
    </>
  );
}

export default Home;
