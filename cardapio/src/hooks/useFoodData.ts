import axios , { AxiosPromise} from "axios";
import { FoodData } from "../interface/FoodData";
import { useQuery } from "@tanstack/react-query"

// Define a URL da API que será usada para buscar dados.
const API_URL = 'https://menu-restaurant-ymn7.onrender.com'

// Função fetchData é uma função assíncrona que busca os dados da API.
const fetchData = async() : AxiosPromise<FoodData[]> => {
    const response = axios.get(API_URL + '/food');
    return response;
}

// Função useFoodData é um hook personalizado que utiliza o hook useQuery.
export function useFoodData() {
    const query = useQuery({
        queryFn: fetchData,
        queryKey: ['food-data'],
        retry: 2
    })

     // Retorna um objeto que inclui as informações da consulta e os dados se disponíveis.
    return {
        ...query,
        data: query.data?.data
    }
}