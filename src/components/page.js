import { productAll } from "../api/products";

const Page = {
    async render() {
        // const data = await productpage(1, 5);
        const { data } = await productAll();
        const itemPage = 6;
        const page = Math.ceil(data.length / itemPage);
        const arr = [];
        for (let i = 1; i <= page; i++) {
            arr.push(`
                <li class="inline-block px-4 py-2 border bg-red-300 cursor-pointer"><a href="/#/product?_page=${i}&_limit=6" class="text-[#000]">
               ${i}
               </a></li>`);
        }

        return /* html */`${arr.map((item) => item).join("")}`;
    },
};
export default Page;