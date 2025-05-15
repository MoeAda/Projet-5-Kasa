import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import logements from "../../data/logement.json";
import Slider from "../components/Slider";
import Host from "../components/Host";
import Tags from "../components/Tags";
import Error404 from "./Error404";
import Rating from "../components/Rating";
import Collapse from "../components/Collapse";

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
        <h2 className="house__title">{logement.title}</h2>
        <p>{logement.location}</p>
        <div className="house__host">
          <Host owner={logement.host} />
        </div>
        <div><Rating stars={logement.rating} /></div>
        <div><Tags tags={logement.tags} /></div>
        <div><Collapse content={logement.description} title="Description" /></div>
        <div><Collapse content={logement.equipments} title="Équipements" /></div>  
      </div>
    </>
  );
}

export default House;
