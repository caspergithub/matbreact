import React from 'react'
import Trueorfalse from './examples/Trueorfalse'
import Drawgraph from './examples/Drawgraph'

function Matbexamples() {

    return (
        <section>
            <h2>MATB Exempler</h2>
            <p>Alle opgaver er hentet fra nedenstående link.</p>
            <a href="https://iserasuaat.gl/emner/gux/fag/matematik?sc_lang=da"
                target="_blank">https://iserasuaat.gl/emner/gux/fag/matematik?sc_lang=da.</a>
            <p>Hver opgave er tildelt en referencekode, der henviser til opgavenummer og dato for et tidligere
            stillet
                    eksamenssæt. For eksempel er den første referencekode <b>OPG2MAJ19</b>, hvilket betyder, at der er
                    tale om
                    opgave 2
                    i eksamenssættet fra maj 2019.</p>
            <div className="examplesGrid">
                <div className="examplesInnerGrid">
                    <button>Sand eller falsk løsning</button>
                    <button>Tegn gafen</button>
                    <button>Identificer graf eller funktion</button>
                    <button>Hældningskoefficienten</button>
                    <button>Parabler</button>
                    <button>Halveringskonstanten</button>
                    <button>Modeller</button>
                    <button>Afledede funktioner</button>
                    <button>Stamfunktioner</button>
                    <button>Deskriptiv statistisk</button>
                    <button>Geometri</button>
                    <button>En atypisk opgave</button>
                </div>
                <div className="exampleDiv">
                    <Trueorfalse />
                    <Drawgraph />
                </div>
            </div>
        </section>
    )
}

export default Matbexamples
