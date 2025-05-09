function Card({ title, cover, id }) {
  return (
    <>
      <a href={`/logement/${id}`} key={id}>
        <figure className="card">
          <img src={cover} alt={title} className="card__img" />
          <figcaption className="card__title">{title}</figcaption>
        </figure>
      </a>
    </>
  );
}

export default Card;
