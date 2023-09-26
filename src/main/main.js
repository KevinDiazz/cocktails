import "./styleMain.css";
import { cocteles } from "../variables/variables";
import { useEffect, useState } from "react";
import { encourage,encourage2,discourage,discourage2 } from "../functionsStyles/stylesGspa";
function Main() {
  //manejo de estado, infoCoctails se actualiza con la informacion del coctel clickado, se usa hasBeenClicked para cargar el DOM segun preferencia
  let [hasBeenClicked, setHasBeenClicked] = useState(false);
  let [infoCoctails, setInfoCoctails] = useState({});

  useEffect(() => {}, [infoCoctails, hasBeenClicked]);

  function updateCocktailInfo(coctelName) {
    setInfoCoctails(coctelName);
  }

  return (
    <>
      <header>
        <div className="title">
          <p>
            {" "}
            <span style={{ color: "red" }}>C</span>ocktails
          </p>
        </div>
      </header>
      <div className="info">
        <div className="section1">
          {hasBeenClicked ? (
            <div className="infoCoctails">
              <div className="nameCoctail">{infoCoctails.nombre}</div>
              <div className="ingredient">
                <h4>Ingredientes:</h4>
                {infoCoctails.ingredientes}
              </div>
              <h4>Origen e Historia:</h4>
              <div className="origen">
                {infoCoctails.origen}
                {infoCoctails.info}
              </div>
            </div>
          ) : (
            <p>
              Los cócteles son una expresión artística y creativa en el mundo de
              la mixología, una disciplina que combina ingredientes de todo tipo
              para crear bebidas excepcionales y deliciosas. Estas mezclas
              ingeniosas de licores, jugos, jarabes y adornos no solo estimulan
              nuestros sentidos, sino que también nos transportan a diferentes
              lugares y épocas. Cada uno tiene su propia historia y
              personalidad, y algunos se han convertido en símbolos icónicos de
              la cultura y la moda.<br></br>
              <br></br>
              Descubre la historia e ingredientes de estos maravillosos
              Cocteles, haciendo <span className="italic">click </span> en
              ellos.
            </p>
          )}
        </div>
        <div className="gridSection2">
          <div
            className="coctel"
            onMouseOver={() => {
              encourage(".coctelName1"); //Aplicacion de animaciones a traves de libreria greensock
              encourage2(".imgCoctel1");  //Aplicacion de animaciones a traves de libreria greensock
            }}
            onMouseOut={() => {
              discourage(".coctelName1"); //Aplicacion de animaciones a traves de libreria greensock
              discourage2(".imgCoctel1");  //Aplicacion de animaciones a traves de libreria greensock
            }}
            onClick={() => {
              updateCocktailInfo(cocteles[1]); //actualizacion de estado
              setHasBeenClicked(true);   //actualizacion de estado
            }}
          >
            <p className="coctelName1">Mojito</p>
            <img alt="img"
              className="imgCoctel1"
              src={require("../imagenes/mojito-cocktail-watercolor-clipart-ai-generated-free-png.webp")}
            />
          </div>
          <div
            className="coctel"
            onMouseOver={() => {
              encourage(".coctelName2");
              encourage2(".imgCoctel2");
            }}
            onMouseOut={() => {
              discourage(".coctelName2");
              discourage2(".imgCoctel2");
            }}
            onClick={() => {
              updateCocktailInfo(cocteles[0]);
              setHasBeenClicked(true);
            }}
          >
            <p className="coctelName2">Margarita</p>
            <img alt="img"
              className="imgCoctel2"
              src={require("../imagenes/imgbin_margarita-cocktail-drink-mixer-daiquiri-png.png")}
            />
          </div>
          <div
            className="coctel"
            onMouseOver={() => {
              encourage(".coctelName3");
              encourage2(".imgCoctel3");
            }}
            onMouseOut={() => {
              discourage(".coctelName3");
              discourage2(".imgCoctel3");
            }}
            onClick={() => {
              updateCocktailInfo(cocteles[7]);
              setHasBeenClicked(true);
            }}
          >
            <p className="coctelName3">Tom Collins</p>
            <img alt="img"
              className="imgCoctel3"
              src={require("../imagenes/imgbin_tom-collins-lemon-juice-sea-breeze-lemonade-lemon-lime-drink-png.png")}
            />
          </div>
          <div
            className="coctel"
            onMouseOver={() => {
              encourage(".coctelName4");
              encourage2(".imgCoctel4");
            }}
            onMouseOut={() => {
              discourage(".coctelName4");
              discourage2(".imgCoctel4");
            }}
            onClick={() => {
              updateCocktailInfo(cocteles[6]);
              setHasBeenClicked(true);
            }}
          >
            <p className="coctelName4">Daiquiri</p>
            <img alt="img"
              className="imgCoctel4"
              src={require("../imagenes/pngegg (2).png")}
            />
          </div>
          <div
            className="coctel"
            onMouseOver={() => {
              encourage(".coctelName5");
              encourage2(".imgCoctel5");
            }}
            onMouseOut={() => {
              discourage(".coctelName5");
              discourage2(".imgCoctel5");
            }}
            onClick={() => {
              updateCocktailInfo(cocteles[2]);
              setHasBeenClicked(true);
            }}
          >
            <p className="coctelName5">Gintonic</p>
            <img alt="img"
              className="imgCoctel5"
              src={require("../imagenes/istockphoto-178717268-612x612.jpg")}
            />
          </div>
          <div
            className="coctel"
            onMouseOver={() => {
              encourage(".coctelName6");
              encourage2(".imgCoctel6");
            }}
            onMouseOut={() => {
              discourage(".coctelName6");
              discourage2(".imgCoctel6");
            }}
            onClick={() => {
              updateCocktailInfo(cocteles[3]);
              setHasBeenClicked(true);
            }}
          >
            <p className="coctelName6">Caipirinha</p>
            <img alt="img"
              className="imgCoctel6"
              src={require("../imagenes/pngegg.png")}
            />
          </div>
          <div
            className="coctel"
            onMouseOver={() => {
              encourage(".coctelName7");
              encourage2(".imgCoctel7");
            }}
            onMouseOut={() => {
              discourage(".coctelName7");
              discourage2(".imgCoctel7");
            }}
            onClick={() => {
              updateCocktailInfo(cocteles[4]);
              setHasBeenClicked(true);
            }}
          >
            <p className="coctelName7">Manhattan</p>
            <img alt="img"
              className="imgCoctel7"
              src={require("../imagenes/1629728494-Манхэттен.jpg")}
            />
          </div>
          <div
            className="coctel"
            onMouseOver={() => {
              encourage(".coctelName8");
              encourage2(".imgCoctel8");
            }}
            onMouseOut={() => {
              discourage(".coctelName8");
              discourage2(".imgCoctel8");
            }}
            onClick={() => {
              updateCocktailInfo(cocteles[5]);
              setHasBeenClicked(true);
            }}
          >
            <p className="coctelName8">Piña Colada</p>
            <img alt="img"
              className="imgCoctel8"
              src={require("../imagenes/04_HC3_PINACOLADA_0275_BASE.png")}
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default Main;
