const colorPicker = document.getElementById("select-color-input")
const selectMode = document.getElementById("select-menu")
const colors = document.getElementById("colors")
const hexfooter = document.getElementById("hex-footer")
let colorPickerValue = colorPicker.value.slice(1)
let selectModeValue = selectMode.value



document.getElementById("select-color-input").addEventListener("input", () => colorPickerValue = colorPicker.value.slice(1) )

document.getElementById("select-menu").addEventListener("input", () => selectModeValue = selectMode.value)

document.getElementById("get-color-scheme-btn").addEventListener("click", getColorsPalette)


function getColorsPalette() {
    fetch(`https://www.thecolorapi.com/scheme?hex=${colorPickerValue}&mode=${selectModeValue}`)
    .then(response => response.json())
    .then(data => {
        let colorsArray = data.colors
        colors.innerHTML = ""
        hexfooter.innerHTML = ""
        for(let i = 0; i < colorsArray.length; i++) {
            hexfooter.innerHTML += `<div>${colorsArray[i].hex.value}</div>`
            colors.innerHTML += `
                <div style="background-color:${colorsArray[i].hex.value}"></div>
            `
        }
        })
    }