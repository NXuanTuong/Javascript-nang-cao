import Navigo from "navigo";
import AboutPage from "./pages/about";
import ListBlogs from "./pages/admin/Blogs";
import addBlogs from "./pages/admin/Blogs/Service/add_blogs";
import editBlogs from "./pages/admin/Blogs/Service/edit_blog";
import DashBoard from "./pages/admin/dashboard";
import Signin from "./pages/auth/signin";
import Signup from "./pages/auth/signup";
import ContactPage from "./pages/contact";
import HomePage from "./pages/home";
import NewPage from "./pages/news";
import ProductPage from "./pages/product";
import ListCustomer from "./pages/admin/Customer/List_customer";
import ListProducts from "./pages/admin/Products";
import addProducts from "./pages/admin/Products/Service/add_product";
import editProducts from "./pages/admin/Products/Service/edit_product";
import ListCategory from "./pages/admin/Category";
import addCategory from "./pages/admin/Category/Service/add_category";
import editCategory from "./pages/admin/Category/Service/edit_category";
import DetailsProduct from "./pages/detail_product";
import PageCart from "./pages/cart";
import CheckOut from "./pages/checkout";
import OrderAdmin from "./pages/admin/Orders";

const router = new Navigo("/", { linksSelector: "a", hash: true });

const print = async (content, id) => {
    document.querySelector("#app").innerHTML = await content.render(id);
    if (content.afterRender) content.afterRender(id);
};

router.on("/admin/*", () => {}, {
    before: (done) => {
        if (localStorage.getItem("user")) {
            const userID = JSON.parse(localStorage.getItem("user")).id;

            if (userID === 1) {
                done();
            } else {
                document.location.href = "/";
            }
        } else {
            document.location.href = "/";
        }
    },
});

router.on({
    "/": () => {
        print(HomePage);
    },
    "/about": () => {
        print(AboutPage);
    },
    "/news": () => {
        print(NewPage);
    },
    "/product": () => {
        print(ProductPage);
    },
    "/product/:id": () => {
        print(ProductPage);
    },
    "/details_product/:id": (value) => {
        print(DetailsProduct, value.data.id);
    },
    "/contact": () => {
        print(ContactPage);
    },
    "/cart": () => {
        print(PageCart);
    },
    "/signup": () => {
        print(Signup);
    },
    "/signin": () => {
        print(Signin);
    },
    "/checkout": () => {
        print(CheckOut);
    },
    "/admin/dashboard": () => {
        print(DashBoard);
    },
    "/admin/blogs": () => {
        print(ListBlogs);
    },
    "/admin/blogs/add": () => {
        print(addBlogs);
    },
    "/admin/blogs/:id/edit": (value) => {
        print(editBlogs, value.data.id);
    },
    "/admin/users": () => {
        print(ListCustomer);
    },
    "/admin/products": () => {
        print(ListProducts);
    },
    "/admin/products/add": () => {
        print(addProducts);
    },
    "/admin/products/:id/edit": (value) => {
        print(editProducts, value.data.id);
    },
    "/admin/category": () => {
        print(ListCategory);
    },
    "/admin/category/add": () => {
        print(addCategory);
    },
    "/admin/category/:id/edit": (value) => {
        print(editCategory, value.data.id);
    },
    "/admin/orders": () => {
        print(OrderAdmin);
    },
});
router.resolve();