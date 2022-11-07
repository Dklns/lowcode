export function addDoubleName(page_type, variable_input, const_input, side_const_class) {
    document.querySelector(variable_input).placeholder = `请输入${const_input}`;
    document.querySelector(variable_input).setAttribute(
        "class",
        `${page_type}-${side_const_class}-input ${page_type}-${side_const_class}-input-placeholder`
    );
    document.querySelector(variable_input).addEventListener(
        "focus",
        function () {
            this.classList.remove(
                `${page_type}-${side_const_class}-input-placeholder`
            );
        }
    );
}