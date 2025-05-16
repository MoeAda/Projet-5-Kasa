function Host({ owner }) {
  return (
    <>
      <p className="host-name">{owner.name}</p>
      <img className="host-img" src={owner.picture} />
    </>
  );
}

export default Host;
