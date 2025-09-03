<button>Incrementar</button>
<p id="resultado">contador 0</p>

<script>
const contantador = {
    valor: 0,
    incrementar: function () {
        this.valor++;
        document.querySelector("#resultado").textContent = "contador " + this.valor;
    }, 
    configurarBotao: function () {
        const butao = document.querySelector("button");
        butao.addEventListener("click", this.incrementar.bind(this));
    }
};

contantador.configurarBotao();
</script>
