import { Product } from '@/lib/interfaces';

const products: Product[] = [
    {
        id: 1,
        name: 'Kit de Avión de Cartón',
        description: 'Arma tu propio avión de cartón reciclado con este divertido kit.',
        category: 'Juguetes',
        stock: 75,
        price: 12.99,
        cost: 5.25,
    },
    {
        id: 2,
        name: 'Kit de Robot de Latas',
        description: 'Construye un robot único utilizando latas de aluminio recicladas.',
        category: 'Juguetes',
        stock: 40,
        price: 19.99,
        cost: 7.80,
    },
    {
        id: 3,
        name: 'Kit de Casa de Muñecas de Papel',
        description: 'Crea tu propia casa de muñecas con este kit hecho de papel reciclado.',
        category: 'Juguetes',
        stock: 25,
        price: 24.99,
        cost: 10.50,
    },
    {
        id: 4,
        name: 'Kit de Joyero de Tapas de Plástico',
        description: 'Un joyero artesanal y ecológico hecho con tapas de plástico recicladas.',
        category: 'Decoración',
        stock: 15,
        price: 17.99,
        cost: 6.75,
    },
    {
        id: 5,
        name: 'Kit de Portavelas de Botellas de Vidrio',
        description: 'Transforma botellas de vidrio en elegantes portavelas con este kit.',
        category: 'Decoración',
        stock: 30,
        price: 9.99,
        cost: 3.50,
    },
];

export default products;