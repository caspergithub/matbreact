import React from 'react'
import Toggle from '../../ui/Toggle'
import '../Matbexamples.scss'
import Img21 from '../../../assets/images/img21.png'
import Img22 from '../../../assets/images/img22.png'
import Img23 from '../../../assets/images/img23.png'
import Img24 from '../../../assets/images/img24.png'
import Img25 from '../../../assets/images/img25.png'

function Parables() {
    return (
        <section className="width100">
            <h3>Parabler</h3>
            <Toggle>
                {({ on, toggle }) => (
                    <div className="refBtn">
                        <button onClick={toggle}>OPG4JUN17</button>
                        {on && <div>
                            <h4>OPG4JUN17</h4>
                            <div className="imgDiv">
                                <img src={Img21} alt="img21" className="exampleImg" />
                            </div>
                            <p>Svarene kan illustreres som følgende.</p>
                            <div className="imgDiv">
                                <img src={Img22} alt="img22" className="exampleImg" />
                            </div>
                            <p>Toppunktet kan aflæses som 𝑃(3,2). Jævnfør panel A. <br />
                            Løsningerne til 𝑝(𝑥) = 6 kan afløses til at være 𝑥 = 1 ∨ 𝑥 = 5. Jævnfør panel B.</p>
                        </div>}
                    </div>
                )}
            </Toggle>
            <Toggle>
                {({ on, toggle }) => (
                    <div className="refBtn">
                        <button onClick={toggle}>OPG3AUG15</button>
                        {on && <div>
                            <h4>OPG3AUG15</h4>
                            <div className="imgDiv">
                                <img src={Img23} alt="img23" className="exampleImg" />
                            </div>
                            <div className="imgDiv">
                                <img src={Img24} alt="img24" className="exampleImg" />
                            </div>
                            <div className="imgDiv">
                                <img src={Img25} alt="img25" className="exampleImg" />
                            </div>
                            <p>Dermed er x-værdierne til punkterne 𝐴 og 𝐵 (nulpunkterne) bestemt som 𝑥 = 5 ∨ 𝑥 = 2.</p>
                        </div>}
                    </div>
                )}
            </Toggle>
        </section>
    )
}

export default Parables
