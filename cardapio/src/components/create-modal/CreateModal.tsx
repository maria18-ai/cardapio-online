// Importações de módulos e componentes React necessários.
import { useEffect, useState } from "react";
import { useFoodDataMutate } from "../../hooks/useFoodDataMutate";
import { FoodData } from "../../interface/FoodData";

import "./Modal.css"

// Interface para descrever as propriedades esperadas do componente Input.
interface InputProps {
    label: string,
    value: string | number,
    updateValue(value : any ) : void
}

// Interface para descrever as propriedades esperadas do modal.
interface ModalProps {
    closeModal() : void
}

// Componente Input, usado para renderizar um rótulo e um input.
const Input = ({label, value, updateValue} : InputProps) => {
    return (
        <>
            <label>{label}</label>
            <input value={value} 
            onChange={e => updateValue(e.target.value)}
            placeholder="Digite aqui"
            ></input>
        </>
    )
}

// Componente CreateModal, que representa o modal de criação de um novo item no cardápio.
export function CreateModal({ closeModal} : ModalProps){
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState("");

    // Utiliza o hook useFoodDataMutate para gerenciar as mutações dos dados.
    const { mutate, isSuccess } = useFoodDataMutate();

     // Função chamada ao submeter o formulário.
    const submit = () => {
        const foodData : FoodData = {
            title,
            price,
            image
        }
        mutate(foodData)
    }

    // Efeito colateral que fecha o modal quando a mutação é bem-sucedida.
    useEffect(() => {
        if(!isSuccess) return
        closeModal();
    }, [isSuccess]);

     // Renderização do modal.
    return (
        <div className="modal-overlay">
            <div className="modal-body">
                <h2>Cadastre um novo item no cardápio</h2>
                <form className="input_container">
                    <Input label="title" value={title} updateValue={setTitle}/> 
                    <Input label="price" value={price} updateValue={setPrice}/>
                    <Input label="image" value={image} updateValue={setImage}/>
                </form>
                <button onClick={submit}
                className="btn-secondary"
                >Postar</button>
            </div>
        </div>
    )
}