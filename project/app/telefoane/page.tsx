import CardTelefon from "./card-telefon"
import MyButton from "./my-button"
import { Info } from "./informations"

export default function PaginaTelefoane () {
    return (
        <div className="bg-green-500 text-amber-300"> 
            <ul>
                <p className = "text-black p-4 m-8 bg-amber-600"> Test </p>
                <CardTelefon name = "Telefoawdadwwd1" marimeEcran = { 40 }/>
                <CardTelefon name = "Telefon2" marimeEcran = { 40 }/>
                <CardTelefon name = "Telefon3" />

                <MyButton /> 
            </ul>
        </div>
    )
}