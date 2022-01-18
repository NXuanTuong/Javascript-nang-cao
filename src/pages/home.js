import Banner from "../components/banner";
import NavHeader from "../components/header";

const HomePage = {
    render() {
        return /* html */`
            <div class="max-w-full m-auto">
                    ${NavHeader.render()}
                    ${Banner.render()}
            </div>
        `;
    },
};
export default HomePage;