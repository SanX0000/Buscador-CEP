import { useState } from 'react';
import { FiSearch } from "react-icons/fi";
import './styles.css';

import api from './services/api';
import Loader from './components/Loader';


function App() {

  const [input, setInput] = useState('87023400');
  const [cep, setCep] = useState({});

  const [isLoading, setIsLoading] = useState(false);


  async function handleSearch(e) {
    e.preventDefault();
    // 01310930/json/
    setCep("")
    if (input === '') {
      alert("Digite algum CEP");
      return;
    }


    try {
      setIsLoading(true);
      const response = await api.get(`${input}/json`);
      const data = response.data;
      if(data['erro']){
        alert('Cep não existe');
      } else {
        setCep(data);
        setInput("");
      }
    } catch {
      alert("Ops, erro ao buscar");
      setInput("");
    } finally {
      setIsLoading(false);
    }

  }

  return (

    <>
      <form onSubmit={handleSearch} className="container">
        <h1 className="title">Buscador CEP</h1>

        <div className="containerInput">
          <input
            type="text"
            placeholder="Digite seu CEP..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            autoFocus
          />

          <button type='submit' className="buttonSearch">
            <FiSearch size={25} color="FFF" />
          </button>
        </div>

        {Object.keys(cep).length > 0 && (
          <main className="main">
            <h2>CEP: {cep.cep}</h2>

            <span>{cep.logradouro}</span>
            <span>{cep.complemento}</span>
            <span>{cep.bairro}</span>
            <span>{cep.localidade} - {cep.uf}</span>

          </main>
        )}

      </form>

      {isLoading && <Loader />}

    </>

  );
}

export default App;
