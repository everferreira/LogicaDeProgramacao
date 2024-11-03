class Hero {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;

        switch (this.tipo.toLowerCase()) {
            case 'mago':
                ataque = 'magia';
                break;
            case 'guerreiro':
                ataque = 'espada';
                break;
            case 'monge':
                ataque = 'artes marciais';
                break;
            case 'ninja':
                ataque = 'shuriken';
                break;
            default:
                ataque = 'ataque desconhecido';
        }

        console.log(`o ${this.tipo} atacou usando ${ataque}`);
    }
}

// Exemplos de uso
const heroi1 = new Hero('Gandalf', 300, 'mago');
heroi1.atacar(); // Saída: o mago atacou usando magia

const heroi2 = new Hero('Conan', 30, 'guerreiro');
heroi2.atacar(); // Saída: o guerreiro atacou usando espada

const heroi3 = new Hero('Lao Tzu', 50, 'monge');
heroi3.atacar(); // Saída: o monge atacou usando artes marciais

const heroi4 = new Hero('Naruto', 17, 'ninja');
heroi4.atacar(); // Saída: o ninja atacou usando shuriken
