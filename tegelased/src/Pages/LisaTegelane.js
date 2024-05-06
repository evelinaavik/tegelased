import React from "react";
import { useState, useRef } from "react";


function LisaTegelane () {
    const [sonum, uuendaSonum] = useState("");
    const tegelane = useRef();

        function LisaUusTegelane () {
        if (tegelane.current.value === "") {
            uuendaSonum("Tühja nimega ei saa sisestada! ") 
        }  else {
            uuendaSonum ("Tegelane " + tegelane.current.value + " lisatud!" );}
}
    return ( 
    <div>
        <br />
        <div>{sonum}</div>
    <br />
        <label><i>Kirjuta tegelase nimi siia </i></label> <br />
        <input ref={tegelane} type="text" placeholder="nt Miki"/> <br />
         <br />
        <button onClick={LisaUusTegelane}>Lisa tegelane</button> <br />
    </div>
    );
}


export default LisaTegelane;


// Loo uus funktsioon nimetusega “lisaUusTegelane”.
// Seo nupp selle funktsiooniga onClick abil.
// Tee uus ref: nimiRef = useRef() ning seo see ref input väljaga HTMLs.
// Kui klikitakse nupul, siis tehakse kontroll, kas nimiRef.current.value on tühjad jutumärgid 
// või mitte if () {} else {} abiga.
// Kui on tühjad jutumärgid, kuva sõnum “Tühja nimega ei saa sisestada”, kui ei ole tühi, kirjuta 
// sõnum “Tegelane lisatud”.
