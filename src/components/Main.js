import React from "react";
import Image from "mui-image";
import "./Main.css";

const Main = () => {
  const handleClick = () => {
    console.log("Click!!!");
  };
  return (
    <>
      <main className="main">
        <div className="container">
          <div className="riquadro" id="impr--pre" onClick={handleClick}>
            <Image
              src="https://picsum.photos/id/696/2000"
              height="100%"
              width="100%"
              fit="cover"
              duration={1000}
              easing=""
              bgColor="teal"
            />
            <div className="overlay">
              <h1>
                Imprevisti
                <br />
                Prepartita
              </h1>
            </div>
          </div>
          <div className="riquadro" id="impr--sett" onClick={handleClick}>
            <Image
              src="https://picsum.photos/id/547/2000"
              height="100%"
              width="100%"
              fit="cover"
              duration={1000}
              easing=""
              bgColor="teal"
            />
            <div className="overlay">
              <h1>
                Imprevisti
                <br />
                Settimanali
              </h1>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Main;
