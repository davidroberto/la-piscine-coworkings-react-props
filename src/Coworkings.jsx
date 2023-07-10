import Coworking from "./Coworking";

const Coworkings = ({ coworkings }) => {
  return (
    <section>
      <h2>Our coworkings</h2>
      <div>
        {coworkings.map((coworking) => {
          return <Coworking coworking={coworking} />;
        })}
      </div>
    </section>
  );
};

export default Coworkings;
