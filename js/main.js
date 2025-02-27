import submit from "./components/type_order.js";
const article__products = document.querySelector(".article__products");
const products =[
    {
        image:"storage/img/product-1.png",
        name: "Mix Ice cream",
        "type-order": [
            "On table",
            "Delivey"
        ],
        price: [
            199, 0
        ]
    },
    {
        image:"storage/img/product-2.png",
        name: "Chocolate Cup",
        "type-order":"On table",
        price: [
            129, 2
        ]
    },
    {
        image:"storage/img/product-3.png",
        name: "Barry Ice Cream",
        "type-order": [
            "On table",
            "Delivey"
        ],
        price: 109
    },
    {
        image:"storage/img/product-4.png",
        name: "Strawberry Ice Cream",
        "type-order": "Delivey",
        price: 149
    }
]

let plantilla = ""

for (let i =0; i < products.length; i++){
    plantilla += `
            <form action="?" method="GET" class="form__container-product">
            <img src="${products[i].image}" >
            <div class="div__product">
                <h3>${products[i].name}</h3>
                <span>Order Type:</span>
                <div class="div__type-order">
                    ${submit(products [i]["type-order"])}
                </div>
                <div  class="div__product-amount">
                    <label>Rs. 149/-</label>
                    <input type="number" name="amount" value="0">
                </div>
            </div>
        </form>
    `;
}

article__products.innerHTML = plantilla;