import React from 'react'
import '../Matbexamples.scss'
import Img1 from '../../../assets/images/img1.png'
import Img2 from '../../../assets/images/img2.png'
import Img3 from '../../../assets/images/img3.png'
import Img4 from '../../../assets/images/img4.png'
import Img5 from '../../../assets/images/img5.png'

function Trueorfalse() {
    return (
        <section>
            <h2>Sand eller falsk løsning</h2>
            <h4>OPG2MAJ19</h4>
            <div className="imgDiv">
                <img src={Img1} alt="img1" className="exampleImg" />
            </div>
            <p>Løsningen 𝑥 = 8 indsættes i ligningen, hvorefter det tjekkes om venstresiden er lig med højresiden.
            Hvis
            venstresiden er lig med højresiden, er ligningen sand, og 𝑥 = 8 er løsning til ligningen. Hvis
            venstresiden
            ikke er lig med højresiden, er ligningen falsk, og 𝑥 = 8 vil ikke være løsning til ligningen.</p>
            <div className="imgDiv">
                <img src={Img2} alt="img2" className="exampleImg" />
            </div>
            <p>Udtrykket er sandt, idet venstresiden er lig med højresiden, hvorfor 𝑥 = 8 er løsning til ligningen.</p>
            <hr />
            <h4>OPG2MAJ18</h4>
            <div className="imgDiv">
                <img src={Img3} alt="img3" className="exampleImg" />
            </div>
            <p>Prøv selv. Løsningen er sand, hvorfor 𝑥 = 0 er løsning til ligningen. Bemærk at alt opløftet i nul
            er lig
                    med én.</p>
            <hr />
            <h4>OPG2MAJ15</h4>
            <div className="imgDiv">
                <img src={Img4} alt="img4" className="exampleImg" />
            </div>
            <p>Prøv selv. Løsningen er sand, hvorfor 𝑥 = 4 er løsning til ligningen.</p>
            <hr />
            <h4>OPG1MAJ14</h4>
            <div className="imgDiv">
                <img src={Img5} alt="img5" className="exampleImg" />
            </div>
            <p>Prøv selv. Løsningen er falsk, hvorfor 𝑥 = 4 ikke er løsning til ligningen.</p>
        </section>
    )
}

export default Trueorfalse
