/*import './App.css' // Reaproveitamos o mesmo CSS*/
import { useState } from 'react' // Importamos a ferramenta de estado
import './App.css'
// "props" é como se fosse os parâmetros de uma função
function Cartao(props) {
  // 1. O Estado: [valorAtual, funcaoParaMudar]
  // Começa como false (não estou seguindo)
  const [seguindo, setSeguindo] = useState(false);

  // 2. A Função que troca o estado
  function lidarComClique() {
    // Se estava true, vira false. Se estava false, vira true.
    setSeguindo(!seguindo); 
  }

  return (
    <div className="cartao">
      {/* Aqui entra a imagem recebida via props*/}
      <img
        src={props.avatar}
        alt="Foto do perfil"
        className="foto-perfil"
      />
      
      <h1 className="titulo">{props.nome}</h1>
      <p className="subtitulo">{props.cargo}</p>
      
      {/* 3. A Mágica Visual:
         Mudamos o TEXTO e a CLASSE baseado no estado 'seguindo'
      */}
      <button 
        onClick={lidarComClique} 
        className={seguindo ? "botao-ativo" : ""}
      >
        {/* Operador Ternário: É uma pergunta (Se seguindo? Então X : Senão Y) */}
        {seguindo ? "SEGUINDO ✅" : "CONECTAR"}
      </button>
    </div>
  )
}

export default Cartao