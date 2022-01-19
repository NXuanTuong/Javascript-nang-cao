import Banner from "../components/banner";
import ContentPage from "../components/content";
import NavHeader from "../components/header";

const HomePage = {
    render() {
        return /* html */`
            <div class="max-w-full m-auto">
                    ${NavHeader.render()}
                    ${Banner.render()}
                    ${ContentPage.render()}
            </div>
        `;
    },
};
export default HomePage;