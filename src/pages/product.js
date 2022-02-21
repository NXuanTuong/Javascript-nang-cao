import { categoriesAll } from "../api/category";
import { productAll } from "../api/products";
import FooterPage from "../components/footer";
import NavHeader from "../components/header";
import { ReRender } from "../utils/Rerender";

let param = null;
const ProductPage = {
    async render() {
        const { data } = await productAll(param);
        const getCate = await categoriesAll();
        const dataCate = getCate.data;
        return /* html */ `
        <div class="max-w-full m-auto">
            ${NavHeader.render()}

            <div class="flex justify-between px-[123px] bg-[#eff5f8] items-center">
                <div class="block">
                    <ul class="text-center p-5">
                        <li class="inline-block"><a class="px-1 py-3 text-lg font-medium text-[#8d979d]" href="/">Home</a></li> 
                        <li class="inline-block"><span class="px-1 text-lg font-medium text-[#8d979d] py-3">></span></li>
                        <li class="inline-block"><a  class="px-1 text-lg font-medium text-black py-3" href="/product">Shop</a></li>
                    </ul>
                </div>

                <div class="flex items-center">
                    <div>
                        <p>Showing a single result</p>
                    </div>

                    <div class="mx-5">
                        <select class="px-3 py-2 shadow-md">
                            <option value="Thứ tự mặc định">Default order</option>
                            <option value="Thứ tự mặc định">Order by popularity</option>
                            <option value="Thứ tự mặc định">Order by rating score</option>
                            <option value="Thứ tự mặc định">Latest</option>
                            <option value="Thứ tự mặc định">Order by price: low to high</option>
                            <option value="Thứ tự mặc định">Order by price: high to low</option>
                        </select>
                    </div>
                </div>
            </div>

            <div class="max-w-7xl w-full p-6 m-auto mt-16">
                <div style="grid-template-columns: 1fr 3fr" class="grid grid-cols-2 gap-16">
                    <div>
                        <div class="mb-16">
                            <h3 class="uppercase text-lg font-medium mb-5">PRODUCT PORTFOLIO</h3>
                            
                            <div class="border p-5 bg-[#fbf9ff] shadow-md">
                            ${dataCate.map((catedata) => /* html */ `
                                <ul>
                                    <li getCate="${catedata.id}" class="mb-2 border-b py-2"><a class="text-base cursor-pointer hover:text-red-500 font-semibold leading-4">${catedata.nameCate}</a></li> 
                                </ul>
                            `).join("")}
                                
                            </div>
                        </div>

                        <div class="mb-16">
                            <div>
                                <h3 class="uppercase text-lg font-medium mb-5">Filter by price</h3>

                                <input type="range" class="w-full mb-4" name="" value="">

                                <div class="grid grid-cols-2 gap-16">
                                    <div>
                                        <button class="border px-4 text-lg font-semibold py-1 rounded-full bg-red-400 hover:bg-red-500 text-white" type="">Filter</button>
                                    </div>

                                    <div>
                                        <div class="flex">
                                            <h4 >Price:</h4>
                                            <p class="mx-1 font-semibold"><span>$</span> 154.75</p>
                                        </div>
                                        <div class="flex">
                                            <span class="mx-3"><i class="fas fa-arrows-alt-h"></i></span>
                                            <p class="font-semibold"><span>$</span> 200.00</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mb-16">
                            <div>
                                <h3 class="uppercase text-lg font-medium mb-5">Most interested</h3>
                            </div>

                            <div class="border p-5 bg-[#fbf9ff] shadow-md">
                                <div style="grid-template-columns: 1fr 2fr" class="grid grid-cols-2 gap-3 mb-4 border-b py-4">
                                    <div>
                                        <img src="http://mauweb.monamedia.net/rolex/wp-content/uploads/2018/11/product-11_large-100x100.jpg" class="w-full" alt="">
                                    </div>

                                    <div>
                                        <p class="text-sm">BULOVA CORPORATION <p class="text-sm overflow-ellipsis w-40 whitespace-nowrap overflow-hidden">AUTOMATIC MEN'S WATCH 49MM</p></p>
                                        <del class="block"><span>$</span>
                                        <span class="text-red-300 text-sm">130.00
                                        </span></del><span>$</span>
                                        <span class="font-semibold">100.00
                                        </span>
                                    </div> 
                                </div>
        
                                <div style="grid-template-columns: 1fr 2fr" class="grid grid-cols-2 gap-3 mb-4 border-b py-2">
                                    <div>
                                        <img src="http://mauweb.monamedia.net/rolex/wp-content/uploads/2018/11/product6_20a32b81-5765-41f0-96da-606bb1ce5ed8_large-100x100.jpg" class="w-full" alt="">
                                    </div>

                                    <div>
                                        <p class="text-sm">MICHAEL KORS BRECKEN <p class="text-sm overflow-ellipsis w-40 whitespace-nowrap overflow-hidden">CHRONOGRAPH WATCH 44MM </p></p>
                                        <del class="block"><span>$</span>
                                        <span class="text-red-300 text-sm">150.000
                                        </span></del>
                                        <span>$</span>
                                        <span class="font-semibold">142.300
                                        </span>
                                    </div> 
                                </div>

                                <div style="grid-template-columns: 1fr 2fr" class="grid grid-cols-2 gap-3 mb-4 border-b py-2">
                                    <div>
                                        <img src="http://mauweb.monamedia.net/rolex/wp-content/uploads/2018/11/product-23_large-100x100.jpg" class="w-full" alt="">
                                    </div>

                                    <div>
                                        <p class="text-sm">OMEGA SEAMASTER 39MM</p>
                                            <del class="block"><span>$</span>
                                            <span class="text-red-300 text-sm">180.000
                                            </span></del>
                                            <span>$</span>
                                            <span class="font-semibold">155.500
                                            </span>
                                            </span>
                                    </div> 
                                </div>

                                <div style="grid-template-columns: 1fr 2fr" class="grid grid-cols-2 gap-3 mb-4 py-2">
                                    <div>
                                        <img src="http://mauweb.monamedia.net/rolex/wp-content/uploads/2018/11/product-23_large-100x100.jpg" class="w-full" alt="">
                                    </div>

                                    <div>
                                        <p class="text-sm">TISSOT LE LOCLE T006 <p class="text-sm overflow-ellipsis w-40 whitespace-nowrap overflow-hidden">AUTO WATCH 39MM</p></p>
                                        <del class="block"><span>$</span>
                                            <span class="text-red-300 text-sm">280.000
                                            </span></del>
                                            <span>$</span>
                                            <span class="font-semibold">275.500
                                            </span>
                                            </span>
                                    </div> 
                                </div>
                                
                            </div>
                        </div>

                        <div class="mb-16">
                            <h3 class="uppercase text-lg font-medium mb-5">Product photo gallery</h3>

                            <div class="border p-5 bg-[#fbf9ff] shadow-md">
                                <div class="grid grid-cols-2 gap-3">
                                    <div>
                                        <img src="http://mauweb.monamedia.net/rolex/wp-content/uploads/2018/11/product-23_large-100x100.jpg" class="mb-4 w-full" alt="">
                                        <img src="http://mauweb.monamedia.net/rolex/wp-content/uploads/2018/11/product6_20a32b81-5765-41f0-96da-606bb1ce5ed8_large-100x100.jpg" class="mb-4 w-full" alt="">
                                    </div>

                                    <div>
                                        <img src="http://mauweb.monamedia.net/rolex/wp-content/uploads/2018/11/15-100x100.jpg" class="mb-4 w-full"  alt="">
                                        <img src="http://mauweb.monamedia.net/rolex/wp-content/uploads/2018/11/product-11_large-100x100.jpg" class="mb-4 w-full" alt="">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- The End Grid-1 -->

                    <!-- Start Grid-2 -->
                <div>
                    <div>
                        <div class="grid grid-cols-3 mb-5 gap-10">
                        ${data.map((products) => /* html */`
                                <div class="px-3 py-7 shadow hover:shadow-lg product_item">
                                <div class="relative overflow-hidden">
                                        <img src="${products.image}" class="object-cover w-full h-64" alt="">
                                            <span class="absolute top-[5%] px-5 rounded-2xl text-white bg-red-300 py-1 border -left-[5%]"><p>20%</p></span>
                                            <span class="text-black icon_heart cursor-pointer absolute text-2xl -top-[2%] right-[9px] hover:text-red-500"><i class="bi bi-heart"></i></span>
                                            <div class="absolute top-[47%] -left-[5%] mx-5 feedback_item_product">
                                            <ul>
                                                <li class="text-yellow-300 cursor-pointer"><i class="bi bi-star-fill"></i></li>
                                                <li class="text-yellow-300 cursor-pointer"><i class="bi bi-star-fill"></i></li>
                                                <li class="text-yellow-300 cursor-pointer"><i class="bi bi-star-fill"></i></li>
                                                <li class="text-yellow-300 cursor-pointer"><i class="bi bi-star-fill"></i></li>
                                                <li class="cursor-pointer"><i class="bi bi-star"></i></li>
                                            </ul>
                                        </div>
                                        <div class="hover:bg-red-500 btn_add_cart cursor-pointer top-[80%] left-[20%] delay-150 duration-200 ease-in-out py-1 px-3 rounded-md text-red-500 hover:text-white border border-red-400 font-semibold uppercase absolute">
                                        <a herf="">Add to Cart <span><i class="fas fa-shopping-cart"></i></span></a>
                                        </div>
                                </div>

                                <div>
                                    <h3 class="text-base mb-2 font-semibold text-center overflow-ellipsis w-75 whitespace-nowrap overflow-hidden"><a href="/#/details_product/${products.id}">${products.name}</a></h3>
                                    <div class="flex justify-center items-center">
                                        <del class="text-red-300"><span>$</span>${products.priceold}</del>
                                        <p class="px-2 font-semibold text-lg"><span>$</span>${products.pricenew}</p>
                                    </div>
                                </div>
                            </div>
                        `).join("")}
                        </div>
                        </div>
                            <div class="text-center mt-12">
                                <ul class="block">
                                    <li class="inline-block px-4 py-2 border"><a class="text-[#777]" href="#"><i class="fas fa-angle-left"></i></a></li>
                                    <li class="inline-block px-4 py-2 border bg-red-300 cursor-pointer"><a class="text-[#000]">1</a></li>
                                    <li class="inline-block px-4 py-2 border"><a class="text-[#777]">2</a></li>
                                    <li class="inline-block px-4 py-2 border"><a class="text-[#777]">3</a></li>
                                    <li class="inline-block px-4 py-2 border"><a class="text-[#777]"><i class="fas fa-angle-right"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        </div>
                        </div>
                        </div>
                        </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
    </div>   
    </div>   
    </div>
            ${FooterPage.render()}
    </div>
        `;
    },
    afterRender() {
        NavHeader.afterRender();
        const btnsCate = document.querySelectorAll("[getCate]");
        btnsCate.forEach((btnCate) => {
            btnCate.addEventListener("click", (e) => {
                e.preventDefault();

                param = `category_like=${btnCate.getAttribute("getCate")}`;

                if (param === "") param = null;
                ReRender(ProductPage, "#app");
            });
        });
    },
};
export default ProductPage;