import React from 'react'
import Toggle from '../ui/Toggle'
import Trueorfalse from './examples/Trueorfalse'
import Drawgraph from './examples/Drawgraph'
import Identifygraphorfunction from './examples/Identifygraphorfunction'
import Theslopecoefficient from './examples/Theslopecoefficient'
import Parables from './examples/Parables'
import Thehalvingconstant from './examples/Thehalvingconstant'
import Models from './examples/Models'
import Derivedfunctions from './examples/Derivedfunctions'

function Matbexamples() {

    return (
        <section>
            <h2>MATB Exempler</h2>
            <p>Alle opgaver er hentet fra nedenstående link.</p>
            <a href="https://iserasuaat.gl/emner/gux/fag/matematik?sc_lang=da"
                target="_blank" rel="noopener noreferrer">https://iserasuaat.gl/emner/gux/fag/matematik?sc_lang=da.</a>
            <p>Hver opgave er tildelt en referencekode, der henviser til opgavenummer og dato for et tidligere
            stillet
                    eksamenssæt. For eksempel er den første referencekode <b>OPG2MAJ19</b>, hvilket betyder, at der er
                    tale om
                    opgave 2
                    i eksamenssættet fra maj 2019.</p>
            <div className="exampleBtns">
                <Toggle>
                    {({ on, toggle }) => (
                        <div className="exampleBtn">
                            <button onClick={toggle}>Sand eller falsk løsning</button>
                            {on && <Trueorfalse />}
                        </div>
                    )}
                </Toggle>
                <Toggle>
                    {({ on, toggle }) => (
                        <div className="exampleBtn">
                            <button onClick={toggle}>Tegn grafen</button>
                            {on && <Drawgraph />}
                        </div>
                    )}
                </Toggle>
                <Toggle>
                    {({ on, toggle }) => (
                        <div className="exampleBtn">
                            <button onClick={toggle}>Identificer graf eller funktion</button>
                            {on && <Identifygraphorfunction />}
                        </div>
                    )}
                </Toggle>
                <Toggle>
                    {({ on, toggle }) => (
                        <div className="exampleBtn">
                            <button onClick={toggle}>Hældningskoefficienten</button>
                            {on && <Theslopecoefficient />}
                        </div>
                    )}
                </Toggle>
                <Toggle>
                    {({ on, toggle }) => (
                        <div className="exampleBtn">
                            <button onClick={toggle}>Parabler</button>
                            {on && <Parables />}
                        </div>
                    )}
                </Toggle>
                <Toggle>
                    {({ on, toggle }) => (
                        <div className="exampleBtn">
                            <button onClick={toggle}>Halveringskonstanten</button>
                            {on && <Thehalvingconstant />}
                        </div>
                    )}
                </Toggle>
                <Toggle>
                    {({ on, toggle }) => (
                        <div className="exampleBtn">
                            <button onClick={toggle}>Modeller</button>
                            {on && <Models />}
                        </div>
                    )}
                </Toggle>
                <Toggle>
                    {({ on, toggle }) => (
                        <div className="exampleBtn">
                            <button onClick={toggle}>Afledede funktioner</button>
                            {on && <Derivedfunctions />}
                        </div>
                    )}
                </Toggle>
            </div>
        </section>
    )
}

export default Matbexamples
