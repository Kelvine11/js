interface Product {
    id: number,
    name: string,
    price: number,
    stock: number
}

interface Customer {
    id: number,
    name: string,
    email: string
}

interface OrderItem {
    product: Product,
    quantity: number
}

enum Status {
    Attente,
    Expédiée,
    Livrée
}

interface Order {
    id: number,
    customer: Customer,
    items: OrderItem[],
    status: Status
}

let cpt: number = 0;

function createOrder(customer: Customer, products: OrderItem[]): Order {
    cpt++;
    let order: Order = {
        id: cpt,
        customer: customer,
        items: [],
        status: Status.Attente,
    }

    for (let i: number = 0; i < products.length; i++) {
        order.items.push(products[i]);
    }

    return order;
}

function calculateTotal(order: Order): number {

    let total: number = 0;
    order.items.forEach(item => {
        total += item.product.price * item.quantity;
    });
    return total;
}

class OrderManager {
    orders: Order[] = [];

    addOrder(order: Order): void {
        this.orders.push(order);
    }

    getOrderById(id: number): Order[] {
        let order: Order[] = [];

        this.orders.forEach(element => {
            if (element.id == id) {
                order.push(element);
            }
        });

        return order;
    }

    updateOrderStatus(id: number, status: Status): void {
        let order: Order = this.getOrderById(id)[0];
        order.status = status;
    }

    listOrdersByStatus(status: Status): Order[] {
        let listOrder: Order[] = [];
        this.orders.forEach(element => {
            if (element.status == status) {
                listOrder.push(element);
            }
        });
        return listOrder;
    }

    removeOrder(id: number): void {
        this.orders.forEach(element => {
            if (element.id == id) {
                this.orders.splice(this.orders.indexOf(element), 1);
            }
        });
    }
}

let product1: Product = {
    id: 1,
    name: 'toto',
    price: 2,
    stock: 3
}

let product2: Product = {
    id: 2,
    name: 'tata',
    price: 3,
    stock: 4
}

let product3: Product = {
    id: 3,
    name: 'tutu',
    price: 4,
    stock: 5
}

let orderItem1: OrderItem = {
    product: product1,
    quantity: 1
}

let orderItem2: OrderItem = {
    product: product2,
    quantity: 2
}

let orderItem3: OrderItem = {
    product: product3,
    quantity: 3
}

let customer1: Customer = {
    id: 1,
    name: "lolo",
    email: "lolo@lolo"
}

let customer2: Customer = {
    id: 2,
    name: "lala",
    email: "lala@lala"
}

let orderItemsTab1: OrderItem[] = [];
let orderItemsTab2: OrderItem[] = [];
orderItemsTab1.push(orderItem1);
orderItemsTab1.push(orderItem2);
orderItemsTab2.push(orderItem3);


let orderManager = new OrderManager();
orderManager.addOrder(createOrder(customer1, orderItemsTab1));
orderManager.addOrder(createOrder(customer2, orderItemsTab2));

console.log("getOrderById ")
console.log(orderManager.getOrderById(2));
orderManager.updateOrderStatus(1, Status.Livrée);
console.log("updateOrderStatus ")
console.log(orderManager.getOrderById(1));
console.log("listOrdersByStatus ")
console.log(orderManager.listOrdersByStatus(Status.Attente));
orderManager.removeOrder(1);
console.log("removeOrder ")
console.log(orderManager.orders);
