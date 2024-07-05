import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private categories = [
    { name: 'Ethinic Wear', coverImage: 'assets/media/images/collection/ethinic wear-cover.jpg' },
    { name: 'Sarees', coverImage: 'assets/media/images/collection/sarees-cover.jpg' },
    { name: 'Weatern Wear', coverImage: 'assets/media/images/collection/western-wear-cover.jpg' },
    // { name: 'Winter Wear', coverImage: ' assets/media/images/collection/winter-wear-cover.jpg' },
    // { name: 'Sports Wear', coverImage: ' assets/media/images/collection/sports-wear-cover.jpg' },
    { name: 'Footwear', coverImage: ' assets/media/images/collection/footwear-cover.jpg' },
    { name: 'Jewellery', coverImage: ' assets/media/images/collection/jewellery-cover.jpg' },
    { name: 'HandBags & clutches', coverImage: ' assets/media/images/collection/handbags-cover.jpg' },
    { name: 'Watches', coverImage: ' assets/media/images/collection/watches-cover.png' },
    // { name: 'Hats', coverImage: ' assets/media/images/collection/hat-cover.jpg' },
  ];

  private products = [
    { id: 1, name: 'straight Kurthi', category: 'Ethinic Wear', price: 380.00, image: 'assets/media/images/product/E1.jpg' },
    { id: 2, name: 'Long Frock', category: 'Ethinic Wear', price: 549.00, image: 'assets/media/images/product/E2.jpg' },
    { id: 3, name: 'Kurthi set', category: 'Ethinic Wear', price: 499.00, image: 'assets/media/images/product/E3.jpg' },
    { id: 4, name: 'Embroidery set', category: 'Ethinic Wear', price: 649.00, image: 'assets/media/images/product/E4.jpg' },
    { id: 5, name: 'Crop top', category: 'Ethinic Wear', price: 1049.00, image: 'assets/media/images/product/E5.jpg' },
    { id: 6, name: 'Lehenga Set', category: 'Ethinic Wear', price: 2449.00, image: 'assets/media/images/product/E6.jpg' },
    { id: 7, name: 'Haldi croptop', category: 'Ethinic Wear', price: 1559.00, image: 'assets/media/images/product/E7.jpg' },
    { id: 8, name: 'Anarkali Kurthi', category: 'Ethinic Wear', price: 428.00, image: 'assets/media/images/product/E8.jpg' },
    { id: 9, name: 'Black Kurthi', category: 'Ethinic Wear', price: 355.00, image: 'assets/media/images/product/E9.jpg' },
    { id: 10, name: 'Anarkali Kurthi (full sleeve)', category: 'Ethinic Wear', price: 469.00, image: 'assets/media/images/product/E10.jpg' },
    { id: 11, name: 'Plazzo Set', category: 'Ethinic Wear', price: 889.00, image: 'assets/media/images/product/E11.jpg' },
    { id: 12, name: 'Embroidery Lehenga', category: 'Ethinic Wear', price: 2559.00, image: 'assets/media/images/product/E12.jpg' },
    { id: 13, name: 'Embroidery Saree', category: 'Sarees', price: 2000.00, image: 'assets/media/images/product/saree1.jpg' },
    { id: 14, name: 'Rose printed Saree', category: 'Sarees', price: 559.00, image: 'assets/media/images/product/saree2.jpg' },
    { id: 15, name: 'Cotton Saree', category: 'Sarees', price: 999.00, image: 'assets/media/images/product/saree3.jpg' },
    { id: 16, name: 'Designing Saree', category: 'Sarees', price: 2559.00, image: 'assets/media/images/product/saree4.jpg' },
    { id: 17, name: 'Printed Saree', category: 'Sarees', price: 549.00, image: 'assets/media/images/product/saree5.jpg' },
    { id: 18, name: 'Pattu Saree', category: 'Sarees', price: 1049.00, image: 'assets/media/images/product/saree6.jpg' },
    { id: 19, name: 'TreadWork Saree', category: 'Sarees', price: 1549.00, image: 'assets/media/images/product/saree7.jpg' },
    { id: 20, name: 'Kalyana Pattu Saree', category: 'Sarees', price: 2549.00, image: 'assets/media/images/product/saree8.jpg' },
    { id: 21, name: 'Vivah Gold Saree', category: 'Sarees', price: 4549.00, image: 'assets/media/images/product/saree9.jpg' },
    { id: 22, name: 'Fancy Saree', category: 'Sarees', price: 3599.00, image: 'assets/media/images/product/saree11.jpg' },
    { id: 23, name: 'Pattu Saree with Embroidery blouse', category: 'Sarees', price: 5535.00, image: 'assets/media/images/product/saree10.jpg' },
    { id: 24, name: 'Chandheri Pattu saree', category: 'Sarees', price: 4999.00, image: 'assets/media/images/product/saree12.jpg' },
    { id: 25, name: 'Party Wear gown', category: 'Weatern Wear', price: 1999.00, image: 'assets/media/images/product/W1.jpg' },
    { id: 26, name: 'Baggy set', category: 'Weatern Wear', price: 2599.00, image: 'assets/media/images/product/W3.jpg' },
    { id: 27, name: 'Party Wear gown(blue)', category: 'Weatern Wear', price: 1599.00, image: 'assets/media/images/product/W2.jpg' },
    { id: 28, name: 'Floral tops', category: 'Weatern Wear', price: 1048.00, image: 'assets/media/images/product/W4.jpg' },
    { id: 29, name: 'Vintage white blouse', category: 'Weatern Wear', price: 948.00, image: 'assets/media/images/product/W5.jpg' },
    { id: 30, name: 'Cold shoulder black fitted dress', category: 'Weatern Wear', price: 1548.00, image: 'assets/media/images/product/W6.jpg' },
    { id: 31, name: 'Maxi Black dress with jean coat', category: 'Weatern Wear', price: 1948.00, image: 'assets/media/images/product/W7.jpg' },
    { id: 32, name: 'Red Party wear gown ', category: 'Weatern Wear', price: 1048.00, image: 'assets/media/images/product/W9.jpg' },
    { id: 33, name: 'Fit and Flare black dress', category: 'Weatern Wear', price: 999.00, image: 'assets/media/images/product/W8.jpg' },
    { id: 34, name: 'Yellow solid A-Line Midi dress ', category: 'Weatern Wear', price: 959.00, image: 'assets/media/images/product/W10.jpg' },
    { id: 35, name: 'Turtle Neck Sweater dress ', category: 'Weatern Wear', price: 1459.00, image: 'assets/media/images/product/W11.jpg' },
    { id: 36, name: 'White full-sleeve Blazer Crop Jacket', category: 'Weatern Wear', price: 2599.00, image: 'assets/media/images/product/W12.jpg' },
    { id: 37, name: 'Backless Maxi Beach dress', category: 'Weatern Wear', price: 1999.00, image: 'assets/media/images/product/W13.jpg' },
    { id: 38, name: 'Leather BabyPink Watch', category: 'Watches', price: 259.00, image: 'assets/media/images/product/Watch1.jpg' },
    { id: 39, name: 'Septem Analog Watch', category: 'Watches', price: 274.00, image: 'assets/media/images/product/Watch2.jpg' },
    { id: 40, name: 'Stainless Steel Quartz Watch', category: 'Watches', price: 1388.00, image: 'assets/media/images/product/Watch3.jpg' },
    { id: 41, name: 'TimeLand Smart Watch', category: 'Watches', price: 2599.00, image: 'assets/media/images/product/Watch5.jpg' },
    { id: 42, name: 'Rado Sea Blue Watch', category: 'Watches', price: 699.00, image: 'assets/media/images/product/Watch4.jpg' },
    { id: 43, name: 'Black Leather belt watch', category: 'Watches', price: 459.00, image: 'assets/media/images/product/Watch6.jpg' },
    { id: 44, name: 'Quartz vintage Square Steel case watch', category: 'Watches', price: 639.00, image: 'assets/media/images/product/Watch7.jpg' },
    { id: 45, name: 'Silver Milanese loop digital watch', category: 'Watches', price: 990.00, image: 'assets/media/images/product/Watch8.jpg' },
    { id: 46, name: 'White Large Pearl Studs', category: 'Jewellery', price: 207.00, image: 'assets/media/images/product/J3.jpg' },
    { id: 47, name: 'Teardrop diamond Ring', category: 'Jewellery', price: 950.00, image: 'assets/media/images/product/J5.jpg' },
    { id: 48, name: 'Gold coated Neck Chain', category: 'Jewellery', price: 199.00, image: 'assets/media/images/product/J10.jpg' },
    { id: 49, name: 'wedding jewellery set', category: 'Jewellery', price: 2999.00, image: 'assets/media/images/product/J2.jpg' },
    { id: 50, name: 'Bracelet & Earrings set', category: 'Jewellery', price: 1059.00, image: 'assets/media/images/product/J4.jpg' },
    { id: 51, name: 'Silver Bracelet', category: 'Jewellery', price: 559.00, image: 'assets/media/images/product/J7.jpg' },
    { id: 52, name: 'Forever Key Necklace', category: 'Jewellery', price: 189.00, image: 'assets/media/images/product/J11.jpg' },
    { id: 53, name: 'Silver Anklets', category: 'Jewellery', price: 259.00, image: 'assets/media/images/product/J8.jpg' },
    { id: 54, name: 'Adjustable Flower braclet', category: 'Jewellery', price: 499.00, image: 'assets/media/images/product/J9.jpg' },
    { id: 55, name: 'Green Stones Jewellery set', category: 'Jewellery', price: 2059.00, image: 'assets/media/images/product/J1.jpg' },
    { id: 56, name: 'Simple gold neck chain', category: 'Jewellery', price: 189.00, image: 'assets/media/images/product/J6.jpg' },
    { id: 57, name: 'Elora Necklace Set', category: 'Jewellery', price: 389.00, image: 'assets/media/images/product/J12.jpg' },
    { id: 58, name: 'ESCADA Pump High Heels', category: 'Footwear', price: 889.00, image: 'assets/media/images/product/footwear1.jpg' },
    { id: 59, name: 'Adidas Campus Shoes', category: 'Footwear', price: 1099.00, image: 'assets/media/images/product/footwear2.jpg' },
    { id: 60, name: 'Tipton women black Heels', category: 'Footwear', price: 1249.00, image: 'assets/media/images/product/footwear3.jpg' },
    { id: 61, name: 'Beige lace-up Boots', category: 'Footwear', price: 2378.00, image: 'assets/media/images/product/footwear4.jpg' },
    { id: 62, name: 'White Leather Sandals', category: 'Footwear', price: 1599.00, image: 'assets/media/images/product/footwear5.jpg' },
    { id: 63, name: 'Pair of White peeptoe high Heels', category: 'Footwear', price: 1588.00, image: 'assets/media/images/product/footwear6.jpg' },
    { id: 64, name: 'Nike Red shoes', category: 'Footwear', price: 1298.00, image: 'assets/media/images/product/footwear7.jpg' },
    { id: 65, name: 'Albert Bridal Shoes', category: 'Footwear', price: 1099.00, image: 'assets/media/images/product/footwear8.jpg' },
    { id: 66, name: 'handbag1', category: 'HandBags & clutches', price: 1099.00, image: 'assets/media/images/product/handbag1.jpg' },
    { id: 67, name: 'handbag2', category: 'HandBags & clutches', price: 1299.00, image: 'assets/media/images/product/handbag2.jpg' },
    { id: 68, name: 'handbag3', category: 'HandBags & clutches', price: 1509.00, image: 'assets/media/images/product/handbag3.jpg' },
    { id: 69, name: 'handbag4', category: 'HandBags & clutches', price: 1449.00, image: 'assets/media/images/product/handbag4.jpg' },
    { id: 70, name: 'handbag5', category: 'HandBags & clutches', price: 1449.00, image: 'assets/media/images/product/handbag5.jpg' },
    { id: 71, name: 'handbag6', category: 'HandBags & clutches', price: 1439.00, image: 'assets/media/images/product/handbag6.jpg' },
    { id: 72, name: 'handbag7', category: 'HandBags & clutches', price: 1249.00, image: 'assets/media/images/product/handbag7.jpg' },
    { id: 73, name: 'handbag8', category: 'HandBags & clutches', price: 1049.00, image: 'assets/media/images/product/handbag8.jpg' },
    // Add more products as needed
  ];

  private cart: any[] = JSON.parse(localStorage.getItem('cart') || '[]');
  private cartCount = new BehaviorSubject<number>(this.getCartCount());

  getCategories() {
    return this.categories;
  }
  
  getProducts(category: string) {
    return this.products.filter(product => product.category === category);
  }

  getRandomProducts() {
    const randomProducts: any[] = [];
    this.categories.forEach(category => {
      const categoryProducts = this.getProducts(category.name);
      if (categoryProducts.length) {
        const randomIndex = Math.floor(Math.random() * categoryProducts.length);
        randomProducts.push(categoryProducts[randomIndex]);
      }
    });
    return randomProducts;
  }

  getCartCount() {
    return this.cart.reduce((total, product) => total + product.quantity, 0);
  }

  getCartCountObservable() {
    return this.cartCount.asObservable();
  }

  updateCartCount() {
    this.cartCount.next(this.getCartCount());
  }

  addToCart(product: any) {
    const existingProduct = this.cart.find(item => item.id === product.id);
    if (existingProduct) {
      existingProduct.quantity++;
    } else {
      this.cart.push({ ...product, quantity: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(this.cart));
    this.updateCartCount();
    alert(`${product.name} has been added to your cart.`);
  }

  getCart() {
    return this.cart;
  }

  removeFromCart(productId: number) {
    this.cart = this.cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(this.cart));
    this.updateCartCount();
  }

}
