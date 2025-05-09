function Host({ owner }) {
  return (
    <>
      {owner.name}
      <img src={owner.picture} />
    </>
  );
}

export default Host;
