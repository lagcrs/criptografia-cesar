class CriptografarController{

    constructor(){
        this._textoCriptogradado = [];
        
        this._listaCriptografados = new ListaMensagensCriptografadas();
        
    }

    criptografar(mensagem, chave, alfabeto){
        this._mensagem = mensagem.toUpperCase();
        this._chave = parseInt(chave);
        console.log("Número da Chave: ", this._chave)
        this._alfabeto = alfabeto;
        let texto = this._mensagem.split("");
        console.log(texto);

        for (var letra in texto){
           
            for (var index in this._alfabeto){
                
                if(this._alfabeto[index] == texto[letra]){

                    console.log(texto[letra])
                    var posicao = parseInt(index)
                    
                    var letra_cifrada = (posicao + this._chave) % 26
                    console.log(letra_cifrada)  

                    this._textoCriptogradado.push(this._alfabeto[letra_cifrada])
                }
                
            } 
        }
        console.log(this._textoCriptogradado)
        var junto = this._textoCriptogradado.join(' ');
        this._listaCriptografados.adiciona(junto);
        alert(junto)
        document.getElementById('mensagensView').innerHTML = junto;
    } 
}