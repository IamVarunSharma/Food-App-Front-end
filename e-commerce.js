class Product {

    constructor(imgUrl, itemName, price) {

        this.imgUrl = imgUrl;
        this.itemName = itemName;
        this.price = price;
    }

}


class CartList {

    static cartlist = [];
    static total = 0;

    constructor() {}

    static render() {
        const totalprice = document.querySelector('.totalprice');
        CartList.total = 0;
        for (const item of CartList.cartlist) {
            CartList.total = CartList.total + item.price;

        }

        totalprice.textContent = CartList.total;


    }
}





class ProductItem extends CartList {

    constructor(imgUrl, itemName, price) {
        super();
        this.ProductItem = new Product(imgUrl, itemName, price);
    }

    render() {
        const productarea = document.querySelector('.productArea');
        const newelement = document.createElement('div');
        const newimg = document.createElement('img');
        const newdetailbox = document.createElement('div');
        const newitemname = document.createElement('h2');
        const newprice = document.createElement('h2');
        const addtocartbtn = document.createElement('button');

        newelement.className = 'productItem';
        newimg.src = this.ProductItem.imgUrl;
        newdetailbox.className = 'detailbox';
        newitemname.className = 'dishName';
        newitemname.textContent = this.ProductItem.itemName;
        newprice.className = 'price';
        newprice.textContent = this.ProductItem.price;
        addtocartbtn.className = 'addtocart';
        addtocartbtn.textContent = 'Add To Cart';

        newelement.appendChild(newimg);
        newelement.appendChild(newdetailbox);
        newdetailbox.appendChild(newitemname);
        newdetailbox.appendChild(newprice);
        newelement.appendChild(addtocartbtn);

        productarea.appendChild(newelement);


        addtocartbtn.addEventListener('click', this.addtocart.bind(this));

    }

    addtocart() {

        CartList.cartlist.push(this.ProductItem);
        CartList.render();
        const bill = document.querySelector('.billBreakdown');
        const billitem = document.createElement('p');
        billitem.className = 'billitem';
        billitem.textContent = this.ProductItem.itemName;
        billitem.addEventListener('click', this.removefromcart.bind(this, billitem));
        bill.appendChild(billitem);


    }

    removefromcart(billitem) {
        CartList.cartlist.splice(CartList.cartlist.indexOf(this.ProductItem), 1);
        CartList.render();
        billitem.remove();

    }

}


let obj = new ProductItem('paneertikka.jfif', 'Paneer Tikka', 200);
obj.render();
obj = new ProductItem('burger.jpg', 'Burger', 120);
obj.render();
obj = new ProductItem('garlicbread.jpg', 'Garlic Bread', 109);
obj.render();
obj = new ProductItem('pizza.jpg', 'Pizza', 229);
obj.render();
obj = new ProductItem('pasta.jpg', 'Pasta', 149);
obj.render();
obj = new ProductItem('momos.jpg', 'Momos', 129);
obj.render();
obj = new ProductItem('naan.jpg', 'Naan', 59);
obj.render();
obj = new ProductItem('chocolate-shake.jpg', 'Chocolate Shake', 125);
obj.render();
obj = new ProductItem('juice.jpg', 'Juice', 100);
obj.render();
obj = new ProductItem('coke.jpg', 'Coke', 40);
obj.render();