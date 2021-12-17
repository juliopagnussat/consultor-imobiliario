import Link from 'next/link'

export default function Navegador (props) {
    return (
        <Link href={props.destino}>
            <div className="itens-nav">
            {props.texto}
            </div>
        </Link>
    )
}