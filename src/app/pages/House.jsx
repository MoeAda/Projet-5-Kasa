import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import logements from "../../data/logement.json";
import Slider from "../components/Slider";
import Error404 from "./Error404";

function House(){ 
  const {id} = useParams();
  const [activeListing, setActiveHouse] = useState(null)

  useEffect(()=> {
    const house = logements.find((house) => house.id === String(id));
    if(house) {
      setActiveHouse(house);
    }
  }, [id]);

  if(!activeListing){
    return (
      <Error404 />
    )
  }
  return (
    <>
      <div className="house">
        <Slider pictures={activeListing.pictures} title={activeListing.title} />
        <h1>COMPOSANT LOGEMENT</h1>
        <h2>Cozy ..</h2>
        <p>Paris ....</p>
      </div>
    </>
  );
  }

  export default House;
