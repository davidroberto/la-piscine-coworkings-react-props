import Coworking from "./Coworking";

const BestCoworkings = ({ coworkings }) => {
  // trouve dans tous les coworkings ceux qui ont une note supérieure ou égale à 4
  // on utilise la fonction filter (qui fait une boucle)

  const bestCoworkings = coworkings.filter((coworking) => {
    return coworking.rating >= 4;
  });

  return (
    <section>
      <h2>Best coworkings</h2>
      <div>
        {bestCoworkings.map((coworking) => {
          return <Coworking coworking={coworking} />;
        })}
      </div>
    </section>
  );
};

export default BestCoworkings;
