function getLength(item, index, num) {
    let items = document.querySelector(item)
    let indexs = document.querySelector(index)
    items.oninput = () => {
        let long = items.value.length
        indexs.innerHTML = ''
        indexs.innerHTML = long + '/' + num
        items.setAttribute('maxlength', num)
    }
}