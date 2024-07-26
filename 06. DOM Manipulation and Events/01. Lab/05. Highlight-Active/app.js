function focused() {
   const fields = Array.from(document.getElementsByTagName("input"));

    for (const field of fields) {
        field.addEventListener("focus", onFocus);
        field.addEventListener("blur", onBlur);
    }
    
    function onFocus(event){
        const divparentElement = event.currentTarget.parentNode;
        divparentElement.classList.add("focused");
    }
    
    function onBlur(event) {
        const divparentElement = event.currentTarget.parentNode;
        divparentElement.classList.remove("focused");
    }
}