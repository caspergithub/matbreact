import React from 'react'
import '../Matbexamples.scss'
import Img18 from '../../../assets/images/img18.png'
import Img19 from '../../../assets/images/img19.png'

function Theslopecoefficient() {
    return (
        <section>
            <h3>Hældningskoefficienten</h3>
            <h4>OPG3MAJ18</h4>
            <div className="imgDiv">
                <img src={Img18} alt="img18" className="exampleImg" />
            </div>
            <div className="imgDiv">
                <img src={Img19} alt="img19" className="exampleImg" />
            </div>
        </section>
    )
}

export default Theslopecoefficient
