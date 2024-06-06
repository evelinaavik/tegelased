import React, { useState } from "react";


function Avaleht () {
  // const tegelased = [
  //   {eesnimi: "Mickey", perekonnanimi:"Mouse", aadress:"Disnyland", vanus: "17"},
  //   {eesnimi: "Minny", perekonnanimi:"Mouse", aadress:"Disnyland", vanus: "33"},
  //   {eesnimi: "Roo", perekonnanimi:"Kangaoo", aadress: "Hundred Acre Wood", vanus: "12" },
  //   {eesnimi: "Scooby", perekonnanimi:"Doo", aadress:"Crystal Cove", vanus: "40"},
  // ];    

const tegelased = JSON.parse(localStorage.getItem("tegelased")) || [];
const [klikitudNimi, setKlikitudNimi] = useState("");

  const kuvaNimi = (tegelane) => {
    // console.log(tegelane.VÕTI);
    setKlikitudNimi(tegelane.eesnimi);
  }

  const valiTegelane = (klikitudTegelane) => {
    let valitudLS = localStorage.getItem("valitudTegelased");
    valitudLS = JSON.parse(valitudLS) || [];
    valitudLS.push(klikitudTegelane);
    valitudLS = JSON.stringify(valitudLS);
    localStorage.setItem("valitudTegelased", valitudLS);
  }
    return ( 
      <div>
          <div><br /><br />
          {klikitudNimi !== "" && <div>Klikkisid tegelase {klikitudNimi} peal</div>}
            {tegelased.map (tegelane =>
              <div>
                <div>{tegelane.eesnimi}</div>
                <div>{tegelane.perekonnanimi}</div>
                <div>{tegelane.aadress}</div>
                <div>{tegelane.vanus}</div>
                <button onClick={() => valiTegelane(tegelane)}>Vali</button><br /><br />
                <button onClick={() => kuvaNimi(tegelane)}>Kuva nimi</button>
              </div>
            )}
          </div>
        <br /><br />
          <div>
            <div>Mickey</div>
            <div>Mouse</div>
            <div>Disneyland</div>
          </div>
          <div>
            <div>Minnie</div>
            <div>Mouse</div>
            <div>Disneyland</div>
          </div>
          <div>
            <div>Winnie</div>
            <div>Pooh</div>
            <div>Hundred Acre Wood</div>
            </div>
          <div>
            <div>Roo</div>
            <div>Kangaroo</div>
            <div>Hundred Acre Wood</div>
          </div>
          <div>
            <div>Scooby</div>
            <div>Doo</div>
            <div>Crystal Cove</div>
          </div>
          <br />
      </div>
  )
}

export default Avaleht;
