// commponent : phần tử muốn render lại , dom là phần hiển thị ra
// eslint-disable-next-line import/prefer-default-export
export const ReRender = async (component, dom) => {
    if (component) {
        document.querySelector(dom).innerHTML = await component.render();
    }
    if (component.afterRender) await component.afterRender();
};