const calculador = {
    valor : 0,
    somar : function (num) {
        this.valor += 5 + num 
        console.log(this.valor)
        
    }
};
calculador.somar(2);