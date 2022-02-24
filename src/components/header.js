import { ReRender } from "../utils/Rerender";

// let param = null;
const NavHeader = {
    render() {
        let cart = [];
        if (localStorage.getItem("cart")) {
            cart = JSON.parse(localStorage.getItem("cart"));
        }
        return /* html */ `
        <header id="header">
            <div class="px-3">
                <div class="w-full px-3 py-0 m-auto">
                    <div class = "flex items-center content-center justify-between flex-wrap">
                        <div>
                            <img src="https://preview.colorlib.com/theme/timezone/assets/img/logo/xlogo2_footer.png.pagespeed.ic.WC60eOreUW.webp" alt="">
                        </div>
                        
                        <div class="block">
                            <ul class="list-none m-0 p-0">
                                <li class="inline-block relative z-10"><a class ="text-[#141517] text-lg font-semibold block font-['Josefin Sans','sans-serif'] px-5 py-10 capitalize hover:text-red-500 transition-all delay-200 ease-out outline-none cursor-pointer" href ="/">Home</a></li>
                                <li class="inline-block relative z-10"><a class ="text-[#141517] text-lg font-semibold block font-['Josefin Sans','sans-serif'] px-5 py-10 capitalize hover:text-red-500 transition-all delay-200 ease-out outline-none cursor-pointer" href ="/#/product">Shop</a></li>
                                <li class="inline-block relative z-10"><a class ="text-[#141517] text-lg font-semibold block font-['Josefin Sans','sans-serif'] px-5 py-10 capitalize hover:text-red-500 transition-all delay-200 ease-out outline-none cursor-pointer" href ="/#/about">About</a></li>
                                <li class="inline-block relative z-10"><a class ="text-[#141517] text-lg font-semibold block font-['Josefin Sans','sans-serif'] px-5 py-10 capitalize hover:text-red-500 transition-all delay-200 ease-out outline-none cursor-pointer" href ="/#/news">Blog</a></li>
                                <li class="inline-block relative z-10"><a class ="text-[#141517] text-lg font-semibold block font-['Josefin Sans','sans-serif'] px-5 py-10 capitalize hover:text-red-500 transition-all delay-200 ease-out outline-none cursor-pointer" href ="/#/contact">Contact</a></li>
                            </ul>
                        </div>

                        <div>
                            <ul class="list-none items-center m-0 p-0 flex justify-between">
                                ${localStorage.getItem("user") ? /* html */`
                                    <li>
                                    <div class="inline-block">
                                    <span class="text-black text-base font-semibol">
                                         <i class="fa-solid fa-user-check"></i>
                                    <span>
                                        <a href="" id="email" class="px-3"></a></span> 
                                    <span>
                                    <a href="" id="logout" class="hover:text-red-500 cursor-pointer"><i class="fa-solid fa-arrow-right-from-bracket"></i> Logout</a>
                                    </span> 
                                    </span>
                                    </div>
                                    </li>
                                ` : /* html */`
                                    <li>
                                    <div class="inline-block">
                                    <span class="text-black text-base font-semibol px-4 py-3">
                                    <i class="fas fa-user"></i> 
                                    <span>
                                    <a href="/#/signin" class="hover:text-red-500 cursor-pointer">Log In</a></span> 
                                    <span>/</span> 
                                    <span>
                                    <a href="/#/signup" class="hover:text-red-500 cursor-pointer">Register</a>
                                    </span> 
                                    </span>
                                    </div>
                                    </li>
                                `}

                                <li class="list-item"><a href ="/#/cart">
                                <span class="text-black relative text-lg font-semibol px-4 py-3 cursor-pointer">
                                      <i class="fas fa-shopping-cart"></i>
                                      <div id="cartID" class="boder absolute border-red-500 bg-red-500 rounded-full px-2 py-1 -top-[2px] right-[5px] text-white text-xs text-center">${cart.length}</div>
                                </span></a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        
        `;
    },
    afterRender() {
        const emailHeader = document.querySelector("#email");
        const cart = document.querySelector("#cartID");

        if (emailHeader) {
            emailHeader.innerHTML = JSON.parse(localStorage.getItem("user")).email;
        }
        const logout = document.querySelector("#logout");
        if (logout) {
            logout.addEventListener("click", () => {
                localStorage.removeItem("user");
                ReRender(NavHeader, "#header");
            });
        }

        if (cart) {
            cart.innerHTML = JSON.parse(localStorage.getItem("cart")).length;
        }
    },
};
export default NavHeader;