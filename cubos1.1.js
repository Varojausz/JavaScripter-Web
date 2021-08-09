function crearCubo () {
    let content = document.querySelector('#content');
    content.append(createDiv());
    let div = content.lastChild;
    div.classList.add('botones');

    div.append(createButton())
    div.append(createButton())
    div.append(createButton())

    let boton = div.firstChild;
    boton.textContent = "="
    boton.classList.add('one')
    boton.addEventListener("click",evaluarCubo)

    
    let boton2 = boton.nextSibling;
    boton2.textContent = "+"
    boton2.classList.add('two')
    boton2.addEventListener("click",crearCubo)

    
    let boton3 = boton2.nextSibling;
    boton3.textContent = "x"
    boton3.classList.add('three')
    boton3.addEventListener("click",eliminar)

    content.append(createSection());
    let section = content.lastChild;
    section.classList.add('console');
    section.append(createDiv())
    section.append(createDiv())
    let cuboCont = section.lastChild;
    section.firstChild.classList.add('inputCubo')
    section.firstChild.append(createTextarea())
    section.firstChild.append(createTextarea())
    section.firstChild.firstChild.classList.add('input')
    section.firstChild.lastChild.classList.add('output')
    cuboCont.classList.add('outputCubo')

    cuboCont.append(createDiv())
    let panelCubo = cuboCont.firstChild;
    panelCubo.classList.add('panelCubo');
    panelCubo.append(createDiv())
    let panelCaras = panelCubo.firstChild;
    panelCaras.classList.add('panelCaras')

    panelCaras.append(createLabel())
    panelCaras.append(createInput())
    panelCaras.append(createLabel())
    panelCaras.append(createInput())
    panelCaras.append(createLabel())
    panelCaras.append(createInput())
    panelCaras.append(createLabel())
    panelCaras.append(createInput())
    panelCaras.append(createLabel())
    panelCaras.append(createInput())
    panelCaras.append(createLabel())
    panelCaras.append(createInput())


    panelCaras.childNodes[1].addEventListener('focusout',evaluarCara)
    panelCaras.childNodes[3].addEventListener('focusout',evaluarCara)
    panelCaras.childNodes[5].addEventListener('focusout',evaluarCara)
    panelCaras.childNodes[7].addEventListener('focusout',evaluarCara)
    panelCaras.childNodes[9].addEventListener('focusout',evaluarCara)
    panelCaras.childNodes[11].addEventListener('focusout',evaluarCara)


    panelCaras.childNodes[0].textContent = "Cara1"
    panelCaras.childNodes[2].textContent = "Cara2"
    panelCaras.childNodes[4].textContent = "Cara3"
    panelCaras.childNodes[6].textContent = "Cara4"
    panelCaras.childNodes[8].textContent = "Cara5"
    panelCaras.childNodes[10].textContent = "Cara6"



    panelCaras.firstChild.setAttribute('id','cara1Label')
    panelCaras.firstChild.nextSibling.setAttribute('id','cara1Input')
    panelCaras.firstChild.nextSibling.nextSibling.setAttribute('id','cara2Label')
    panelCaras.firstChild.nextSibling.nextSibling.nextSibling.setAttribute('id','cara2Input')
    panelCaras.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.setAttribute('id','cara3Label')
    panelCaras.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.setAttribute('id','cara3Input')
    panelCaras.querySelector('#cara3Input').nextSibling.setAttribute('id','cara4Label')
    panelCaras.querySelector('#cara4Label').nextSibling.setAttribute('id','cara4Input')
    panelCaras.querySelector('#cara4Input').nextSibling.setAttribute('id','cara5Label')
    panelCaras.querySelector('#cara5Label').nextSibling.setAttribute('id','cara5Input')
    panelCaras.querySelector('#cara5Input').nextSibling.setAttribute('id','cara6Label')
    panelCaras.querySelector('#cara6Label').nextSibling.setAttribute('id','cara6Input')
    

    panelCubo.append(createDiv())
    let panelRotaciones = panelCubo.lastChild;
    panelRotaciones.classList.add('panelRotaciones')
    panelRotaciones.append(createButton())
    panelRotaciones.append(createButton())
    panelRotaciones.append(createButton())

    panelRotaciones.childNodes[0].textContent = "R. Vertical"
    panelRotaciones.childNodes[0].addEventListener('click',vertical)
    panelRotaciones.childNodes[1].textContent = "R. Horizontal"
    panelRotaciones.childNodes[1].addEventListener('click',horizontal)
    panelRotaciones.childNodes[2].textContent = "R. Mixta"
    panelRotaciones.childNodes[2].addEventListener('click',mixta)
    //rotaciones


    cuboCont.append(createDiv())
    cuboCont.lastChild.classList.add('divCubo');
    cuboCont.lastChild.append(createDiv());
    cuboCont.lastChild.lastChild.classList.add('containerCubo', 'uno')
    cuboCont.lastChild.lastChild.append(createDiv())
    cuboCont.lastChild.lastChild.firstChild.classList.add('cube','cubo1')
    cuboCont.lastChild.lastChild.firstChild.append(createDiv())
    cuboCont.lastChild.lastChild.firstChild.append(createDiv())
    cuboCont.lastChild.lastChild.firstChild.append(createDiv())
    cuboCont.lastChild.lastChild.firstChild.append(createDiv())
    cuboCont.lastChild.lastChild.firstChild.append(createDiv())
    cuboCont.lastChild.lastChild.firstChild.append(createDiv())
    let cara = cuboCont.lastChild.lastChild.firstChild.firstChild;
    cara.classList.add('face', 'top');
    let cara2 = cara.nextSibling;
    cara.nextSibling.classList.add('face','bottom')
    cara.nextSibling.nextSibling.classList.add('face','left')
    cara.nextSibling.nextSibling.nextSibling.classList.add('face','right')
    cara.nextSibling.nextSibling.nextSibling.nextSibling.classList.add('face','front')
    cara.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.classList.add('face','back')
    
}

function evaluarCubo (e) {
    try {
        let input = e.target.parentElement.nextSibling.querySelector('.input')
        let resultado = eval(input.value);
        let output = input.nextSibling;
        output.textContent = resultado;
        output.style.backgroundColor = "lightgreen";
    } catch(error) {
        let output = e.target.parentElement.nextSibling.querySelector('.output')
        output.textContent = error.message;  
        output.style.backgroundColor = "red"; 
    }
}

function evaluarCara (e) {
    try {
        if (e.target.id.includes(1)) {
            let url = e.target.value;
            e.target.parentElement.parentElement.nextSibling.querySelector('.top').style.backgroundImage = `url('${url}')`
            //e.target.parentElement.parentElement.nextSibling.querySelector('.top').style.backgroundColor = 'red'
            //console.log(e.target.parentElement.parentElement.nextSibling.querySelector('.top').style.backgroundImage)
        }
        if (e.target.id.includes(2)) {
            let url = e.target.value;
            e.target.parentElement.parentElement.nextSibling.querySelector('.bottom').style.backgroundImage = `url('${url}')`
        }
        if (e.target.id.includes(3)) {
            let url = e.target.value;
            e.target.parentElement.parentElement.nextSibling.querySelector('.front').style.backgroundImage = `url('${url}')`
        }
        if (e.target.id.includes(4)) {
            let url = e.target.value;
            e.target.parentElement.parentElement.nextSibling.querySelector('.back').style.backgroundImage = `url('${url}')`
        }
        if (e.target.id.includes(5)) {
            let url = e.target.value;
            e.target.parentElement.parentElement.nextSibling.querySelector('.left').style.backgroundImage = `url('${url}')`
        }
        if (e.target.id.includes(6)) {
            let url = e.target.value;
            e.target.parentElement.parentElement.nextSibling.querySelector('.right').style.backgroundImage = `url('${url}')`
        }
    } catch (error) {
        let output = e.target.parentElement.parentElement.parentElement.parentElement.querySelector('.output')
        output.style.backgroundColor = "red";
        output.value = error.message;
        console.log(error.message)
        console.log(output)
    }


}

function vertical (e) {
    e.target.parentElement.parentElement.nextSibling.querySelector('.cube').classList.remove('cubo2')
    e.target.parentElement.parentElement.nextSibling.querySelector('.cube').classList.remove('cubo1')
    e.target.parentElement.parentElement.nextSibling.querySelector('.cube').classList.toggle('cubo3')
}
function horizontal (e) {
    e.target.parentElement.parentElement.nextSibling.querySelector('.cube').classList.remove('cubo3')
    e.target.parentElement.parentElement.nextSibling.querySelector('.cube').classList.remove('cubo1')
    e.target.parentElement.parentElement.nextSibling.querySelector('.cube').classList.toggle('cubo2')
}
function mixta (e) {
    e.target.parentElement.parentElement.nextSibling.querySelector('.cube').classList.remove('cubo2')
    e.target.parentElement.parentElement.nextSibling.querySelector('.cube').classList.remove('cubo3')
    e.target.parentElement.parentElement.nextSibling.querySelector('.cube').classList.toggle('cubo1')
}