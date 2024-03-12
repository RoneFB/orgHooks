import green from '../assets/produtores/green.png'
import salad from '../assets/produtores/salad.png'
import jennyJack from '../assets/produtores/jenny-jack.png'
import grow from '../assets/produtores/grow.png'
import potager from '../assets/produtores/potager.png'

const gerarNumeroAleatorio = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
const produtores = {
    titulo: 'Produtores',
    lista: [
        {
            nome: 'Green',
            image: green,
            distancia: gerarNumeroAleatorio(1, 500),
            estrelas: gerarNumeroAleatorio(1, 5)
        },
        {
            nome: 'Salad',
            image: salad,
            distancia: gerarNumeroAleatorio(1, 500),
            estrelas: gerarNumeroAleatorio(1, 5)
        },
        {
            nome: 'Janny Jack',
            image: jennyJack,
            distancia: gerarNumeroAleatorio(1, 500),
            estrelas: gerarNumeroAleatorio(1, 5)
        },
        {
            nome: 'Grow',
            image: grow,
            distancia: gerarNumeroAleatorio(1, 500),
            estrelas: gerarNumeroAleatorio(1, 5)
        },
        {
            nome: 'Potager',
            image: potager,
            distancia: gerarNumeroAleatorio(1, 500),
            estrelas: gerarNumeroAleatorio(1, 5)
        }
    ]
}

export default produtores;