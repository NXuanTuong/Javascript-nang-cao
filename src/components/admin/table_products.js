import toastr from "toastr";
import "toastr/build/toastr.min.css";
import { productAll, remove } from "../../api/products";
import { categoriesAll } from "../../api/category";
import { ReRender } from "../../utils/Rerender";

const TableProducts = {
    async render() {
        const { data } = await productAll();
        const getCate = await categoriesAll();
        const dataCate = getCate.data;
        return /* html */ `
        ${data.map((item) => {
        const result = dataCate.filter((cate) => cate.id === item.category);

        return /* html */ `
                <tr class="hover:bg-gray-100">
                <td class="p-4 w-4">
                    <div class="flex items-center">
                        <input id="checkbox-1" aria-describedby="checkbox-1" type="checkbox" class="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-cyan-200 h-4 w-4 rounded">
                        <label for="checkbox-1" class="sr-only">checkbox</label>
                    </div>
                </td>
        <td class="p-4 whitespace-nowrap space-x-6 mr-12 lg:mr-0">
        <img class="h-10 w-10 object-cover rounded-full" src="${item.image}" alt="Neil Sims avatar">
        </td>
        <td>
        <div class="text-sm text-center font-normal text-gray-500">
        <div class="text-sm normal-case w-[300px] text-gray-900">${item.name}</div>
        </div>
        </td>
        <td>
        <div class="p-4 truncate text-center text-base font-medium text-gray-900">$ ${item.priceold}</div>
        </td>
        <td class="p-4 whitespace-nowrap text-center text-base font-medium text-gray-900">$ ${item.pricenew}</td>
        <td class="p-4 whitespace-nowrap text-center text-base font-normal text-gray-900"> ${result[0].nameCate}
        </td>
        <td class="p-4 whitespace-nowrap space-x-2">
        <a href="/admin/products/${item.id}/edit">
        <button type="button" data-modal-toggle="user-modal" class="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm inline-flex items-center px-3 py-2 text-center">
        <svg class="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path><path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd"></path></svg>
        Edit product
        </button>
        </a>
        <button type="button" data-id="${item.id}" data-modal-toggle="delete-user-modal" class="btn btn-remove text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-3 py-2 text-center">
        <svg class="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
        Delete product
        </button>
        </td>
        </tr>
            `;
    }).join("")}
        
    `;
    },
    afterRender() {
        const Delete = document.querySelectorAll(".btn");
        Delete.forEach((buttons) => {
            const { id } = buttons.dataset;
            buttons.addEventListener("click", () => {
                const confirm = window.confirm("Bạn có chắn chắn mún xóa không?");
                if (confirm) {
                    remove(id).then(() => {
                        toastr.success("Xóa thành công");
                        ReRender(TableProducts, "#tbody-products");
                    });
                }
            });
        });
    },
};
export default TableProducts;