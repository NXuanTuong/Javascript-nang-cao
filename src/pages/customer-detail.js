import NavHeader from "../components/header";

const CustomerDetail = {
    render() {
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
        </div>
        `;
    },
};
export default CustomerDetail;