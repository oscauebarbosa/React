import {useState} from "react";

function Contador() {
    const [cliques, setCliques] = useState(0);
    const [texto, setTexto] = useState("");
    const [altura, setAltura] = useState(0);
    const [peso, setPeso] = useState(0);
    const [corFundo, setCorFundo] = useState("white");
    const [contagemDasMudancas, setContagemDasMudancas] = useState(0);

    function clicou() {
        setCliques(cliques + 1);
    }

    function digitou(event) {
        setTexto(event.target.value);
    }

    function digitouPeso(event) {
        setPeso(event.target.value);
    }

    function digitouAltura(event) {
        setAltura(event.target.value);
    }

    function mudarCor() {
        const novaCor = "#" + ((Math.random() * 0xffffff) << 0).toString(16);
        setCorFundo(novaCor);
        setContagemDasMudancas(contagemDasMudancas + 1);
    }

    function TextoCor() {
        setCorFundo(texto);
        setContagemDasMudancas(contagemDasMudancas + 1);
    }

    return (
        <div style={{ backgroundColor: corFundo }}>
            <input
                type="text"
                placeholder="Digite uma cor em inglês"
                value={texto}
                onChange={digitou}
            />
            <button onClick={TextoCor}>Mudar Cor</button>
            <p>Mudou de cor {contagemDasMudancas} vezes</p>



            <input value={peso} onChange={digitouPeso} />
            <input value={altura} onChange={digitouAltura} />
            <h4>Seu IMC é: {peso / (altura * altura)}</h4>
        </div>
    );
}

export default Contador;
