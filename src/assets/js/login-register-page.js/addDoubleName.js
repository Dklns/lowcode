export function addDoubleName(page_type, class_input, const_input, side_const_class) {
    document.querySelector(class_input).placeholder = `请输入${const_input}`;
    document.querySelector(class_input).setAttribute(
        "class",
        `${page_type}-${side_const_class}-input ${page_type}-${side_const_class}-input-placeholder`
    );
    document.querySelector(class_input).addEventListener(
        "focus",
        function () {
            this.classList.remove(
                `${page_type}-${side_const_class}-input-placeholder`
            );
        }
    );
}