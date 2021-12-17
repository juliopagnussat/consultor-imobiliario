import Navegador from "../components/navegador"

export default function Home () {

    return (
            <div>
            <Navegador texto="Tour Imóveis" destino="/videos"/>
            <Navegador texto="Encontre seu imóvel" destino="/imoveis"/>
            <Navegador texto="Whatsapp - (49) 99115-2221" destino="http://bit.ly/whats_juliopagnussat"/>
            </div>
    )
}