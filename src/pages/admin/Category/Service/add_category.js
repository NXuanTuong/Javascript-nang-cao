// eslint-disable-next-line no-unused-vars
import $ from "jquery";
// eslint-disable-next-line no-unused-vars
import validate from "jquery-validation";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import ListCategory from "..";
import { add } from "../../../../api/category";
import HeaderAdmin from "../../../../components/admin/header_admin";
import { ReRender } from "../../../../utils/Rerender";

const addCategory = {
    render() {
        return /* html */ `
            ${HeaderAdmin.render()};
            <div class="bg-gray-50 h-full w-full ">
        <div id="main-content" class="p-5 mt-5 relative overflow-y-auto lg:ml-64">
      <form action="" id="form-add-category">
        <div class="shadow overflow-hidden sm:rounded-md">
          <div class="px-4 py-5 bg-white sm:p-6">
            <div class="grid grid-cols-6 gap-6">
              <div class="col-span-6 sm:col-span-3">
                <label for="title" class="block text-sm font-medium text-gray-700">Name Category<span class="text-red-400">*</span></label>
                <input placeholder="Enter your name" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter your name'" type="text" name="title" id="name" class="mt-1 p-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-10 shadow-sm sm:text-sm border-gray-300 rounded-md">
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
    afterRender() {
        $("#form-add-category").validate({
            rules: {
                title: {
                    required: true,
                    minlength: 2,
                },
            },
            messages: {
                title: {
                    required: "Vui lòng nhập tên danh mục",
                    minlength: "Tên danh mục ít nhất 2 ký tự",
                },
            },
            submitHandler: (form) => {
                async function signinHandle() {
                    add({
                        nameCate: document.querySelector("#name").value,
                    });
                    toastr.success("Thêm thành công");
                    setTimeout(async () => {
                        document.location.href = "/admin/category";
                        await ReRender(ListCategory, "#app");
                    }, 2000);
                    form.reset();
                }
                signinHandle();
            },
        });
    },
};
export default addCategory;