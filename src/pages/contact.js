import FooterPage from "../components/footer";
import NavHeader from "../components/header";

const ContactPage = {
    render() {
        return /* html */ `
            <div class="max-w-full m-auto">
                ${NavHeader.render()}

                <div class="bg-[#eff5f8] block">
                <ul class="text-center p-5">
                    <li class="inline-block"><a class="px-1 py-3 text-lg font-medium text-[#8d979d]" href="/">Home</a></li> 
                    <li class="inline-block"><span class="px-1 text-lg font-medium text-[#8d979d] py-3">></span></li>
                    <li class="inline-block"><a  class="px-1 text-lg font-medium text-black py-3" href="/contact">Contact</a></li>
                </ul>
            </div>

            <div class="max-w-7xl w-full p-6 m-auto mt-20">
                <div class=" grid grid-cols-2 gap-10">
                    <div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.863981044336!2d105.74459841473156!3d21.038127785993204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454b991d80fd5%3A0x53cefc99d6b0bf6f!2zVHLGsOG7nW5nIENhbyDEkeG6s25nIEZQVCBQb2x5dGVjaG5pYw!5e0!3m2!1svi!2s!4v1644994605778!5m2!1svi!2s" width="600" height="550" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                    </div>

                    <div class="text-center">
                        <div>
                            <h2 class="text-3xl font-semibold tracking-wider mb-2">CONTACT US</h2>
                            <div>
                                <span><i class="bi bi-dash-lg" style="font-size: 2rem;"></i></span>
                                <span><i class="bi bi-watch" style="font-size: 2rem;"></i></span> 
                                <span><i class="bi bi-dash-lg" style="font-size: 2rem;"></i></span>
                            </div>
                        </div>

                        <div class="mt-4">
                            <form>
                                <div>
                                    <div>
                                        <input type="" placeholder="Full name" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Full Name'" class="outline-none border border-gray-300 w-[45%] px-3 py-2 mb-3" name="" value="">
                                        <input type="" placeholder="Email" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Email'" class="outline-none border border-gray-300 w-[45%] px-3 py-2" name="" value="">
                                    </div>

                                    <div>
                                        <input type="" placeholder="Phone Number" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Phone Number'" class="outline-none border border-gray-300 w-[45%] px-3 py-2 mb-3" name="" value="">
                                        <input type="" placeholder="Address" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Address'" class="outline-none border border-gray-300 w-[45%] px-3 py-2 mb-3" name="" value="">
                                    </div>
                                </div>
                                <textarea placeholder="Note" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Note'" rows="5" cols="68" class="outline-none border border-gray-300 px-3 py-2 mb-3"></textarea>
                                <button class="block mx-[25%] px-32 py-2 text-lg bg-red-500 text-white shadow-md" type="">SEND</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            ${FooterPage.render()}
            </div>
        `;
    },
    afterRender() {
        NavHeader.afterRender();
    },
};
export default ContactPage;