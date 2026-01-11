import { useState, useEffect} from 'react'
import './App.css'
import Cartao from './Cartao'

function App() {
  // Estado inicial (enquanto carrega)
  const [usuario, setUsuario] = useState({nome: "Carregando...", avatar: "https://via.placeholder.com/150", bio: ""});
  

  useEffect ( () => {
    // Busca dados na api do gitHub do eric Johnson
    fetch("https://api.github.com/users/Eric90johnson")
    .then(resposta => resposta.json())
    .then(dados => {
      setUsuario({
        nome: dados.nome || dados.login,
        avatar: dados.avatar_url, // url da foto do GitHub
        bio: dados.bio || "Dev React em formação" // Usa a bio do github ou  um padrão
      });
    })
    .catch(erro => console.error("Erro ao buscar:", erro));
  }, []);

  return (
    <div className='container'>
      {/* Cartão Dinânico (Vem do Github) */}
      <Cartao
        nome={usuario.nome}
        cargo={usuario.bio}
        avatar={usuario.avatar}
      />

      {/* Cartão Estático (Só para teste) */}
      <Cartao
        nome="React Bot"
        cargo="Eu sou um robo estático"
        avatar="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
      />
    </div>
  )
}

export default App