class HtmlTemplateBinder {
    constructor(selector = '*[data-bind]') { 
        this.selector = selector;
    }

    bind(template, obj) {
        var html = new DOMParser().parseFromString(template, "text/html");
        const elements = html.querySelectorAll(this.selector);
        for (const elem of elements) {
            const key = elem.dataset.bind;
            elem.innerHTML = obj[key] || '';
        }
        return html.body.firstChild;
    }
}

export default new HtmlTemplateBinder();