const container = document.getElementById('container')
const button = document.getElementById('changeSize')
let width = document.getElementById('width')
const showSizes = document.querySelectorAll('#showSize span')
let height = document.getElementById('height')
let color = document.getElementById('color')

showSizes[0].innerText = width.value + 'px'
showSizes[1].innerText = height.value + 'px'


button.addEventListener('click', () => {
    let widthValue = width.value || 0
    let heightValue = height.value || 0
    showSizes[0].innerText = widthValue + 'px'
    showSizes[1].innerText = heightValue + 'px'
    let colorValue = color.value
    container.style.setProperty('--w', widthValue)
    container.style.setProperty('--h', heightValue)
    container.style.setProperty('--bg', colorValue)
})