import React from "react";
import { useState, useRef } from "react";


function LisaTegelane () {
    const [sonum, uuendaSonum] = useState("");
    const eesnimiRef = useRef();
    const perekonnanimiRef = useRef();
    const aadressRef = useRef();
    const vanusRef = useRef();

    const tegelane = useRef();

        function LisaUusTegelane () {
        if (eesnimiRef.current.value === "") {
            uuendaSonum("Tühja nimega ei saa sisestada! ") 
        }  else {
            uuendaSonum ("Tegelane lisatud!" );}
            const tegelased = JSON.parse(localStorage.getItem("tegelased")) || [];
            tegelased.push({
                "eesnimi": eesnimiRef.current.value,
                "perekonnanimi": perekonnanimiRef.current.value,
                "aadress": aadressRef.current.value,
                "vanus": Number(vanusRef.current.value)
            })
            localStorage.setItem("tegelased", JSON.stringify(tegelased));
}
    return ( 
    <div>
        <br />
        <div>{sonum}</div>
        <label>Tegelase eesnimi</label><br />
        <input type="text" ref={eesnimiRef}/><br />
        <label>Tegelase perekonnanimi</label><br />
        <input type="text" ref={perekonnanimiRef}/><br />
        <label>Tegelase aadress</label><br />
        <input type="text" ref={aadressRef}/><br />
        <label>Tegelase vanus</label><br />
        <input type="text" ref={vanusRef}/><br />
        {/* <label><i>Kirjuta tegelase nimi siia </i></label> <br />
        <input ref={tegelane} type="text" placeholder="nt Miki"/> <br />
         <br /> */}
        <button onClick={LisaUusTegelane}>Lisa tegelane</button> <br />
    </div>
    );
}


export default LisaTegelane;


