import Navigo from "navigo";
import AboutPage from "./pages/about";
import ContactPage from "./pages/contact";
import HomePage from "./pages/home";
import NewPage from "./pages/news";
import ProductPage from "./pages/product";

const router = new Navigo("/", { linksSelector: "a" });

const print = (content) => {
    document.querySelector("#app").innerHTML = content.render();
};

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
});
router.resolve();