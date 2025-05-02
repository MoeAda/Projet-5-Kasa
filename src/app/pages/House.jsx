import logements from "../../data/logement.json";

// Récupérer l'id que l'utilisateur souhaite voir (dans l'url) USEPARAMS
// Récupérer le logement en fonction de l'id dans la variable 'logements'
// Afficher les informations via des composants (Rating, Host, Carousel, Dropdown, Tags)
// USEstate

// Si l'utilisateur saisie un logement qui n'existe pas, on le redirige sur la page 404
function House() {
  return (
    <>
      <h1>COMPOSANT LOGEMENT</h1>
      <h2>Cozy ..</h2>
      <p>Paris ....</p>
    </>
  );
}

export default House;
