import React from 'react'
import '../Matbexamples.scss'
import Img26 from '../../../assets/images/img26.png'
import Img27 from '../../../assets/images/img27.png'
import Img28 from '../../../assets/images/img28.png'

function Thehalvingconstant() {
    return (
        <section className="width100">
            <h3>Halveringskonstanten</h3>
            <div className="imgDiv">
                <img src={Img26} alt="img26" className="exampleImg" />
            </div>
            <p>Halveringskonstanten kan illustreret som følgende.</p>
            <div className="imgDiv">
                <img src={Img27} alt="img27" className="exampleImg" />
            </div>
            <div className="imgDiv">
                <img src={Img28} alt="img28" className="exampleImg" />
            </div>
        </section>
    )
}

export default Thehalvingconstant
