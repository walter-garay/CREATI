import { Product } from '@/lib/interfaces';

const products: Product[] = [
    {
        id: 1,
        name: 'Kit Avión',
        description: 'Arma tu propio avión de cartón reciclado con este divertido kit.',
        category: 'Juguetes',
        stock: 75,
        price: 12.99,
        cost: 5.25,
        photos: ['https://cultura.cuenca.gob.ec/wp-content/uploads/2022/01/elaboracion-de-organizador.jpeg'],
    },
    {
        id: 2,
        name: 'Kit de Robot de Latas',
        description: 'Construye un robot único utilizando latas de aluminio recicladas.',
        category: 'Juguetes',
        stock: 40,
        price: 19.99,
        cost: 7.80,
        photos: ['https://i.pinimg.com/originals/33/c9/7b/33c97b2fb3964d6450bcd5f3f3b90604.jpg'],
    },
    {
        id: 3,
        name: 'Kit de Casa de Muñecas de Papel',
        description: 'Crea tu propia casa de muñecas con este kit hecho de papel reciclado.',
        category: 'Juguetes',
        stock: 25,
        price: 24.99,
        cost: 10.50,
        photos: ['https://4.bp.blogspot.com/-kRKmjYQmusw/UBDfTlQqQVI/AAAAAAAAAls/qZHxZ5KRwco/s1600/IMG_2274.JPG'],
    },
    {
        id: 4,
        name: 'Kit de Joyero de Tapas de Plástico con Cartón Reciclado y Pintura Ecofriendly',
        description: 'Un joyero artesanal y ecológico hecho con tapas de plástico recicladas.',
        category: 'Decoración',
        stock: 15,
        price: 17.99,
        cost: 6.75,
        photos: ['https://hips.hearstapps.com/es.h-cdn.co/mcres/images/mi-casa/manualidades-diy/decoracion-diy-con-materiales-reciclados/unos-portalapices-muy-divertidos/1800069-1-esl-ES/unos-portalapices-muy-divertidos.jpg'],
    },
    {
        id: 5,
        name: 'Kit de Portavelas de Botellas de Vidrio',
        description: 'Transforma botellas de vidrio en elegantes portavelas con este kit.',
        category: 'Decoración',
        stock: 30,
        price: 9.99,
        cost: 3.50,
        photos: ['https://mapiwee.mx/wp-content/uploads/2022/06/Final1-scaled.jpg'],
    },
];

export default products;