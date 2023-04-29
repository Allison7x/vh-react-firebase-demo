function Item({ name, description }) {
  return (
    <div className="item">
      <h1>{name}</h1>
      <p>{description}</p>
    </div>
  );
}

export default Item;
