const Banner = {
    render() {
        return /* html */ `
            <div class="w-full p-7 m-auto bg-[#f0f0f2]">
                <div class="flex -m-4 justify-between items-center">
                    <div class="relative w-full p-32 m-h-[2%]">
                        <div class ="overflow-hidden">
                            <h1 class="mb-9 font-bold text-7xl font-['Josefin Sans','sans-serif'] mt-0 text-[#0b1c39] not-italic">Select Your New Perfect Style</h1>   
                            <p class="mb-12 leading-5 font-normal text-[#212025] text-base">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat is aute irure.</p>     
                            <div class="hover:bg-red-500 cursor-pointer delay-150 duration-200 ease-in-out font-['Josefin Sans','sans-serif'] py-4 px-7 text-white bg-[#4a4a4b] font-lg uppercase leading-0 inline-block boder-0 relative tracking-wide">
                                <a class="transition-colors delay-300 ease-linear" herf="">Shop Now</a>
                            </div>                    
                        </div>
                    </div>

                    <div class="relative w-full p-5 m-h-[2%] block">
                        <div class="relative">
                            <img src="https://picsum.photos/300/600" class="m-auto align-middle border-none" alt="">
                        </div>
                    </div>
                </div>                
            </div>
        `;
    },
};
export default Banner;