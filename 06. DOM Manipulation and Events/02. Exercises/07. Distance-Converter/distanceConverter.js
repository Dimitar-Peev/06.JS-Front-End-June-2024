function attachEventsListeners() {

    const [inputDistanceField, convertButton, outputDistanceField] = document.getElementsByTagName("input");
    const [inputUnitOption, outputUnitOption] = document.getElementsByTagName("select");

    const conversionRates = {
        km: 1000,
        m: 1,
        cm: 0.01,
        mm: 0.001,
        mi: 1609.34,
        yrd: 0.9144,
        ft: 0.3048,
        in: 0.0254,
    };

    convertButton.addEventListener("click", () => {
        const inputDistance = inputDistanceField.value;
        const inputUnits = inputUnitOption.value;
        const outputUnits = outputUnitOption.value;

        outputDistanceField.value = (inputDistance * conversionRates[inputUnits]) / conversionRates[outputUnits];
    });
}
