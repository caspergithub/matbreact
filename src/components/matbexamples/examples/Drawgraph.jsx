import React from 'react'
import '../Matbexamples.scss'
import Img6 from '../../../assets/images/img6.png'
import Img7 from '../../../assets/images/img7.png'
import Img8 from '../../../assets/images/img8.png'
import Img9 from '../../../assets/images/img9.png'
import Img10 from '../../../assets/images/img10.png'
import Img11 from '../../../assets/images/img11.png'
import Img12 from '../../../assets/images/img12.png'
import Img13 from '../../../assets/images/img13.png'
import Img14 from '../../../assets/images/img14.png'
import Img15 from '../../../assets/images/img15.png'

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
            <hr />
            <h4>OPG5MAJ18</h4>
            <div className="imgDiv">
                <img src={Img8} alt="img8" className="exampleImg" />
            </div>
            <p>
                Grafen må kun tegnes for 𝑥 = −8 til 𝑥 = 6. <br />
            Grafen skal have et toppunkt i punktet 𝑃(2,5). <br />
            Grafen skal gå igennem to punkter 𝑃(𝑥, 0), hvor 𝑥 kan være tilfældige tal (inden for
            definitionsmængden). <br />
            Grafen kan skitseres som nedenstående diagram.
            </p>
            <div className="imgDiv">
                <img src={Img9} alt="img9" className="exampleImg" />
            </div>
            <p>Bemærk at der kan være mange forskellige skitseringer, der lever op til kravene.</p>
            <hr />
            <h4>OPG3JUN17</h4>
            <div className="imgDiv">
                <img src={Img10} alt="img10" className="exampleImg" />
            </div>
            <p>
                Grafen må kun tegnes for 𝑥 = −7 til 𝑥 = 7. <br />
            Grafen skal have to toppunkter i skitsen. <br />
            Grafen skal gå igennem punktet 𝑃(2,4) <br />
            Grafen skal gå igennem punktet 𝑃(−5,0) <br />
            Grafen kan skitseres som nedenstående diagram.
            </p>
            <div className="imgDiv">
                <img src={Img11} alt="img11" className="exampleImg" />
            </div>
            <p>Bemærk at der kan være mange forskellige skitseringer, der lever op til kravene.</p>
            <hr />
            <h4>OPG3MAJ16</h4>
            <div className="imgDiv">
                <img src={Img12} alt="img12" className="exampleImg" />
            </div>
            <p>
                Grafen må kun tegnes for 𝑥 = −6 til 𝑥 = 8. <br />
            Grafen har maksimum toppunkt i 𝑃(2,6) <br />
            Grafen skal gå igennem punktet 𝑃(−3,2). <br />
            Grafen skal minimum have tre forskelle punkter 𝑃(𝑥, 0), hvor x kan være tilfældige tal inden for
            definitionsmængden. <br />
            Grafen kan skitseres som nedenstående diagram.
            </p>
            <div className="imgDiv">
                <img src={Img13} alt="img13" className="exampleImg" />
            </div>
            <p>Bemærk at der kan være mange forskellige skitseringer, der lever op til kravene.</p>
            <hr />
            <h4>OPG4MAJ15</h4>
            <div className="imgDiv">
                <img src={Img14} alt="img14" className="exampleImg" />
            </div>
            <p>
                Grafen må kun tegnes fra 𝑥 = −9 til 𝑥 = 7. <br />
            Grafen skal gå igennem punktet 𝑃(3,0). <br />
            Funktionen er voksende i 𝑥 = −9 til 𝑥 = −1. <br />
            Funktionen er aftagende i 𝑥 = −1 til 𝑥 = 7. <br />
            Grafen kan skitseres som nedenstående diagram
            </p>
            <div className="imgDiv">
                <img src={Img15} alt="img15" className="exampleImg" />
            </div>
            <p>Bemærk at der kan være mange forskellige skitseringer, der lever op til kravene.</p>
        </section>
    )
}

export default Drawgraph
