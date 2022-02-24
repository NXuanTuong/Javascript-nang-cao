import toastr from "toastr";
import NavHeader from "../components/header";
import "toastr/build/toastr.min.css";
import { decrease, increase, removeItem } from "../utils/addCart";
import { ReRender } from "../utils/Rerender";

const PageCart = {
    render() {
        let cart = [];
        if (localStorage.getItem("cart")) {
            cart = JSON.parse(localStorage.getItem("cart"));
        }
        return /* html */ `
            ${NavHeader.render()}
            <div class="bg-[#eff5f8] block">
                <ul class="text-center p-5">
                    <li class="inline-block"><a class="px-1 py-3 text-lg font-medium text-[#8d979d]" href="/">Home</a></li> 
                    <li class="inline-block"><span class="px-1 text-lg font-medium text-[#8d979d] py-3">></span></li>
                    <li class="inline-block"><a  class="px-1 text-lg font-medium text-black py-3" href="/cart">Shopping Cart</a></li>
                </ul>
            </div>
            ${cart.length == [] ? /* html */`
            <marquee width="100%" class="py-4 mt-4 text-2xl text-red-500 font-semibold" behavior="alternate" bgcolor="pink">  
                    Đi Mua Thêm Sản Phẩm Nào!
            </marquee>
            <img class="m-auto" src="https://img.pikbest.com/png-images/20191028/little-boy-pushing-a-shopping-cart-to-buy-things-gif_2515305.png!bw700" alt="">
            ` : /* html */`
            <div class="max-w-7xl w-full p-6 m-auto mt-20">
            <div class="content-cart">
            <div class="content-cart-columns">
                <div class="flex justify-between items-center mb-5">
                    <div>
                        <p class="text-lg font-semibold">Shopping Cart</p>
                    </div>

                    <div>
                        <p class="text-lg font-semibold">${cart.length} Items</p>
                    </div>
                </div>
            <div style="border-top: 2px solid #dee2e6;"></div>
            <div style="width: 100%;
                height: 635px;
                overflow: scroll;">
              <table>
                <thead>
                  <tr>
                    <th>Image product</th>
                    <th>Name product</th>
                    <th>Quantity</th>
                    <th>Price product</th>
                    <th>Total</th>
                    <th></th>
                  </tr>
                </thead>
    
                <tbody>
                ${cart.map((item) => /* html */`
                        <tr>
                        <td><img src="${item.image}" class="w-full object-cover max-w-full h-40" alt=""></td>
                        <td class="text-sm w-52">${item.name}</td>
                        <td>
                            <button data-id="${item.id}" class="btn btn-decrease font-semibold border bg-orange-500 text-white"><i class="bi bi-dash-lg"></i></button>
                            <input class="w-16 text-center px-5 border boder-gray-500 outline-none" type="number" name="" value="${item.quantity}">
                            <button data-id="${item.id}" class="btn btn-increase font-semibold border bg-green-500 text-white"><i class="bi bi-plus-lg"></i></button>
                        </td>
                        <td>$ ${item.pricenew}</td>
                        <td>$ ${item.total}</td>
                        <td><button data-id="${item.id}" type="" class="btn btn-remove"><i class="bi bi-trash-fill"></i></button></td>
                    </tr>
                `).join("")}
                </tbody>
              </table>
              </div>
              <button class="btn-continue"><a href=""><i class="fas fa-long-arrow-alt-left"></i> Tiếp tục xem sản phẩm</a></button>
            </div>
    
            <div class="content-cart-pay h-[700px]">
                <div class="mb-5">
                    <p class="text-lg font-semibold">Oder Summary</p>
                </div>
                <div style="border-top: 2px solid #ccc;" class="w-full"></div>


                <div class="mt-10 mb-10">
                    <p class="text-base font-semibold mb-2 uppercase">Shipping</p>
                    <select class="border boder-gray-300 px-2 py-3 w-72 outline-none">
                        <option value="Inner city - $ 3,00">Inner city - $ 3,00</option>
                        <option value="Suburban - $ 5,00">Inner city - $ 5,00</option>
                        <option value="Whole Country - $ 10,00">Whole Country - $ 10,00</option>
                    </select>
                </div>

                <div class="mt-10 mb-10">
                    <p class="text-base font-semibold mb-2 uppercase">Promo Code</p>
                    <input class="px-2 py-3 w-72 rounded-lg border border-gray-300 outline-none" type="text" name="" placeholder="Enter your code" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter your code'" value="">
                    <button type="" class="block mt-5 text-lg font-semibold border boder-gray-300 px-2 py-2 bg-red-500 w-28 text-white rounded">Apply</button>
                </div>
                <div style="border-top: 2px solid #ccc;" class="w-full"></div>

                <div class="flex justify-between items-center mt-10 mb-10">
                    <div>
                        <p class="text-lg font-semibold uppercase">Total Cost</p>
                    </div>

                    <div class="flex items-center justify-center">
                        <span class="text-lg font-semibold text-red-500 px-3">$</span>
                        <p id="total_cart" class="text-lg font-semibold text-red-500">null</p> 
                    </div>
                </div>

                <div>
                    <button class="text-center px-2 py-3 text-lg font-semibold rounded bg-green-600 text-white w-full" type=""><a href="/#/checkout">Check Out</a></button>
                </div>
            </div>
          </div>
            </div>
            `}
        `;
    },
    afterRender() {
        NavHeader.afterRender();
        const btns = document.querySelectorAll(".btn");
        btns.forEach((btn) => {
            const { id } = btn.dataset;
            btn.addEventListener("click", () => {
                if (btn.classList.contains("btn-increase")) {
                    increase(id, () => {
                        ReRender(PageCart, "#app");
                    });
                } else if (btn.classList.contains("btn-decrease")) {
                    decrease(id, () => {
                        ReRender(PageCart, "#app");
                    });
                } else {
                    removeItem(id, () => {
                        toastr.success("Bạn xóa sản phẩm thành công");
                        ReRender(PageCart, "#app");
                    });
                }
            });
        });
        let cart = [];
        if (localStorage.getItem("cart")) {
            cart = JSON.parse(localStorage.getItem("cart"));
        }
        let totalCart = 0;
        const totalCartRender = document.querySelector("#total_cart");
        cart.forEach((item) => {
            totalCart += item.total;
        });
        totalCartRender.innerHTML = totalCart;
    },
};
export default PageCart;