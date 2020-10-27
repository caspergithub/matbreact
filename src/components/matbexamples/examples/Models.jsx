import React from 'react'
import Toggle from '../../ui/Toggle'
import '../Matbexamples.scss'
import Img29 from '../../../assets/images/img29.png'
import Img30 from '../../../assets/images/img30.png'
import Img31 from '../../../assets/images/img31.png'
import Img32 from '../../../assets/images/img32.png'
import Img33 from '../../../assets/images/img33.png'
import Img34 from '../../../assets/images/img34.png'

function Models() {
    return (
        <section className="width100">
            <h3>Modeller</h3>
            <Toggle>
                {({ on, toggle }) => (
                    <div className="refBtn">
                        <button onClick={toggle}>OPG2JUN17</button>
                        {on && <div>
                            <h4>OPG2JUN17</h4>
                            <div className="imgDiv">
                                <img src={Img29} alt="img29" className="exampleImg" />
                            </div>
                            <p>Der er tale om en lineær model, hvor tallene 8 og 618 angiver henholdsvis hældningskoefficienten og begyndelsesværdien. <br />
                            Det vil sige at antallet af enfamiliehuse stiger med 8 huse hvert år efter 2005 samt at der var 618 huse til at begynde med i 2005.</p>
                        </div>}
                    </div>
                )}
            </Toggle>
            <Toggle>
                {({ on, toggle }) => (
                    <div className="refBtn">
                        <button onClick={toggle}>OPG1MAJ15</button>
                        {on && <div>
                            <h4>OPG1MAJ15</h4>
                            <div className="imgDiv">
                                <img src={Img30} alt="img30" className="exampleImg" />
                            </div>
                            <p>Der er tale om en lineær model, hvor tallene -130 og 18730 angiver henholdsvis hældningskoefficienten og begyndelsesværdien. <br />
                            Det vil sige at befolkningstallet falder med 130 personer hvert år efter 2003 samt at der var 18730 personer til at begynde med i 2003.</p>
                        </div>}
                    </div>
                )}
            </Toggle>
            <Toggle>
                {({ on, toggle }) => (
                    <div className="refBtn">
                        <button onClick={toggle}>OPG2MAJ14</button>
                        {on && <div>
                            <h4>OPG2MAJ14</h4>
                            <div className="imgDiv">
                                <img src={Img31} alt="img31" className="exampleImg" />
                            </div>
                            <p>Der er tale om en lineær model på formen 𝑦 = 𝑎𝑥 + 𝑏, idet absolut ændring (ændring i niveau) i en variabel medfører en absolut ændring i en anden variabel. <br />
                            Modellen kan opstilles som 𝑦 = 0,42𝑥 + 75.</p>
                        </div>}
                    </div>
                )}
            </Toggle>
            <Toggle>
                {({ on, toggle }) => (
                    <div className="refBtn">
                        <button onClick={toggle}>OPG2AUG15</button>
                        {on && <div>
                            <h4>OPG2AUG15</h4>
                            <div className="imgDiv">
                                <img src={Img32} alt="img32" className="exampleImg" />
                            </div>

                            <div className="imgDiv">
                                <img src={Img33} alt="img33" className="exampleImg" />
                            </div>

                        </div>}
                    </div>
                )}
            </Toggle>
            <Toggle>
                {({ on, toggle }) => (
                    <div className="refBtn">
                        <button onClick={toggle}>OPG1MAJ16</button>
                        {on && <div>
                            <h4>OPG1MAJ16</h4>
                            <div className="imgDiv">
                                <img src={Img34} alt="img34" className="exampleImg" />
                            </div>
                            <p>Der er tale om en lineær model. Prøv selv.</p>
                        </div>}
                    </div>
                )}
            </Toggle>
        </section>
    )
}

export default Models
