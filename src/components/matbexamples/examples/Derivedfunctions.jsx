import React from 'react'
import Toggle from '../../ui/Toggle'
import '../Matbexamples.scss'
import Img35 from '../../../assets/images/img35.png'
import Img36 from '../../../assets/images/img36.png'

function Derivedfunctions() {
    return (
        <section className="width100">
            <h3>Afledede funktioner</h3>
            <Toggle>
                {({ on, toggle }) => (
                    <div className="refBtn">
                        <button onClick={toggle}>OPG5MAJ16</button>
                        {on && <div>
                            <h4>OPG5MAJ16</h4>
                            <div className="imgDiv">
                                <img src={Img35} alt="img35" className="exampleImg" />
                            </div>
                            <p>For at bestemme den afledede funktion 𝑓′(𝑥), anvendes sum- og konstantreglen (regneregler for differentialkvotienter).</p>
                            <div className="imgDiv">
                                <img src={Img36} alt="img36" className="exampleImg" />
                            </div>
                            <p>Dermed er den afledede funktion bestemt som 𝑓′(𝑥) = 12𝑥2 + 6𝑥 − 5.</p>
                        </div>}
                    </div>
                )}
            </Toggle>
        </section>
    )
}

export default Derivedfunctions
