import { useState } from "react";
import Coworking from "./Coworking";

const Coworkings = ({ coworkings }) => {
  const [displayCoworkings, setDisplayCoworkings] = useState(false);

  const handleClick = () => {
    setDisplayCoworkings(!displayCoworkings);
  };

  return (
    <section>
      <h2>Our coworkings</h2>

      <button onClick={handleClick}>Afficher les coworkings</button>

      {displayCoworkings && (
        <div className="coworkings-list">
          {coworkings.map((coworking) => {
            return <Coworking coworking={coworking} />;
          })}
        </div>
      )}
    </section>
  );
};

export default Coworkings;
