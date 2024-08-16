window.addEventListener("load", solve);

function solve() {
    const makeInput = document.getElementById("make");
    const modelInput = document.getElementById("model");
    const yearInput = document.getElementById("year");
    const fuelInput = document.getElementById("fuel");
    const originalCostInput = document.getElementById("original-cost");
    const sellingPriceInput = document.getElementById("selling-price");

    const tableBody = document.getElementById("table-body");
    const profit = document.getElementById("profit");
    const carsList = document.getElementById("cars-list");
    const publishBtn = document.getElementById("publish");
    publishBtn.addEventListener("click", publishAction);

    function publishAction(e) {
        e.preventDefault();
        debugger;
        const makeInputValue = makeInput.value;
        const modelInputValue = modelInput.value;
        const yearInputValue = yearInput.value;
        const fuelInputValue = fuelInput.value;
        const originalCostInputValue = originalCostInput.value;
        const sellingPriceInputValue = sellingPriceInput.value;

        if (!makeInputValue || !modelInputValue || !yearInputValue || !fuelInputValue || sellingPriceInputValue <= originalCostInputValue) {
            return;
        }

        const tr = document.createElement("tr");
        tr.classList.add("row");

        const makeTd = document.createElement("td");
        makeTd.textContent = makeInputValue;

        const modelTd = document.createElement("td");
        modelTd.textContent = modelInputValue;

        const yearTd = document.createElement("td")
        yearTd.textContent = yearInputValue;

        const fuelTd = document.createElement("td");
        fuelTd.textContent = fuelInputValue;

        const originalCostTd = document.createElement("td");
        originalCostTd.textContent = originalCostInputValue;

        const sellingPriceTd = document.createElement("td");
        sellingPriceTd.textContent = sellingPriceInputValue;

        const buttonsTd = document.createElement("td");

        const editBtn = document.createElement("button");
        editBtn.classList.add("action-btn", "edit");
        editBtn.textContent = "Edit";

        const sellBtn = document.createElement("button");
        sellBtn.classList.add("action-btn", "sell");
        sellBtn.textContent = "Sell";

        buttonsTd.appendChild(editBtn);
        buttonsTd.appendChild(sellBtn);

        tr.appendChild(makeTd);
        tr.appendChild(modelTd);
        tr.appendChild(yearTd);
        tr.appendChild(fuelTd);
        tr.appendChild(originalCostTd);
        tr.appendChild(sellingPriceTd);
        tr.appendChild(buttonsTd);

        tableBody.appendChild(tr);
        clearAll();

        editBtn.addEventListener("click", (e) => {
            e.preventDefault();

            makeInput.value = makeInputValue;
            modelInput.value = modelInputValue;
            yearInput.value = yearInputValue;
            fuelInput.value = fuelInputValue;
            originalCostInput.value = originalCostInputValue;
            sellingPriceInput.value = sellingPriceInputValue;

            tr.remove();
        });

        sellBtn.addEventListener("click", (e) => {
            e.preventDefault();

            const li = document.createElement("li");
            li.classList.add("each-list");

            const makeModelSpan = document.createElement("span");
            makeModelSpan.textContent = `${makeInputValue} ${modelInputValue}`;

            const yearSpan = document.createElement("span");
            yearSpan.textContent = yearInputValue;

            const priceSpan = document.createElement("span");
            priceSpan.textContent = sellingPriceInputValue - originalCostInputValue;

            li.appendChild(makeModelSpan);
            li.appendChild(yearSpan);
            li.appendChild(priceSpan);

            carsList.appendChild(li);

            tr.remove();

            profit.textContent = (Number(profit.textContent) + (sellingPriceInputValue - originalCostInputValue)).toFixed(2);
        });
    }

    function clearAll() {
        makeInput.value = "";
        modelInput.value = "";
        yearInput.value = "";
        fuelInput.value = "";
        originalCostInput.value = "";
        sellingPriceInput.value = "";
    }
}
