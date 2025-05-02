function Card({ title, cover, id }) {
  return (
    <>
      <a href={`/logement/${id}`} key={id}>
        <img src={cover} class="card-img" />
        <h2 class="toto">{title}</h2>
      </a>
    </>
  );
}

export default Card;
