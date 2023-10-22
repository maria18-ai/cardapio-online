import axios , { AxiosPromise} from "axios";
import { FoodData } from "../interface/FoodData";
import { useMutation, useQueryClient } from "@tanstack/react-query"

// Define a URL da API que será usada para enviar dados.
const API_URL = 'https://menu-restaurant-ymn7.onrender.com'

// Função postData é uma função assíncrona que envia dados para a API
const postData = async(data : FoodData) : AxiosPromise<any> => {
    const response = axios.post(API_URL + '/food', data);
    return response;
}

// Função useFoodDataMutate é um hook personalizado que executa uma mutação.
export function useFoodDataMutate() {
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: postData,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries(['food-data']);
        }
    })

    // Retorna a função de mutação que pode ser usada para enviar dados à API.
    return mutate;
    return mutate;

}