// Importa o arquivo de estilo CSS para este componente.
import "./Card.css"

// Define uma interface que descreve as propriedades que este componente espera receber.
interface CardProps {
    price: number,
    title: string,
    image: string
}

// Define o componente Card, que recebe propriedades conforme definido pela interface CardProps.
export function Card({price, title, image} : CardProps){
    return (
        <div className="card">
            <img src={image} alt="">
            </img>
            <h2>{title}</h2>
            <p><b>Valor:</b>{price}</p>
        </div>
    )
}