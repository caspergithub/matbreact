import React from 'react'
import Toggle from '../../ui/Toggle'
import '../Matbexamples.scss'
import Img18 from '../../../assets/images/img18.png'
import Img19 from '../../../assets/images/img19.png'
import Img20 from '../../../assets/images/img20.png'

function Theslopecoefficient() {
    return (
        <section className="width100">
            <h3>Hældningskoefficienten</h3>
            <Toggle>
                {({ on, toggle }) => (
                    <div className="refBtn">
                        <button onClick={toggle}>OPG3MAJ18</button>
                        {on && <div>
                            <h4>OPG3MAJ18</h4>
                            <div className="imgDiv">
                                <img src={Img18} alt="img18" className="exampleImg" />
                            </div>
                            <div className="imgDiv">
                                <img src={Img19} alt="img19" className="exampleImg" />
                            </div>
                        </div>}
                    </div>
                )}
            </Toggle>
            <Toggle>
                {({ on, toggle }) => (
                    <div className="refBtn">
                        <button onClick={toggle}>OPG1AUG15</button>
                        {on && <div>
                            <h4>OPG1AUG15</h4>
                            <div className="imgDiv">
                                <img src={Img20} alt="img20" className="exampleImg" />
                            </div>
                            <p>Dermed er hældningskoefficienten bestemt som 𝑎 = 3.</p>
                            <p>Det vil sige at 𝑦 stiger med 3, når 𝑥 stiger med 1, og omvendt falder 𝑦 med 3, når 𝑥 falder med 1. <br />
                            Når 𝑥 = 3 betyder 𝑦 = 10, må 𝑥 = 3 + 1 betyde 𝑦 = 10 + 3 (𝑥 = 4, 𝑦 = 13), <br />
                            og 𝑥 = 3 + 1 + 1 må betyde 10 + 3 + 3 (𝑥 = 5, 𝑦 = 16), <br />
                            og 𝑥 = 3 + 1 + 1 + 1 må betyde 𝑦 = 10 + 3 + 3 + 3 (𝑥 = 6, 𝑦 = 19) <br />
                            Dermed må den manglende x-værdi i tabellen være lig med 6.</p>
                        </div>}
                    </div>
                )}
            </Toggle>
        </section>
    )
}

export default Theslopecoefficient
