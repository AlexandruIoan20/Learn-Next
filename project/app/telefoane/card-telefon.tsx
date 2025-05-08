import { Info } from "./informations";

interface CardTelefonInferface { 
    name: string, 
    marimeEcran?: number, 
}

export default function CardTelefon ({ name, marimeEcran }: CardTelefonInferface) { 
    let anFabricatie: number = 12; 
    return ( 
        <div>
            <p> { JSON.stringify(Info) } </p> 
            { name }
            <p> An fabricatie: { anFabricatie }</p>
            {
                marimeEcran &&
                ( 
                    <p>
                        Marime Ecran: { marimeEcran }
                    </p>
                )
            }
            <p> { Info[0].descriere }</p>
        </div>
    )
}