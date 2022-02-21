import axios from "axios";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import ListBlogs from "..";
import { get, update } from "../../../../api/blogs";
import HeaderAdmin from "../../../../components/admin/header_admin";
import { ReRender } from "../../../../utils/Rerender";

const editBlogs = {
    async render(id) {
        const { data } = await get(id);
        return /* html */ `
        ${HeaderAdmin.render()}
        <div class="bg-gray-50 h-full w-full ">
        <div id="main-content" class="p-5 mt-5 relative overflow-y-auto lg:ml-64">
      <form action="" id="form-edit-blogs">
      <div class="shadow overflow-hidden sm:rounded-md">
      <div class="px-4 py-5 bg-white sm:p-6">
        <div class="grid grid-cols-6 gap-6">
          <div class="col-span-6 sm:col-span-3">
            <label for="title" class="block text-sm font-medium text-gray-700">Title<span class="text-red-400">*</span></label>
            <input value="${data.title}"  placeholder="Enter your title" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter your title'" type="text" name="title" id="title" class="mt-1 p-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-10 shadow-sm sm:text-sm border-gray-300 rounded-md">
          </div>

          <div class="col-span-6 sm:col-span-3">
            <label for="content" class="block text-sm font-medium text-gray-700">Content<span class="text-red-400">*</span></label>
            <input value="${data.content}" type="text" name="content" id="content" placeholder="Enter your content" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter your content'" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block p-3 w-full h-10 shadow-sm sm:text-sm border-gray-300 rounded-md">
          </div>

          <div class="col-span-6 sm:col-span-3">
            <label for="last_name" class="block text-sm font-medium text-gray-700">Category<span class="text-red-400">*</span></label>
            <input value="${data.category}" type="text" name="last_name" id="category" placeholder="Enter your category" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter your category'" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full p-3 h-10 shadow-sm sm:text-sm border-gray-300 rounded-md">
          </div>

          <div class="col-span-6 sm:col-span-3">
            <label for="image" class="block text-sm font-medium text-gray-700">Image<span class="text-red-400">*</span></label>
            <input type="file" name="image" id="image" placeholder="Enter your Image" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter your Image'" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 p-3 block w-full h-10 shadow-sm sm:text-sm border-gray-300 rounded-md">
          </div>

          <div class="col-span-6 sm:col-span-3">
          <label for="country" class="block text-sm font-medium text-gray-700">Comment<span class="text-red-400">*</span></label>
          <input type="text" value="${data.comment}" name="comment" id="comment" placeholder="Enter your comment" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter your comment'" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 p-3 block w-full h-10 shadow-sm sm:text-sm border-gray-300 rounded-md">
        </div>

        <div class="col-span-6 sm:col-span-3">
        <img id="previewImage" class="h-62 w-40 m-auto" src="${data.image}" alt="">
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
        const editForm = document.querySelector("#form-edit-blogs");
        const image = document.querySelector("#image");
        const imagePreview = document.querySelector("#previewImage");
        let imgUploadedLink = "";

        const CLODINARY_API = "https://api.cloudinary.com/v1_1/assjavascript/image/upload";
        const CLODINARY_PRESET = "gxpasiys";

        image.addEventListener("change", () => {
            imagePreview.src = URL.createObjectURL(image.files[0]);
        });

        editForm.addEventListener("submit", async (e) => {
            e.preventDefault();

            try {
                const file = image.files[0];
                if (file) {
                    const formData = new FormData();
                    formData.append("file", file);
                    formData.append("upload_preset", CLODINARY_PRESET);

                    const { data } = await axios.post(CLODINARY_API, formData, {
                        headers: {
                            "Content-Type": "application/form-data",
                        },
                    });
                    imgUploadedLink = data.url;
                }

                update({
                    id,
                    title: document.querySelector("#title").value,
                    content: document.querySelector("#content").value,
                    category: document.querySelector("#category").value,
                    // eslint-disable-next-line no-unneeded-ternary
                    image: imgUploadedLink ? imgUploadedLink : imagePreview.src,
                    comment: document.querySelector("#comment").value,
                });
                toastr.success("Sửa thành công");
                setTimeout(async () => {
                    document.location.href = "/admin/blogs";
                    await ReRender(ListBlogs, "#app");
                }, 2000);
            } catch (error) {
                toastr.error(error.message);
            }
        });
    },
};
export default editBlogs;