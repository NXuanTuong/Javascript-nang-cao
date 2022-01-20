import FooterPage from "../components/footer";
import NavHeader from "../components/header";

const AboutPage = {
    render() {
        return /* html */`
        <div class="max-w-full m-auto">
            ${NavHeader.render()}
            
            <div class="bg-[#eff5f8] block">
                <ul class="text-center p-5">
                    <li class="inline-block"><a class="px-1 py-3 text-lg font-medium text-[#8d979d]" href="/">Home</a></li> 
                    <li class="inline-block"><span class="px-1 text-lg font-medium text-[#8d979d] py-3">></span></li>
                    <li class="inline-block"><a  class="px-1 text-lg font-medium text-[#8d979d] py-3" href="/about">About</a></li>
                </ul>
            </div>

        <div class="max-w-7xl w-full p-6 m-auto mt-20">
            <div class="grid grid-cols-2 gap-5 items-center">
                <div>
                    <img src="http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/about-us_bg.jpg" class="w-11/12" alt="">
                </div>

                <div>
                    <h3 class="text-4xl mb-5 font-bold">Giới thiệu về Watch Time Zone</h3>
                    <p class="text-base text-[#8d979d]">“Cùng với sự phát triển không ngừng của thời trang thế giới, rất nhiều thương hiệu cho ra đời những mẫu đồng hồ nam chính 
                    hãng đa dạng về phong cách, kiểu dáng, màu sắc, kích cỡ… Một chiếc đồng hồ nam cao cấp chính hãng khắc họa một giá trị đích 
                    thực khi nói đến phụ kiện xa xỉ dành cho phái mạnh. Hiện nay, đồng hồ là phụ kiện thời trang thiết yếu đối với những người 
                    đàn ông hiện đại ngày nay. Trên cổ tay của những người đàn ông thành đạt luôn dành vị trí cho một chiếc đồng hồ nam cao cấp.”</p>
                </div>
            </div>
        </div>

        <div class="relative mt-20 text-center">
            <img src="https://i.imgur.com/jvob5p5.jpg" class="w-full object-cover h-96" alt="">
            <p class="text-lg font-thin leading-7 tracking-wide text-red-600 absolute top-[48%] left-[38%] -translate-y-40">Giảm giá 20% các sản phẩm thời gian có hạn<br>
            <p class="text-5xl font-bold text-white absolute top-[55%] left-[23%] -translate-y-40">Xu hướng phong cách mới Time Zone <br>
            <span class="text-base font-thin"> Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna <br>
            aliqua. Quis ipsum suspendisse ultrices gravida.!</span>
            </p>
            <div class=" border-2 rounded-md border-red-500 -translate-y-32 hover:bg-[#ff2020] cursor-pointer delay-150 duration-200 ease-in-out py-4 px-10 text-white font-lg uppercase leading-0 inline-block boder-0 relative tracking-wide">
                <a class="transition-colors delay-300 ease-linear" herf="">Tìm hiểu thêm</a>
            </div> 
    </div>

        <div class="max-w-7xl w-full p-6 m-auto mt-16">
            <div class="grid grid-cols-2 gap-5 items-center">
                <div>
                    <h3 class="text-4xl mb-5 font-bold">Nổi bật về Watch Time Zone</h3>
                    <p class="text-base text-[#8d979d]">“Đồng hồ không chỉ là dụng cụ để xem thời gian mà đồng hồ còn là một món đồ trang sức. Ngày nay, vai trò “trang sức” của đồng hồ càng được nhấn mạnh. Thậm chí đồng hồ chính là món trang sức thể hiện được rõ nét nhất cá tính của người mang nó. Bộ sưu tập đồng hồ thời trang trẻ sau đây là một minh chứng.
                    ”</p>
                </div>
                <div>
                    <img src="https://cdn.tgdd.vn/Files/2019/08/27/1192123/top-6-thuong-hieu-dong-ho-cua-my-noi-tieng-tren-the-gioi-6.jpg" class="w-11/12" alt="">
                </div>
            </div>
        </div>

        <div class="bg-[#f0f0f2]">
        <div class="max-w-7xl w-full p-6 m-auto mt-10">
            <h2 class="text-3xl font-bold">Đội Ngũ Của Time Zone</h2>
        <div class="grid grid-cols-3 gap-5 mt-28">
            <div class="text-center">
                <div>
                    <img src="http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/customer-2-150x150.png" class="rounded-full border border-gray-200 m-auto w-32 mb-5" alt="">
                </div>

                <div>
                    <p class="italic text-base mb-5">Hiện nay, đồng hồ là phụ kiện thời trang thiết yếu đối với những người đàn ông hiện đại ngày nay</p>
                    <h3 class="text-xl font-bold">Nguyễn Thị A</h3>
                </div>
            </div>
            <div class="text-center">
                <div>
                    <img src="http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/customer-4-150x150.png" class="rounded-full border border-gray-200 m-auto w-32 mb-5" alt="">
                </div>
                
                <div>
                    <p class="italic text-base mb-5">Hiện nay, đồng hồ là phụ kiện thời trang thiết yếu đối với những người đàn ông hiện đại ngày nay</p>
                    <h3 class="text-xl font-bold">Nguyễn Văn B</h3>
                </div>
            </div>
            <div class="text-center">
                <div>
                    <img src="http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/customer-3-150x150.png" class="rounded-full border border-gray-200 m-auto w-32 mb-5" alt="">
                </div>
               
                <div>
                    <p class="italic text-base mb-5">Hiện nay, đồng hồ là phụ kiện thời trang thiết yếu đối với những người đàn ông hiện đại ngày nay</p>
                    <h3 class="text-xl font-bold">Nguyễn Thị C</h3>
                </div>
            </div>
        </div>
        </div>
    </div>
    ${FooterPage.render()}
    </div>  
        
        `;
    },
};
export default AboutPage;