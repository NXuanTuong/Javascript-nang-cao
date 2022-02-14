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

const router = new Navigo("/", { linksSelector: "a" });

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
    "/contact": () => {
        print(ContactPage);
    },
    "/signup": () => {
        print(Signup);
    },
    "/signin": () => {
        print(Signin);
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
});
router.resolve();