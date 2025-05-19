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
  const [loading, setLoading] = useState(true)
  const [logement, setLogement] = useState({
    tags: [],
    equipments: [],
    pictures: [],
    rating: "",
    title: "",
    host: { name: "", picture: "" },
    location: ""
  });

  const { id } = useParams();

  useEffect(() => {
    logements.map((unit) => {
      if (unit.id === id) {
        setLogement(unit);
           setLoading(false)
      }

      setLoading(false)


    });
  }, [id]);

  if(loading){
    return <><div>Chargement ...</div></>
  }

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
        <div className="house-container">
          <div>
          <h2 className="house__title">{logement.title}</h2>
          <p className="house__text">{logement.location}</p>
          <div className="house__tag"><Tags tags={logement.tags} /></div>
          </div>
          <div className="house-info">
            <div className="house-info__host">
              <Host owner={logement.host} />
            </div>
            <div className="house-info__rating"><Rating stars={logement.rating} /></div>
          </div>
        </div>
          <div className="house-collapse">
            <Collapse content={logement.description} title="Description" />
            <Collapse content={logement.equipments} title="Équipements" />
        </div>  
      </div>
    </>
  );
}

export default House;
