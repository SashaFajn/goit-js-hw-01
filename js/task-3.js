function getElementWidth(content, padding, border) {
    let contentWidth = parseInt(content, 10);
    let paddingWidth = parseInt(padding, 10);
    let borderWidth = parseInt(border, 10);
   

    return contentWidth + paddingWidth * 2 + borderWidth * 2
};
    

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200