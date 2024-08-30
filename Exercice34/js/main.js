var Status;
(function (Status) {
    Status[Status["Attente"] = 0] = "Attente";
    Status[Status["Exp\u00E9di\u00E9e"] = 1] = "Exp\u00E9di\u00E9e";
    Status[Status["Livr\u00E9e"] = 2] = "Livr\u00E9e";
})(Status || (Status = {}));
let cpt = 0;
function createOrder(customer, products) {
    cpt++;
    let order = {
        id: cpt,
        customer: customer,
        items: [],
        status: Status.Attente,
    };
    for (let i = 0; i < products.length; i++) {
        order.items.push(products[i]);
    }
    return order;
}
function calculateTotal(order) {
    let total = 0;
    order.items.forEach(item => {
        total += item.product.price * item.quantity;
    });
    return total;
}
class OrderManager {
    constructor() {
        this.orders = [];
    }
    addOrder(order) {
        this.orders.push(order);
    }
    getOrderById(id) {
        let order = [];
        this.orders.forEach(element => {
            if (element.id == id) {
                order.push(element);
            }
        });
        return order;
    }
    updateOrderStatus(id, status) {
        let order = this.getOrderById(id)[0];
        order.status = status;
    }
    listOrdersByStatus(status) {
        let listOrder = [];
        this.orders.forEach(element => {
            if (element.status == status) {
                listOrder.push(element);
            }
        });
        return listOrder;
    }
    removeOrder(id) {
        this.orders.forEach(element => {
            if (element.id == id) {
                this.orders.splice(this.orders.indexOf(element), 1);
            }
        });
    }
}
let product1 = {
    id: 1,
    name: 'toto',
    price: 2,
    stock: 3
};
let product2 = {
    id: 2,
    name: 'tata',
    price: 3,
    stock: 4
};
let product3 = {
    id: 3,
    name: 'tutu',
    price: 4,
    stock: 5
};
let orderItem1 = {
    product: product1,
    quantity: 1
};
let orderItem2 = {
    product: product2,
    quantity: 2
};
let orderItem3 = {
    product: product3,
    quantity: 3
};
let customer1 = {
    id: 1,
    name: "lolo",
    email: "lolo@lolo"
};
let customer2 = {
    id: 2,
    name: "lala",
    email: "lala@lala"
};
let orderItemsTab1 = [];
let orderItemsTab2 = [];
orderItemsTab1.push(orderItem1);
orderItemsTab1.push(orderItem2);
orderItemsTab2.push(orderItem3);
let orderManager = new OrderManager();
orderManager.addOrder(createOrder(customer1, orderItemsTab1));
orderManager.addOrder(createOrder(customer2, orderItemsTab2));
console.log("getOrderById ");
console.log(orderManager.getOrderById(2));
orderManager.updateOrderStatus(1, Status.Livrée);
console.log("updateOrderStatus ");
console.log(orderManager.getOrderById(1));
console.log("listOrdersByStatus ");
console.log(orderManager.listOrdersByStatus(Status.Attente));
orderManager.removeOrder(1);
console.log("removeOrder ");
console.log(orderManager.orders);
