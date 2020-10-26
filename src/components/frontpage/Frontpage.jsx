import React from 'react'
import './Frontpage.scss'
import { FaRegSmile } from 'react-icons/fa'

function Frontpage() {
    return (
        <section>
            <h2>MATB Kogebog</h2>
            <div className="datediv">
                <span className="date">Januar 2020</span>
            </div>
            <p>Nærværende ”kogebog” omfatter hjælp til alle gamle skriftlige eksamensopgaver uden hjælpemidler i matematik B (prøve b) fra maj 2014 til maj 2019. Opgaverne er inddelt i 12 kategorier, som er beskrivende for de typer af opgaver, der tidligere er blevet stillet til den skriftlige eksamen. Dermed må det understreges at kogebogen er bagudskuende, hvorfor den ikke er velegnet til at forudse fremtidige opgaver. Det er derfor vigtigt at kogebogen anvendes som et supplement til eksamensforberedelse og ikke eksamensoplæsning i sig selv. Kogebogen dækker formegentlig ikke hele pensum, men giver et indblik i en eksamenssituation, hvilket er et godt kendskab inden eksamen. Formålet med kogebogen er dog ikke en succesfuld eksamen som sådan. Derimod er hensigten at motivere den studerende til at arbejde målrettet med matematikken. Det anbefales den studerende at bruge kogebogen som et værktøj til at opdage huller i problemløsningen. Hvis begreber som eksempelvis definitionsmængde og nulpunkter er fremmedord for den studerende, vil vedkommende ikke nå ret langt i opgaverne i afsnit to. I den anledning fremgår et register over de fleste nøglebegreber fra eksamenssættene med links til webmatematik.dk (jævnfør nedenstående tabel). Registeret kan bruges til at få genopfrisket de væsentligste pointer, der er relevant for opgaveløsningen, på en overskuelig måde.</p>
            <p>Afslutningsvis må det bemærkes at der ikke er nogen garanti for at mine løsninger er fejlfrie. Jeg er blot en privatperson, en økonomistuderende i Danmark, der godt kan lide matematik. Kogebogen er skrevet som et hyggeprojekt, der forhåbentlig sikrer en mere lige adgang til hjælp og støtte med skolen. Nogen
            får hjælp fra forældre, eller en betalt mentor; og nu kan nogen få hjælp af en kogebog <FaRegSmile className="smiley" /></p>
            <p>Skriv gerne til <a href="mailto:matbkogebog@gmail.com">matbkogebog@gmail.com</a> vedrørende spørgsmål og hjælp samt feedback på kogebogen.</p>
        </section>
    )
}

export default Frontpage
