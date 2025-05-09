import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import logements from "../../data/logement.json";
import Slider from "../components/Slider";
import Host from "../components/Host";
import Error404 from "./Error404";

function House() {
  const [logement, setLogement] = useState({
    tags: [],
    equipments: [],
    pictures: [],
    rating: "",
    title: "",
    host: { name: "", picture: "" },
    location: "",
  });

  const { id } = useParams();

  useEffect(() => {
    logements.map((unit) => {
      if (unit.id === id) {
        setLogement(unit);
      }
      return null;
    });
  }, [id]);

  if (!logement.id) {
    return <Error404 />;
  }

  return (
    <>
      <div className="house">
      <Slider
          key={logement.id}
          pictures={logement.pictures}
          title={logement.title}
        />
        <h1>COMPOSANT LOGEMENT</h1>
        <h2>{logement.title}</h2>
        <Host owner={logement.host} />
      </div>
    </>
  );
}

export default House;
