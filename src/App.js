import './App.css';
import CardProduto from "./components/CardProduto";
import Contador from "./components/Contador";

function App() {
  return (
    <div className="App">
        <Contador></Contador>
        <CardProduto nome={"Frigideira"} desc={"preta e com cabo alongado"} valor={"R$60,00"}></CardProduto>
        <CardProduto nome={"carregador"} desc={"branco com cabo curto"} valor={"R$30,00"}></CardProduto>
        <CardProduto nome={"fone"} desc={"branco com duas saídas"} valor={"R$20,00"}></CardProduto>
    </div>
  );
}

export default App;