import React from 'react'
import Toggle from '../../ui/Toggle'
import '../Matbexamples.scss'
import Img16 from '../../../assets/images/img16.png'
import Img17 from '../../../assets/images/img17.png'

function Identifygraphorfunction() {
    return (
        <section className="width100">
            <h3>Identificer graf eller funktion</h3>
            <Toggle>
                {({ on, toggle }) => (
                    <div className="refBtn">
                        <button onClick={toggle}>OPG5AUG15</button>
                        {on && <div>
                            <h4>OPG5AUG15</h4>
                            <div className="imgDiv">
                                <img src={Img16} alt="img16" className="exampleImg" />
                            </div>
                            <p>Den lineære funktion 𝑓 med den grønne graf 𝐵, idet funktionen afbilleder en ret linje. <br />
                                Andengradspolynomiet 𝑔 med den røde graf 𝐴, fordi funktionen afbilleder en parabel. <br />
                                Potensfunktionen h med den blå graf 𝐶, grundet udelukkelsesmetoden.</p>
                        </div>}
                    </div>
                )}
            </Toggle>
            <Toggle>
                {({ on, toggle }) => (
                    <div className="refBtn">
                        <button onClick={toggle}>OPG4MAJ14</button>
                        {on && <div>
                            <h4>OPG4MAJ14</h4>
                            <div className="imgDiv">
                                <img src={Img17} alt="img17" className="exampleImg" />
                            </div>
                            <p>Det ses at funktionen 𝑓(𝑥) beskriver en eksponentiel udvikling. <br />
                            Den grønne graf 𝐴 må afbillede en lineær funktion, grundet den rette linje, hvorfor funktionen ikke
                            passer med grafen 𝐴. <br />
                            Den blå graf 𝐵 må afbillede et andengradspolynomium på grund af parabel-formlen, hvorfor funktio-
                            nen heller ikke passer med grafen 𝐵. <br />
                            Dermed må funktionen 𝑓(𝑥) passe med den røde graf 𝐶.</p>
                        </div>}
                    </div>
                )}
            </Toggle>
        </section>
    )
}

export default Identifygraphorfunction
