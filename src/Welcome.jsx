import { useState } from "react";

const Welcome = () => {
  const [displayMessage, setDisplayMessage] = useState(true);

  const handleClick = () => {
    setDisplayMessage(false);
  };

  return (
    <>
      {displayMessage && (
        <div className="banner">
          <p>Bonjour la piscine</p>
          <p className="banner-close" onClick={handleClick}>
            x
          </p>
        </div>
      )}
    </>
  );
};

export default Welcome;
