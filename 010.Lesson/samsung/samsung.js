const cellPhone = {
    brand: "Samsung",
    model: "Galaxy S22",
    design: "Érintőképernyő",
    size: "146 x 70,6 x 7,6mm",
    weight: "167 g"
}

const system = {
    opSys: "Android 12",
    smart: true,
    processorBrand: "Exynos 2200",
    processorType: "MTK 5G-B+",
    processorCore: "8", 
    memory: "128/256 GB",
    ramSize: "8 GB"
}

const display = {
    displayType: "Dynamic AMOLED 2X",
    displaySize: "6.1",
    res: "FHD+ (2340 x 1080) PX",
    color:"16 millió"
}

const text = `
    <h1>${cellPhone.brand} || ${cellPhone.model}</h1>
    <h2>Tulajdonságai:</h2>
    <h4></h4>
    <div class="container">
        <div class=t"tul">
            <h4>Fizikai jellemzők</h4>
            <p class="para">Kialakítás: ${cellPhone.design}</p>
            <p class="para">Méret: ${cellPhone.size}</p>
            <p class="para">Súly: ${cellPhone.weight}</p>
        </div>
        <div class=t"tul">
            <h4>Rendszer</h4>
            <p class="para">Operációs rendszer: ${system.opSys}</p>
            <p class="para">Okostelefon: ${ true ? "igen" : "nem" }</p>
            <p class="para">Processzor gyártó: ${system.processorBrand}</p>
            <p class="para">Processzor típusa: ${system.processorType}</p>
            <p class="para">Processzormagok száma: ${system.processorCore}</p>
        </div>
        <div class=t"tul">
            <h4>Memória</h4>
            <p class="para">Belső memória: ${system.memory}</p>
            <p class="para">RAM méret: ${system.ramSize}</p>
        </div>
        <div class=t"tul">
            <h4>Kijelző</h4>
            <p class="para">Kijelző típusa: ${display.displayType}</p>
            <p class="para">Kijelző méret: ${display.displaySize}</p>
            <p class="para">Felbontás: ${display.res}</p>
            <p class="para">Színmélység: ${display.color}</p>
        </div>
    </div>
`

document.querySelector("#root").innerHTML = text