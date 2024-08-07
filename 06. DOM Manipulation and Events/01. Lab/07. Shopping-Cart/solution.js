function solve() {
    const addButtons = Array.from(document.querySelectorAll("button.add-product"));
    const checkoutBtn = document.querySelector("button.checkout");
    const textarea = document.querySelector("textarea");

    // const product = {
    //     "Bread": 0.8,
    //     "Milk": 1.09,
    //     "Tomatoes": 0.99,
    // };

    let boughtProducts = [];
    let totalPrice = 0;

    addButtons.forEach(btn => {
        btn.addEventListener("click", addElementInTheCard);
    });

    function addElementInTheCard(e) {
        const currentProduct = e.currentTarget.parentNode.parentNode;
        const productTitle = currentProduct.querySelector(".product-title").textContent;
        const productPrice = currentProduct.querySelector(".product-line-price").textContent;
        // console.log(productTitle);

        if (!boughtProducts.includes(productTitle)) {
            boughtProducts.push(productTitle);
        }
        totalPrice += Number(productPrice);

        textarea.value += `Added ${productTitle} for ${productPrice} to the cart.\n`;
    }

    checkoutBtn.addEventListener("click", checkout);

    function checkout(e) {
        textarea.value += `You bought ${boughtProducts.join(", ")} for ${totalPrice.toFixed(2)}.`;

        addButtons.forEach((btn) => {
            btn.removeEventListener("click", addElementInTheCard);
        });
        disableAllButtons();
    }

    function disableAllButtons() {
        Array.from(document.querySelectorAll('button')).forEach(btn => btn.disabled = true);
    }
}