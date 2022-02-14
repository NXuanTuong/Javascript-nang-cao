import Banner from "../components/banner";
import ContentPage from "../components/content";
import FooterPage from "../components/footer";
import NavHeader from "../components/header";

const HomePage = {
    render() {
        return /* html */`
            <div class="max-w-full m-auto">
                    ${NavHeader.render()}
                    ${Banner.render()}
                    ${ContentPage.render()}
                    ${FooterPage.render()}
            </div>
        `;
    },
    afterRender() {
        NavHeader.afterRender();
    },
};
export default HomePage;