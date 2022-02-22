// eslint-disable-next-line no-unused-vars
import $ from "jquery";
import "toastr/build/toastr.min.css";
import toastr from "toastr";
// eslint-disable-next-line no-unused-vars
import validate from "jquery-validation";
import { add } from "../api/orders";
import NavHeader from "../components/header";

const CheckOut = {
    render() {
        let cart = [];
        if (localStorage.getItem("cart")) {
            cart = JSON.parse(localStorage.getItem("cart"));
        }
        return /* html */`
        ${NavHeader.render()}
        <div class="bg-[#eff5f8] block">
            <ul class="text-center p-5">
                <li class="inline-block"><a class="px-1 py-3 text-lg font-medium text-[#8d979d]" href="/">Shopping Cart</a></li> 
                <li class="inline-block"><span class="px-1 text-lg font-medium text-[#8d979d] py-3">></span></li>
                <li class="inline-block"><a  class="px-1 text-lg font-medium text-black py-3" href="/#/cart">CheckOut</a></li>
            </ul>
        </div>
        <div class="max-w-8xl w-full p-6 m-auto">
            <h1 class="flex items-center justify-center font-bold text-blue-600 text-md lg:text-3xl"> Check Out
            </h1>
        <div class="container p-12 mx-auto">
            <div class="flex flex-col w-full px-0 mx-auto md:flex-row">
                <div class="flex flex-col md:w-full">
                    <h2 class="mb-4 font-bold md:text-xl text-heading ">Shipping Address
                    </h2>
                    <form class="justify-center w-full mx-auto" method="post" id="form-check-out" action>
                        <div class="">
                            <div class="w-full lg:w-1/2">
                                    <label for="Fullname" class="block mb-3 text-sm font-semibold text-gray-500">Full
                                        Name</label>
                                    <input name="fullname" id="fullname" type="text" placeholder="Full Name"
                                        class="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600">
                            </div>
                            <div class="mt-4">
                                <div class="w-full">
                                    <label for="Email"
                                        class="block mb-3 text-sm font-semibold text-gray-500">Email</label>
                                    <input name="email" id="email-checkout" type="text" placeholder="Email"
                                        class="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600">
                                </div>
                            </div>
                            <div class="mt-4">
                                <div class="w-full">
                                    <label for="Address"
                                        class="block mb-3 text-sm font-semibold text-gray-500">Address</label>
                                    <textarea
                                        class="w-full px-4 py-3 text-xs border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                                        name="Address" id="Address" cols="20" rows="4" placeholder="Address"></textarea>
                                </div>
                            </div>
                            <div class="space-x-0 lg:flex lg:space-x-4">
                                <div class="w-full lg:w-1/2">
                                    <label for="number"
                                        class="block mb-3 text-sm font-semibold text-gray-500">Phone Number</label>
                                    <input name="number" id="number" type="number" placeholder="Number"
                                        class="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600">
                                </div>
                            </div>
                            <div class="flex items-center mt-4">
                                <label class="flex items-center text-sm group text-heading">
                                    <input type="checkbox"
                                        class="w-5 h-5 border border-gray-300 rounded focus:outline-none focus:ring-1">
                                    <span class="ml-2">Save this information for next time</span></label>
                            </div>
                            <div class="relative pt-3 xl:pt-6"><label for="note"
                                    class="block mb-3 text-sm font-semibold text-gray-500"> Notes
                                    (Optional)</label><textarea name="note" id="note"
                                    class="flex items-center w-full px-4 py-3 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-600"
                                    rows="4" placeholder="Notes for delivery"></textarea>
                            </div>
                            <div class="mt-4">
                                <button
                                    class="w-full px-6 py-2 text-blue-200 bg-blue-600 hover:bg-blue-900">Process</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="flex flex-col w-full ml-0 lg:ml-12 lg:w-2/5">
                    <div class="pt-12 md:pt-0 2xl:ps-4">
                        <h2 class="text-xl font-bold">Order Summary
                        </h2>
                        <div class="mt-8">
                            <div class="flex flex-col space-y-4">
                            ${cart.map((item) => /* html */`
                                <div class="flex space-x-4">
                                        <div>
                                            <img src="${item.image}" alt="image"
                                                class="max-w-full w-full object-cover h-40">
                                        </div>
                                        <div>
                                            <h2 class="text-sm font-semibold">${item.name}</h2>
                                            <p class="text-sm"><span class="font-semibold">Số lượng: </span> ${item.quantity}</p>
                                            <span class="text-red-600">Price</span> $ ${item.pricenew}
                                        </div>
                                    </div>
                            `).join("")}
                            </div>
                        </div>
                        <div class="flex mt-4 border-b border-gray-30 p-3">
                            <h2 class="text-xl font-bold ">ITEMS ${cart.length}</h2>
                        </div>
                        <div
                            class="flex items-center w-full text-xl font-semibold  mt-10 text-heading last:border-b-0 last:text-base last:pb-0">
                            <h2 class="text-xl font-bold">Total:</h2> <span id="total_cart" class="ml-2 text-xl font-bold">null</span> <span class="px-2 text-xl font-bold">$</span></div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        
        `;
    },
    afterRender() {
        $("#form-check-out").validate({
            rules: {
                fullname: {
                    required: true,
                    minlength: 10,
                },
                email: {
                    required: true,
                    email: true,
                },
                Address: {
                    required: true,
                    minlength: 5,
                },
                number: {
                    required: true,
                    minlength: 10,
                },
            },
            messages: {
                fullname: {
                    required: "Vui lòng nhập tên đầy đủ",
                    minlength: "Tên đẩy đủ ít nhất 10 ký tự",
                },
                email: {
                    required: "Vui lòng nhập địa chỉ email hợp lệ",
                },
                Address: {
                    required: "Vui lòng nhập địa chỉ liên hệ",
                    minlength: "Địa chỉ liên hệ ít nhất 5 ký tự",
                },
                number: {
                    required: "Vui lòng nhập số điện thoại",
                    minlength: "Số điện thoại ít nhất 10 ký tự",
                },
            },
            submitHandler: (form) => {
                async function formCheckout() {
                    add({
                        fullname: document.querySelector("#fullname").value,
                        email: document.querySelector("#email-checkout").value,
                        Address: document.querySelector("#Address").value,
                        number: document.querySelector("#number").value,
                        note: document.querySelector("#note").value,
                    });
                    toastr.success("Thanh toán thành công!");
                    // setTimeout(async () => {
                    //     document.location.href = "/admin/category";
                    //     await ReRender(ProductPage, "#app");
                    // }, 2000);
                    form.reset();
                }
                formCheckout();
            },
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
        NavHeader.afterRender();
    },
};
export default CheckOut;