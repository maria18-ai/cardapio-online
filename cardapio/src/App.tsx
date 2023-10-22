import { FoodData } from './interface/FoodData';
import './App.css'
import { Card } from './components/card/Card'
import { useFoodData } from './hooks/useFoodData'
import { useState } from 'react';
import { CreateModal } from './components/create-modal/CreateModal';


function App() {
   // Utiliza o hook useFoodData para obter os dados dos alimentos.
  const { data } = useFoodData();
  const [isModalOpens, setIsModalOpen] = useState(false);

   // Função para alternar o estado do modal.
  const handleOpenModal = () => {
    setIsModalOpen(prev => !prev)
  }

   // Renderiza o conteúdo da aplicação.
  return (
    <div className='container'>
     <h1>Cárdapio</h1>
     <div className='card-grid'>
        {data?.map(foodData => 
        <Card 
        price={foodData.price} 
        title={foodData.title}
        image={foodData.image}
        />
        )}
        </div>
      {isModalOpens && <CreateModal closeModal={handleOpenModal}/>}
      <button onClick={handleOpenModal}>novo</button>
    </div>
  )
}

export default App
