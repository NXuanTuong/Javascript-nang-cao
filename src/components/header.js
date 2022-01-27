const NavHeader = {
    render() {
        return /* html */ `
        <header>
            <div class="px-3">
                <div class="w-full px-3 py-0 m-auto">
                    <div class = "flex items-center content-center justify-between flex-wrap">
                        <div>
                            <img src="https://preview.colorlib.com/theme/timezone/assets/img/logo/xlogo2_footer.png.pagespeed.ic.WC60eOreUW.webp" alt="">
                        </div>
                        
                        <div class="block">
                            <ul class="list-none m-0 p-0">
                                <li class="inline-block relative z-10"><a class ="text-[#141517] text-lg font-semibold block font-['Josefin Sans','sans-serif'] px-5 py-10 capitalize hover:text-red-500 transition-all delay-200 ease-out outline-none cursor-pointer" href ="/">Home</a></li>
                                <li class="inline-block relative z-10"><a class ="text-[#141517] text-lg font-semibold block font-['Josefin Sans','sans-serif'] px-5 py-10 capitalize hover:text-red-500 transition-all delay-200 ease-out outline-none cursor-pointer" href ="/product">Shop</a></li>
                                <li class="inline-block relative z-10"><a class ="text-[#141517] text-lg font-semibold block font-['Josefin Sans','sans-serif'] px-5 py-10 capitalize hover:text-red-500 transition-all delay-200 ease-out outline-none cursor-pointer" href ="/about">About</a></li>
                                <li class="inline-block relative z-10"><a class ="text-[#141517] text-lg font-semibold block font-['Josefin Sans','sans-serif'] px-5 py-10 capitalize hover:text-red-500 transition-all delay-200 ease-out outline-none cursor-pointer" href ="/news">Blog</a></li>
                                <li class="inline-block relative z-10"><a class ="text-[#141517] text-lg font-semibold block font-['Josefin Sans','sans-serif'] px-5 py-10 capitalize hover:text-red-500 transition-all delay-200 ease-out outline-none cursor-pointer" href ="/contact">Contact</a></li>
                            </ul>
                        </div>

                        <div>
                            <ul class="list-none items-center m-0 p-0 flex justify-between">
                                <li class="list-item"><a href ="">
                                    <form class="bg-gray-300 border rounded-md py-[8px] px-[7px] duration-1000 my-2">
                                        <button type=""><i class="bi bi-search"></i></button>
                                        <input type="" placeholder="Men's watch..." class="border-none bg-transparent w-[250px] px-2 outline-none" name="" value="">
                                    </form>
                                </li>
                                <li>
                                <div class="inline-block">
                                <span class="text-black text-base font-semibol px-4 py-3">
                                  <i class="fas fa-user"></i> 
                                  <span>
                                 <a href="/login" class="hover:text-red-500 cursor-pointer">Log In</a></span> 
                                 <span>/</span> 
                                 <span>
                                  <a href="/logout" class="hover:text-red-500 cursor-pointer" >Register</a>
                                 </span> 
                                </span>
                                </div>
                                </li>
                                <li class="list-item"><a href ="">
                                <span class="text-black text-lg font-semibol px-4 py-3 hover:text-red-500 cursor-pointer">
                                <i class="fas fa-shopping-cart"></i>
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
};
export default NavHeader;