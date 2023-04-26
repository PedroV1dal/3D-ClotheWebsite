import React from 'react'

import state from '../store'
import { useSnapshot } from 'valtio'

const CustomButton = ({ type, title, customStyles, handleClick }) => {

  //utilizando estado com valtio, passando o state e pegando as props com o snap
  const snap = useSnapshot(state)

  //verifando se será necessário preencher o fundo do botão
  const generateStyle = (type) => {
    if(type === "filled") {
      return {
        backgroundColor: snap.color,
        color: '#fff',
      }
    }
  }

  return (
    <button 
      className={`px-2 py-1.5 flex-1 rounded-md ${customStyles}`} // pegar os estilos definidos e juntar com os que serão passados
      style={generateStyle(type)} //vai puxar a verificação do type feita acima
      onClick={handleClick}
    >
      {title}
    </button>
  )
}

export default CustomButton