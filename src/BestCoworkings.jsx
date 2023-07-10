import Coworking from "./Coworking";

const BestCoworkings = ({ coworkings }) => {
  const displayBestCoworkings = false;

  // au click sur le bouton,
  // je veux afficher les coworkings
  // pour ça, je dois changer la valeur de displayBestCoworkings

  const handleClick = () => {
    console.log("click");
  };

  return (
    <section className="best-coworkings-section">
      <h2>Best coworkings</h2>

      <button onClick={handleClick}>Afficher les coworkings</button>

      {displayBestCoworkings && (
        <div className="coworkings-list">
          {coworkings.map((coworking) => {
            return <Coworking coworking={coworking} />;
          })}
        </div>
      )}
    </section>
  );
};

export default BestCoworkings;
