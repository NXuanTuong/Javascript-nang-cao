import axios from "axios";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import ListProducts from "..";
import { get, update } from "../../../../api/products";
import HeaderAdmin from "../../../../components/admin/header_admin";
import { ReRender } from "../../../../utils/Rerender";

const editProducts = {
    async render(id) {
        const { data } = await get(id);
        return /* html */ `
        ${HeaderAdmin.render()}
        <div class="bg-gray-50 h-full w-full ">
        <div id="main-content" class="p-5 mt-5 relative overflow-y-auto lg:ml-64">
      <form action="" id="form-edit-products">
      <div class="shadow overflow-hidden sm:rounded-md">
      <div class="px-4 py-5 bg-white sm:p-6">
        <div class="grid grid-cols-6 gap-6">
          <div class="col-span-6 sm:col-span-3">
            <label for="title" class="block text-sm font-medium text-gray-700">Name<span class="text-red-400">*</span></label>
            <input value="${data.name}"  placeholder="Enter your name" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter your title'" type="text" name="title" id="name" class="mt-1 p-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-10 shadow-sm sm:text-sm border-gray-300 rounded-md">
          </div>

          <div class="col-span-6 sm:col-span-3">
            <label for="content" class="block text-sm font-medium text-gray-700">Price Old<span class="text-red-400">*</span></label>
            <input value="${data.priceold}" type="text" name="content" id="priceold" placeholder="Enter your price old" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter your price old'" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block p-3 w-full h-10 shadow-sm sm:text-sm border-gray-300 rounded-md">
          </div>

          <div class="col-span-6 sm:col-span-3">
            <label for="last_name" class="block text-sm font-medium text-gray-700">Price New<span class="text-red-400">*</span></label>
            <input value="${data.pricenew}" type="text" name="last_name" id="pricenew" placeholder="Enter your price new" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter your price new'" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full p-3 h-10 shadow-sm sm:text-sm border-gray-300 rounded-md">
          </div>

          <div class="col-span-6 sm:col-span-3">
            <label for="image" class="block text-sm font-medium text-gray-700">Image<span class="text-red-400">*</span></label>
            <input type="file" name="image" id="image" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 p-3 block w-full h-10 shadow-sm sm:text-sm border-gray-300 rounded-md">
          </div>

        </div>
      </div>
      <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
        <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Save
        </button>
      </div>
    </div>
        
      </form>
      </div>
      </div>
        `;
    },
    afterRender(id) {
        const editForm = document.querySelector("#form-edit-products");
        const image = document.querySelector("#image");

        const CLODINARY_API = "https://api.cloudinary.com/v1_1/assjavascript/image/upload";
        const CLODINARY_PRESET = "gxpasiys";

        editForm.addEventListener("submit", async (e) => {
            e.preventDefault();

            try {
                const file = image.files[0];
                const formData = new FormData();
                formData.append("file", file);
                formData.append("upload_preset", CLODINARY_PRESET);

                const { data } = await axios.post(CLODINARY_API, formData, {
                    headers: {
                        "Content-Type": "application/form-data",
                    },
                });
                update({
                    id,
                    name: document.querySelector("#name").value,
                    priceold: document.querySelector("#priceold").value,
                    pricenew: document.querySelector("#pricenew").value,
                    image: data.url,
                });
                toastr.success("Sửa thành công");
                setTimeout(async () => {
                    document.location.href = "/admin/products";
                    await ReRender(ListProducts, "#app");
                }, 2000);
            } catch (error) {
                toastr.error(error.message);
            }
        });
    },
};
export default editProducts;