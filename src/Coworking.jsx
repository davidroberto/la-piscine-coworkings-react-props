const Coworking = ({ coworking }) => {
  return (
    <article className="coworking-card" key={coworking.id}>
      <img src={coworking.image} alt={coworking.name} />
      <h3>{coworking.name}</h3>
      <p>{coworking.address}</p>
      <p>{coworking.city}</p>
      <p>{coworking.rating}</p>
    </article>
  );
};

export default Coworking;
