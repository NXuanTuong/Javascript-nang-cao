import Navigo from "navigo";
import AboutPage from "./pages/about";
import HomePage from "./pages/home";
import NewPage from "./pages/news";

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
});
router.resolve();