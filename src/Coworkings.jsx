import { useState } from "react";
import Coworking from "./Coworking";

const Coworkings = ({ coworkings }) => {
  // useState permet de déclarer une variable de "state"
  // c'est à dire stockée dans une sorte de BDD
  // qui est propre au composant
  // on passe à useState la valeur initiale voulur pour la variable

  // useState retourne la valeur de la variable et une fonction
  // qui permet de modifier la valeur de la variable et
  // de recharger le composant (donc de re-exécuter le code)
  // dans la page
  const [displayCoworkings, setDisplayCoworkings] = useState(false);

  const handleClick = () => {
    // au click, on modifie la valeur de la variable du state
    // et donc le composant est rechargé
    setDisplayCoworkings(true);
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
