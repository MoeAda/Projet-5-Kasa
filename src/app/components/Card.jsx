function Card({ title, cover, id }) {
  return (
    <>
      <figure className="card">
        <a href={`/logement/${id}`} key={id}>
        <img src={cover} alt={title} className="card__img" />
        <figcaption className="card__title">{title}</figcaption>
      </a>
      </figure>
    </>
  );
}

export default Card;
