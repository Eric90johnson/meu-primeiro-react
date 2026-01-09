import './App.css'
import Cartao from './Cartao' // Importamos nosso molde novo

function App() {
  return (
    <div className="container">
      {/* Agora podemos criar quantos quisermos! */}
      <Cartao nome="Eric Johnson" cargo="Dev React Iniciante" />
      
      {/* Dê um espaço visual inline (só para teste) */}
      <div style={{ width: '20px' }}></div> 

      <Cartao nome="Seu Mentor" cargo="Inteligência Artificial" />
    </div>
  )
}

export default App