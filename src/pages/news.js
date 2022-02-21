import FooterPage from "../components/footer";
import NavHeader from "../components/header";

const NewPage = {
    render() {
        return /* html */ `
        <div class="max-w-full m-auto">
            ${NavHeader.render()}
            <div class="bg-[#eff5f8] block">
                <ul class="text-center p-5">
                    <li class="inline-block"><a class="px-1 py-3 text-lg font-medium text-[#8d979d]" href="/">Home</a></li> 
                    <li class="inline-block"><span class="px-1 text-lg font-medium text-[#8d979d] py-3">></span></li>
                    <li class="inline-block"><a  class="px-1 text-lg font-medium text-black py-3" href="/news">Blog</a></li>
                </ul>
            </div>

        <div class="max-w-7xl w-full p-6 m-auto mt-20">
            <div style="grid-template-columns: 2fr 1fr" class="grid gap-16">
            <div>
                <div class="border shadow-lg rounded-md mb-20">
                    <div class="relative mb-3">
                        <img src="https://preview.colorlib.com/theme/timezone/assets/img/blog/xsingle_blog_1.png.pagespeed.ic.Vb11bfvxZv.webp" class="max-w-full w-full object-cover" alt="">
                        <div class="absolute top-[80%] left-[5%] px-9 py-5 border bg-red-600 border-none rounded-lg text-white">
                        <h2 class="text-4xl text-center">15</h2>
                        <p class="text-2xl text-center">Jan</p>
                        </div>
                    </div>

                    <div class="p-16">
                        <h2 class="text-2xl font-bold mb-5 hover:text-red-600">
                       <a href="">Google inks pact for new 35-storey office</a></h2>
                        <p class="text-base mb-5 text-[#777] font-thin tracking-wide">That dominion stars lights dominion divide years for fourth have don't stars is that he earth it 
                        first without heaven in place seed it second morning saying.</p>
                        <ul class="block">
                            <li class="inline-block"><a class="hover:text-red-500 text-sm font-normal text-[#999999]" href=""><i class="fas fa-user"></i> Travel, Lifestyle</a></li>
                            <li class="inline-block mx-2"><a class="text-sm font-normal text-[#999999]" href="">|</a></li>
                            <li class="inline-block"><a class="hover:text-red-500 text-sm font-normal text-[#999999]" href=""><i class="fas fa-comments"></i> 03 Comments</a></li>
                        </ul>
                    </div>
                </div>

                <div class="border shadow-lg rounded-md mb-20">
                    <div class="relative mb-3">
                        <img src="https://preview.colorlib.com/theme/timezone/assets/img/blog/single_blog_2.png.webp" class="max-w-full w-full object-cover" alt="">
                        <div class="absolute top-[80%] left-[5%] px-9 py-5 border bg-red-600 border-none rounded-lg text-white">
                        <h2 class="text-4xl text-center">15</h2>
                        <p class="text-2xl text-center">Jan</p>
                        </div>
                    </div>

                    <div class="p-16">
                        <h2 class="text-2xl font-bold mb-5 hover:text-red-600">
                       <a href="">Google inks pact for new 35-storey office</a></h2>
                        <p class="text-base mb-5 text-[#777] font-thin tracking-wide">That dominion stars lights dominion divide years for fourth have don't stars is that he earth it 
                        first without heaven in place seed it second morning saying.</p>
                        <ul class="block">
                            <li class="inline-block"><a class="hover:text-red-500 text-sm font-normal text-[#999999]" href=""><i class="fas fa-user"></i> Travel, Lifestyle</a></li>
                            <li class="inline-block mx-2"><a class="text-sm font-normal text-[#999999]" href="">|</a></li>
                            <li class="inline-block"><a class="hover:text-red-500 text-sm font-normal text-[#999999]" href=""><i class="fas fa-comments"></i> 03 Comments</a></li>
                        </ul>
                    </div>
                </div>

                <div class="border shadow-lg rounded-md mb-20">
                    <div class="relative mb-3">
                        <img src="https://preview.colorlib.com/theme/timezone/assets/img/blog/single_blog_3.png.webp" class="max-w-full w-full object-cover" alt="">
                        <div class="absolute top-[80%] left-[5%] px-9 py-5 border bg-red-600 border-none rounded-lg text-white">
                        <h2 class="text-4xl text-center">15</h2>
                        <p class="text-2xl text-center">Jan</p>
                        </div>
                    </div>

                    <div class="p-16">
                        <h2 class="text-2xl font-bold mb-5 hover:text-red-600">
                       <a href="">Google inks pact for new 35-storey office</a></h2>
                        <p class="text-base mb-5 text-[#777] font-thin tracking-wide">That dominion stars lights dominion divide years for fourth have don't stars is that he earth it 
                        first without heaven in place seed it second morning saying.</p>
                        <ul class="block">
                            <li class="inline-block"><a class="hover:text-red-500 text-sm font-normal text-[#999999]" href=""><i class="fas fa-user"></i> Travel, Lifestyle</a></li>
                            <li class="inline-block mx-2"><a class="text-sm font-normal text-[#999999]" href="">|</a></li>
                            <li class="inline-block"><a class="hover:text-red-500 text-sm font-normal text-[#999999]" href=""><i class="fas fa-comments"></i> 03 Comments</a></li>
                        </ul>
                    </div>
                </div>

                <div class="border shadow-lg rounded-md mb-20">
                    <div class="relative mb-3">
                        <img src="https://preview.colorlib.com/theme/timezone/assets/img/blog/single_blog_4.png.webp" class="max-w-full w-full object-cover" alt="">
                        <div class="absolute top-[80%] left-[5%] px-9 py-5 border bg-red-600 border-none rounded-lg text-white">
                        <h2 class="text-4xl text-center">15</h2>
                        <p class="text-2xl text-center">Jan</p>
                        </div>
                    </div>

                    <div class="p-16">
                        <h2 class="text-2xl font-bold mb-5 hover:text-red-600">
                       <a href="">Google inks pact for new 35-storey office</a></h2>
                        <p class="text-base mb-5 text-[#777] font-thin tracking-wide">That dominion stars lights dominion divide years for fourth have don't stars is that he earth it 
                        first without heaven in place seed it second morning saying.</p>
                        <ul class="block">
                            <li class="inline-block"><a class="hover:text-red-500 text-sm font-normal text-[#999999]" href=""><i class="fas fa-user"></i> Travel, Lifestyle</a></li>
                            <li class="inline-block mx-2"><a class="text-sm font-normal text-[#999999]" href="">|</a></li>
                            <li class="inline-block"><a class="hover:text-red-500 text-sm font-normal text-[#999999]" href=""><i class="fas fa-comments"></i> 03 Comments</a></li>
                        </ul>
                    </div>
                </div>

                <div class="border shadow-lg rounded-md mb-20">
                    <div class="relative mb-3">
                        <img src="https://preview.colorlib.com/theme/timezone/assets/img/blog/single_blog_5.png" class="max-w-full w-full object-cover" alt="">
                        <div class="absolute top-[80%] left-[5%] px-9 py-5 border bg-red-600 border-none rounded-lg text-white">
                        <h2 class="text-4xl text-center">15</h2>
                        <p class="text-2xl text-center">Jan</p>
                        </div>
                    </div>

                    <div class="p-16">
                        <h2 class="text-2xl font-bold mb-5 hover:text-red-600">
                       <a href="">Google inks pact for new 35-storey office</a></h2>
                        <p class="text-base mb-5 text-[#777] font-thin tracking-wide">That dominion stars lights dominion divide years for fourth have don't stars is that he earth it 
                        first without heaven in place seed it second morning saying.</p>
                        <ul class="block">
                            <li class="inline-block"><a class="hover:text-red-500 text-sm font-normal text-[#999999]" href=""><i class="fas fa-user"></i> Travel, Lifestyle</a></li>
                            <li class="inline-block mx-2"><a class="text-sm font-normal text-[#999999]" href="">|</a></li>
                            <li class="inline-block"><a class="hover:text-red-500 text-sm font-normal text-[#999999]" href=""><i class="fas fa-comments"></i> 03 Comments</a></li>
                        </ul>
                    </div>
                </div>

                <div class="text-center">
                    <ul class="block">
                        <li class="inline-block px-4 py-2 border"><a class="text-[#777]" href="#"><i class="fas fa-angle-left"></i></a></li>
                        <li class="inline-block px-4 py-2 border"><a class="text-[#777]" href="#">1</a></li>
                        <li class="inline-block px-4 py-2 border"><a class="text-[#777]" href="#">2</a></li>
                        <li class="inline-block px-4 py-2 border"><a class="text-[#777]" href="#"><i class="fas fa-angle-right"></i></a></li>
                    </ul>
                </div>
            </div>
                <div>
                    <div class="mb-14 text-center bg-[#fbf9ff] py-10"> 
                        <div class="relative flex justify-center">
                        <input type="" placeholder="Search Keyword" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Search Keyword'" class="text-sm mb-5 w-[260px] px-5 h-[44px] outline-none border border-gray-300" name="" value="">
                        <span class="absolute cursor-pointer block left-[330px] bg-[#ff2020] text-white px-3.5 py-2.5"><i class="fas fa-search"></i></span>
                        </div>
                        <div class="cursor-pointer font-['Josefin Sans','sans-serif'] py-3 px-[88px] text-white bg-[#ff2020] uppercase inline-block">
                        <a class="" herf="">Shop Now</a>
                        </div>     
                    </div>

                    <div class="bg-[#fbf9ff] py-6 px-16 mb-14">
                        <h3 class="text-2xl font-semibold border-b mb-6 py-3">Category</h3>
                        <ul>
                            <li class="py-4 border-b"><a class="text-base hover:text-red-500 leading-5 text-[#888888]" href="">Resaurant food (37)</a></li>
                            <li class="py-4 border-b"><a class="text-base hover:text-red-500 leading-5 text-[#888888]" href="">Travel news (10)</a></li>
                            <li class="py-4 border-b"><a class="text-base leading-5 hover:text-red-500 text-[#888888]" href="">Modern technology (03)</a></li>
                            <li class="py-4 border-b"><a class="text-base leading-5 hover:text-red-500 text-[#888888]" href="">Product (11)</a></li>
                            <li class="py-4 border-b"><a class="text-base leading-5 hover:text-red-500 text-[#888888]" href="">Inspiration (21)</a></li>
                            <li class="py-4"><a class="text-base leading-5 hover:text-red-500 text-[#888888]" href="">Health Care (21)</a></li>
                        </ul>
                    </div>

                    <div class="bg-[#fbf9ff] py-6 px-16 mb-14">
                        <h3 class="text-2xl font-semibold border-b mb-6 py-3">Recent Post</h3>
                            <div style="grid-template-columns: 1fr 2fr" class="grid grid-cols-2 items-center mb-5">
                                <div>
                                    <img src="https://preview.colorlib.com/theme/timezone/assets/img/post/post_1.png.webp" class="object-cover max-w-full" alt="">
                                </div>

                                <div class="justify-center ml-3">
                                    <h4 class="font-medium mb-2 hover:text-red-500 w-full"><a href="">From life was you fish...</a></h4>
                                    <p class="text-sm text-[#888888] font-medium">January 12, 2019</p>
                                </div>
                            </div>

                            <div style="grid-template-columns: 1fr 2fr" class="grid items-center grid-cols-2 mb-5">
                                <div>
                                    <img src="https://preview.colorlib.com/theme/timezone/assets/img/post/post_2.png.webp" class="object-cover max-w-full" alt="">
                                </div>

                                <div class="justify-center ml-3">
                                    <h4 class="font-medium justify-center mb-2 hover:text-red-500"><a href="">The Amazing Hubble</a></h4>
                                    <p class="text-sm text-[#888888] font-medium">02 Hours ago</p>
                                </div>
                            </div>

                            <div style="grid-template-columns: 1fr 2fr" class="grid items-center grid-cols-2 mb-5">
                                <div>
                                    <img src="https://preview.colorlib.com/theme/timezone/assets/img/post/post_3.png.webp" class="object-cover max-w-full" alt="">
                                </div>

                                <div class="justify-center ml-3">
                                    <h4 class="font-medium mb-2 hover:text-red-500"><a href="">Astronomy Or Astrology</a></h4>
                                    <p class="text-sm text-[#888888] font-medium">03 Hours ago</p>
                                </div>
                            </div>

                            <div style="grid-template-columns: 1fr 2fr" class="grid items-center grid-cols-2 mb-5">
                                <div>
                                    <img src="https://preview.colorlib.com/theme/timezone/assets/img/post/post_4.png.webp" class="object-cover max-w-full" alt="">
                                </div>

                                <div class="justify-center ml-3">
                                    <h4 class="font-medium mb-2 hover:text-red-500"><a href="">Asteroids telescope</a></h4>
                                    <p class="text-sm text-[#888888] font-medium">04 Hours ago</p>
                                </div>
                            </div>
                    </div>
                    <div class="bg-[#fbf9ff] py-6 px-16 mb-14">
                    <h3 class="text-2xl font-semibold border-b mb-6 py-3">Tag Clouds</h3>
                        <div class="flex">
                            <div>
                                <p class="border hover:bg-[#ff2020] hover:text-white cursor-pointer px-4 text-sm text-[#888888] mb-2 py-1 bg-white">Project</p>
                                <p class="border hover:bg-[#ff2020] hover:text-white cursor-pointer px-4 text-sm text-[#888888] mb-2 py-1 bg-white">Travel</p>
                                <p class="border hover:bg-[#ff2020] hover:text-white cursor-pointer px-4 text-sm text-[#888888] mb-2 py-1 bg-white">Design</p>
                            </div>

                            <div class="px-3">
                                <p class="border hover:bg-[#ff2020] hover:text-white cursor-pointer px-4 text-sm text-[#888888] mb-2 py-1 bg-white">Go Shopp</p>
                                <p class="border hover:bg-[#ff2020] hover:text-white cursor-pointer px-4 text-sm text-[#888888] py-1 mb-2 bg-white">Restaurant</p>
                                <p class="border hover:bg-[#ff2020] hover:text-white cursor-pointer px-4 text-sm text-[#888888] py-1 mb-2 bg-white">Illustration</p>
                            </div>

                            <div>
                                <p class="border hover:bg-[#ff2020] hover:text-white cursor-pointer px-4 text-sm text-[#888888] mb-2 py-1 bg-white">Technology</p>
                                <p class="border hover:bg-[#ff2020] hover:text-white cursor-pointer px-4 text-sm text-[#888888] mb-2 py-1 bg-white">Life style</p>
                            </div>
                        </div>
                    </div>
                    <div class="bg-[#fbf9ff] py-6 px-16 mb-14">
                        <h3 class="text-2xl font-semibold border-b mb-6 py-3">Instagram Feeds</h3>
                            <div class="grid grid-cols-3 gap-4">
                                <div>
                                    <img src="https://preview.colorlib.com/theme/timezone/assets/img/post/post_5.png.webp" class="mb-4" alt="">
                                    <img src="https://preview.colorlib.com/theme/timezone/assets/img/post/post_6.png.webp" class="mb-4" alt="">
                                </div>

                                <div>
                                    <img src="https://preview.colorlib.com/theme/timezone/assets/img/post/post_7.png.webp"  class="mb-4" alt="">
                                    <img src="https://preview.colorlib.com/theme/timezone/assets/img/post/post_8.png.webp"  class="mb-4" alt="">
                                </div>

                                <div>
                                    <img src="https://preview.colorlib.com/theme/timezone/assets/img/post/post_9.png.webp"  class="mb-4" alt="">
                                    <img src="https://preview.colorlib.com/theme/timezone/assets/img/post/post_10.png.webp" class="mb-4" alt="">
                                </div>
                            </div>
                    </div>

                    <div class="bg-[#fbf9ff] py-6 px-16 mb-14">
                        <h3 class="text-2xl font-semibold border-b mb-6 py-3">Newsletter</h3>
                        <input type="" placeholder="Enter Email" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Email'" class="text-sm mb-5 w-[310px] px-5 h-[44px] outline-none border border-gray-300" name="" value="">
                        <div class="hover:bg-white hover:text-black hover:border hover:border-red-500 cursor-pointer font-['Josefin Sans','sans-serif'] py-3 px-[113px] text-white bg-[#ff2020] leading-0 inline-block boder-0 relative">
                        <a class="uppercase" herf="">Subscribe</a>
                        </div>     
                    </div>    

                </div>
            </div>
        </div>
        ${FooterPage.render()}
        `;
    },
    afterRender() {
        NavHeader.afterRender();
    },
};
export default NewPage;