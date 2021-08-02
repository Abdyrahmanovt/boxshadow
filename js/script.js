const r1 = document.querySelector("#r1")
const offsetX = document.querySelector("#offsetX")
const offsetY = document.querySelector("#offsetY")
const spread = document.querySelector("#blur")
const blur = document.querySelector("#spread")
const color = document.querySelector("#color")
const box1 = document.querySelector("#box-color")
const box = document.querySelector(".box")
const code = document.querySelector('.code')
const inset = document.querySelector('#inset')
const outset = document.querySelector('#outset')
const valuePx0 = document.querySelector('.valuePx0')
const valuePx1 = document.querySelector('.valuePx1')
const valuePx2 = document.querySelector('.valuePx2')
const valuePx3 = document.querySelector('.valuePx3')
const valuePx4 = document.querySelector('.valuePx4')


// r1.onchange = generateBoxShadow
r1.oninput = generateBoxShadow
offsetX.oninput = generateBoxShadow
offsetY.oninput = generateBoxShadow
spread.oninput = generateBoxShadow
blur.oninput = generateBoxShadow
color.oninput = generateBoxShadow
box1.oninput = generateBoxShadow
inset.oninput = generateBoxShadow
outset.oninput = generateBoxShadow
valuePx0.oninput = generateBoxShadow
valuePx1.oninput = generateBoxShadow
valuePx2.oninput = generateBoxShadow
valuePx3.oninput = generateBoxShadow
valuePx4.oninput = generateBoxShadow

function generateBoxShadow() {
    let type = ""
    if (inset.checked) {
        type = "inset"
    } else {
        type = ""
    }


    box.style.backgroundColor = box1.value
    box.style.borderRadius = r1.value + '%'
    box.style.boxShadow = `${offsetX.value}px ${offsetY.value}px ${blur.value}px ${spread.value}px ${color.value} ${type}`
    code.innerHTML = `box-shadow: ${offsetX.value}px ${offsetY.value}px ${blur.value}px ${spread.value}px ${color.value} ${type}; </br>`
    code.innerHTML += `-webkit-box-shadow ${offsetX.value}px ${offsetY.value}px ${blur.value}px ${spread.value}px ${color.value} ${type}; </br>`
    code.innerHTML += `-moz-box-shadow: ${offsetX.value}px ${offsetY.value}px ${blur.value}px ${spread.value}px ${color.value} ${type};`
    valuePx0.innerHTML = r1.value + '%'
    valuePx1.innerHTML = `${offsetX.value}px`
    valuePx2.innerHTML = `${offsetY.value}px`
    valuePx3.innerHTML = `${blur.value}px`
    valuePx4.innerHTML = `${spread.value}px`
}


generateBoxShadow()

const slider = document.querySelector("input");
const value = document.querySelector(".value");
value.textContent = slider.value;
slider.oninput = function () {
    value.textContent = this.value;
}

