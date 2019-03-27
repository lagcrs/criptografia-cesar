class DescriptografarController{

    constructor(){
        this._textoDescriptogradado = [];

        this._listaDescriptografados = new ListaMensagensDescriptografadas();
    }

    descriptografar(mensagem, chave, alfabeto){
        this._mensagem = mensagem.toUpperCase();
        this._chave = parseInt(chave);
        console.log("Número da Chave", this._chave)
        this._alfabeto = alfabeto;
        let texto = this._mensagem.split("");
        console.log(texto);

        for (var letra in texto){
           
            for (var index in this._alfabeto){
                
                if(this._alfabeto[index] == texto[letra]){

                    console.log(texto[letra])
                    var posicao = parseInt(index)
                    console.log(posicao)

                    var letra_descifrada = (posicao - this._chave) % 26
                    console.log(letra_descifrada) 
                    if(letra_descifrada < 0){
                        letra_descifrada*(-1);
                    } 
                    this._textoDescriptogradado.push(this._alfabeto[letra_descifrada])
                    
                }
                
            } 
        }
        console.log(this._textoDescriptogradado);
        var junto = this._textoDescriptogradado.join(' ');
        this._listaDescriptografados.adiciona(junto);
        alert(junto)
        document.getElementById('mensagensView').innerHTML = junto;
    } 
}