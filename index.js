class Hero
{
    static #tipos = ['mago', 'guerreiro', 'monge', 'ninja'];
    static #ataquesPorTipo = ['magia', 'espada', 'artes marciais', 'shuriken'];
    
    constructor(nome, idade, tipo)
    {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo.toLowerCase();
    }

    static obterTiposDisponiveis()
    {
        return Hero.#tipos;
    }

    atacar()
    {
        if(Hero.#tipos.includes(this.tipo) == false)
            return console.log('Não foi possível atacar pois este tipo não existe no contexto atual.');

        console.log(`O ${this.tipo} atacou usando ${Hero.#ataquesPorTipo[Hero.#tipos.indexOf(this.tipo) ] }`);
    }
}

// Teste de falha do método 'Hero.atacar()'
//new Hero('Gohan', 23, 'Saiyajin').atacar();

let nomes = ['Felipe', 'Andrade', 'Venilton', 'Kledson']
let herois = [];

Hero.obterTiposDisponiveis().forEach( function(tipo){
    let numeroRandomico = 0;
    do{
        numeroRandomico = parseInt(Math.random() * 50);
    } while(numeroRandomico < 18);

    herois.push(new Hero(nomes[Hero.obterTiposDisponiveis().indexOf(tipo) ], numeroRandomico, tipo) );
} );

// Teste para checar os valores das instâncias.
//herois.forEach((heroi) => console.log(heroi) );

herois.forEach((heroi) => heroi.atacar() );
