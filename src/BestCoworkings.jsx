import Coworking from "./Coworking";

const BestCoworkings = ({ coworkings }) => {
  const bestCoworkings = coworkings.filter((coworking) => {
    return coworking.rating >= 4;
  });

  return (
    <section className="best-coworkings-section">
      <h2>Best coworkings</h2>

      <div className="coworkings-list best-coworkings-list">
        {bestCoworkings.map((coworking) => {
          return <Coworking coworking={coworking} />;
        })}
      </div>
    </section>
  );
};

export default BestCoworkings;
