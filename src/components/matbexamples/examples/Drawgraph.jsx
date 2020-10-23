import React from 'react'
import '../Matbexamples.scss'
import Img6 from '../../../assets/images/img6.png'
import Img7 from '../../../assets/images/img7.png'

function Drawgraph() {
    return (
        <section>
            <h2>Tegn grafen</h2>
            <h4>OPG4MAJ19</h4>
            <div className="imgDiv">
                <img src={Img6} alt="img6" className="exampleImg" />
            </div>
            <p>
                Formen på 𝑓(𝑥) fortæller at grafen skal skitseres som en parabel. <br />
                Den negative koefficient fortæller at parablens grene skal vende nedad. <br />
                Den negative diskriminant fortæller at der ikke eksisterer nogle nulpunkter. <br />
                Grafen kan skitseres som nedenstående diagram.
            </p>
            <div className="imgDiv">
                <img src={Img7} alt="img7" className="exampleImg" />
            </div>
            <p>Bemærk at der kan være mange forskellige skitseringer, der lever op til kravene.</p>
        </section>
    )
}

export default Drawgraph
