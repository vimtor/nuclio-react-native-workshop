import {shuffle} from 'lodash'

const PRODUCTS = [
    {
        id: 1,
        title: 'Headphones',
        description: 'Headphones are a pair of small loudspeaker drivers worn on or around the head over a user\'s ears. They are electroacoustic transducers, which convert an electrical signal to a corresponding sound.',
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80',
        price: 190
    },
    {
        id: 2,
        title: 'Shoes',
        description: 'A shoe is a piece of footwear for humans, less than a boot and more than a slipper. This footwear is shaped to fit the foot (or the area below the ankle) with a flexible upper part of lLeather (or plastic) usually and a sole and heel of heavier material.',
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
        price: 99
    },
    {
        id: 3,
        title: 'Watch',
        description: 'A watch is a portable timepiece intended to be carried or worn by a person. ... A wristwatch is designed to be worn around the wrist, attached by a watch strap or other type of bracelet, including metal bands, leather straps or any other kind of bracelet.',
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1378&q=80',
        price: 55
    },
    {
        id: 4,
        title: 'Sunglasses',
        description: 'Sunglasses or sun glasses (informally called shades or sunnies; more names below) are a form of protective eyewear designed primarily to prevent bright sunlight and high-energy visible light from damaging or discomforting the eyes.',
        image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
        price: 20
    },
    {
        id: 5,
        title: 'Camera',
        description: "Camera, in photography, device for recording an image of an object on a light-sensitive surface; it is essentially a light-tight box with an aperture to admit light focused onto a sensitized film or plate.",
        image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80',
        price: 74
    },
    {
        id: 6,
        title: 'Perfume',
        description: 'Perfume is a mixture of fragrant essential oils or aroma compounds, fixatives and solvents, usually in liquid form, used to give the human body, animals, food, objects, and living-spaces an agreeable scent.',
        image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=696&q=80',
        price: 42
    }

]

async function simulateDelay() {
    return new Promise(resolve => {
        setTimeout(resolve, Math.random() * 3500)
    })
}

export async function fetchProducts(search) {
    await simulateDelay();
    const products = shuffle(PRODUCTS);
    return products.filter(product => product.title.toLowerCase().includes(search.toLowerCase()));
}

export async function fetchProduct(id) {
    return PRODUCTS.find(product => product.id === id)
}
