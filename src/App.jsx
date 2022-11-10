import React, { useState } from 'react'

import Header from './components/header'

function App() {
  const [item, setItem] = useState()
  const [lista, setLista] = useState([])
  const [novoItem, setNovoItem] = useState()

  function getInput(value) {
    setItem(value)
  }

  function salvarItem() {
    setLista([...lista, item])
  }

  function deletar(itens) {
    const auxiliar = lista.filter(item => item !== itens)
    setLista(auxiliar)
  }

  function atualizar(index) {
    [lista[index] = novoItem]
    setNovoItem()
  }

  return (
    <div>
      <Header />
      <h1>Create Read Update Delete:</h1>
      <div>
        <label>Insira um item: </label>
        <input type="text" onChange={e => getInput(e.target.value)}></input>
        <button onClick={() => salvarItem()}>salvar</button>
        <ul>
          {lista.length && lista.map((itens, index) => {
            return (
              <li key={index}>{itens}
                <button onClick={() => deletar(itens)}>deletar</button>
                <input type="text" onChange={e => setNovoItem(e.target.value)}></input>
                <button onClick={() => atualizar(index)}>atualizar</button>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default App
