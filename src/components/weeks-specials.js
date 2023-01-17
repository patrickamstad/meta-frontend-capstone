import Greek from './images/greek_salad.webp'
import LemonDessert from './images/lemon_dessert.webp'
import Brucheta from './images/brucheta.webp'

const specials = [
    {
        id: 0,
        title: "Greed Salad",
        url: `${Greek}`,
        desc: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
        price: 12.99
    },
    {
        id: 1,
        title: "Brucheta",
        url: `${Brucheta}`,
        desc: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with sald and olive oil.",
        price: 5.99
    },
    {
        id: 2,
        title: "Lemon Dessert",
        url: `${LemonDessert}`,
        desc: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
        price: 4.99
    }
]
export default specials;