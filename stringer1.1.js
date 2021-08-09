let str = 'trim'
        function crearStringer () {
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
            boton.addEventListener("click",evaluarStr)

            
            let boton2 = boton.nextSibling;
            boton2.textContent = "+"
            boton2.classList.add('two')
            boton2.addEventListener("click",crearStringer)

            
            let boton3 = boton2.nextSibling;
            boton3.textContent = "x"
            boton3.classList.add('three')
            boton3.addEventListener("click",eliminar)

            content.append(createSection());
            let section = content.lastChild;
            section.classList.add('console');
            section.append(createDiv());
            section.lastChild.classList.add('strBlock');
            section.lastChild.append(createTable());
            let table = section.lastChild.lastChild;
            table.append(createCaption());
            table.lastChild.textContent = 'String Methods';

            table.append(createTr())
            let fila = table.lastChild;
            fila.append(createTh())
            fila.lastChild.append(createLink());
            fila.lastChild.lastChild.textContent = 'trim'
            fila.lastChild.lastChild.setAttribute("href", "https://www.w3schools.com/jsref/jsref_trim_string.asp")
            fila.lastChild.lastChild.setAttribute("target", "_blank")

            fila.append(createTh())
            fila.lastChild.append(createLink());
            fila.lastChild.lastChild.textContent = 'split'
            fila.lastChild.lastChild.setAttribute("href", "https://www.w3schools.com/jsref/jsref_split.asp")
            fila.lastChild.lastChild.setAttribute("target", "_blank")

            fila.append(createTh())
            fila.lastChild.append(createLink());
            fila.lastChild.lastChild.textContent = 'subString'
            fila.lastChild.lastChild.setAttribute("href", "https://www.w3schools.com/jsref/jsref_substring.asp")
            fila.lastChild.lastChild.setAttribute("target", "_blank")
            fila.append(createTh())

            fila.lastChild.append(createLink());
            fila.lastChild.lastChild.textContent = 'slice'
            fila.lastChild.lastChild.setAttribute("href", "https://www.w3schools.com/jsref/jsref_slice_string.asp")
            fila.lastChild.lastChild.setAttribute("target", "_blank")

            
            fila.append(createTh())
            fila.lastChild.append(createLink());
            fila.lastChild.lastChild.textContent = 'indexOf'
            fila.lastChild.lastChild.setAttribute("href", "https://www.w3schools.com/jsref/jsref_indexof.asp")
            fila.lastChild.lastChild.setAttribute("target", "_blank")

            fila.append(createTh())
            fila.lastChild.append(createLink());
            fila.lastChild.lastChild.textContent = 'includes'
            fila.lastChild.lastChild.setAttribute("href", "https://www.w3schools.com/jsref/jsref_includes.asp")
            fila.lastChild.lastChild.setAttribute("target", "_blank")

            fila.append(createTh())
            fila.lastChild.append(createLink());
            fila.lastChild.lastChild.textContent = 'concat'
            fila.lastChild.lastChild.setAttribute("href", "https://www.w3schools.com/jsref/jsref_concat_string.asp")
            fila.lastChild.lastChild.setAttribute("target", "_blank")

            fila.append(createTh())
            fila.lastChild.append(createLink());
            fila.lastChild.lastChild.textContent = 'replace'
            fila.lastChild.lastChild.setAttribute("href", "https://www.w3schools.com/jsref/jsref_replace.asp")
            fila.lastChild.lastChild.setAttribute("target", "_blank")

            fila.append(createTh())
            fila.lastChild.append(createLink());
            fila.lastChild.lastChild.textContent = 'match'
            fila.lastChild.lastChild.setAttribute("href", "https://www.w3schools.com/jsref/jsref_match.asp")
            fila.lastChild.lastChild.setAttribute("target", "_blank")

            fila.append(createTh())
            fila.lastChild.append(createLink());
            fila.lastChild.lastChild.textContent = 'replaceAll'
            fila.lastChild.lastChild.setAttribute("href", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll")
            fila.lastChild.lastChild.setAttribute("target", "_blank")

            fila.append(createTh())
            fila.lastChild.append(createLink());
            fila.lastChild.lastChild.textContent = 'toLowerCase'
            fila.lastChild.lastChild.setAttribute("href", "https://www.w3schools.com/jsref/jsref_tolocalelowercase.asp")
            fila.lastChild.lastChild.setAttribute("target", "_blank")

            fila.append(createTh())
            fila.lastChild.append(createLink());
            fila.lastChild.lastChild.textContent = 'toUpperCase'
            fila.lastChild.lastChild.setAttribute("href", "https://www.w3schools.com/jsref/jsref_tolocaleuppercase.asp")
            fila.lastChild.lastChild.setAttribute("target", "_blank")

            section.lastChild.append(createDiv());
            let strConfig = section.lastChild.lastChild
            strConfig.classList.add('strConfig');
            strConfig.append(createSelect());
            strConfig.append(createDiv());

            strConfig.lastChild.textContent = 'Elimina los espacios situados antes y despues del texto'
            let select = strConfig.firstChild

            select.append(createOption());
            select.lastChild.textContent = 'trim';
            /* strConfig.lastChild.lastChild.addEventListener('change', trimMethod); */
            select.addEventListener('change',StrMethod)
            select.addEventListener('click',atajo)

            select.append(createOption());
            select.lastChild.textContent = 'split';

            select.append(createOption());
            select.lastChild.textContent = 'subString';

            select.append(createOption());
            select.lastChild.textContent = 'slice';

            select.append(createOption());
            select.lastChild.textContent = 'replace';

            select.append(createOption());
            select.lastChild.textContent = 'indexOf';

            select.append(createOption());
            select.lastChild.textContent = 'includes';

            select.append(createOption());
            select.lastChild.textContent = 'concat';

            select.append(createOption());
            select.lastChild.textContent = 'match';

            select.append(createOption());
            select.lastChild.textContent = 'replaceAll';

            select.append(createOption());
            select.lastChild.textContent = 'toLowerCase';

            select.append(createOption());
            select.lastChild.textContent = 'toUpperCase';


            section.lastChild.append(createDiv());
            let parameters = section.lastChild.lastChild;
            parameters.classList.add('parameters')
            parameters.append(createDiv());
            parameters.lastChild.append(createInput());
            parameters.lastChild.lastChild.classList.add('input-p1');
            parameters.lastChild.setAttribute('name', 'p1Div')
            parameters.lastChild.append(createLabel());
            parameters.lastChild.lastChild.textContent = 'Parametro 1';
            parameters.append(createDiv());
            parameters.lastChild.append(createInput());
            parameters.lastChild.lastChild.classList.add('input-p2');
            parameters.lastChild.append(createLabel());
            parameters.lastChild.lastChild.textContent = 'Parametro 2';
            parameters.firstChild.style.display = 'none'
            parameters.lastChild.style.display = 'none'


            section.append(createDiv());
            section.lastChild.classList.add('strBlock');

            section.lastChild.append(createTextarea());
            section.lastChild.lastChild.classList.add('input');
            section.lastChild.lastChild.style.display = 'flex';

            section.lastChild.append(createTextarea());
            section.lastChild.lastChild.classList.add('output');
            section.lastChild.lastChild.style.display = 'flex';

            function StrMethod(e) {
                
                if (e.target.value==='trim') {
                    str = 'trim';
                    e.target.nextSibling.textContent = 'Elimina los espacios situados antes y despues del texto'
                    e.target.parentElement.nextSibling.firstChild.style.display = 'none'
                    e.target.parentElement.nextSibling.firstChild.nextSibling.style.display = 'none'

                }else if (e.target.value==='split') {
                    str = 'split';
                    e.target.nextSibling.textContent = 'Divide el texto en un array de substrings'
                    e.target.parentElement.nextSibling.firstChild.style.display = 'flex'
                    e.target.parentElement.nextSibling.firstChild.lastChild.textContent = 'Parámetro 1: Especifica el carácter usado para la división (opcional)'
                    e.target.parentElement.nextSibling.firstChild.nextSibling.style.display = 'flex'
                    e.target.parentElement.nextSibling.firstChild.nextSibling.lastChild.textContent = 'Parámetro 2: Especifica el número de divisiones (opcional)'

                }else if (e.target.value==='subString') {
                    str = 'substring';
                    e.target.nextSibling.textContent = 'Extrae porciones de texto'
                    e.target.parentElement.nextSibling.firstChild.style.display = 'flex'
                    e.target.parentElement.nextSibling.firstChild.lastChild.textContent = 'Parámetro 1: Especifica el índice a partir del cual realizar la extracción (requerido)'
                    e.target.parentElement.nextSibling.firstChild.nextSibling.style.display = 'flex'
                    e.target.parentElement.nextSibling.firstChild.nextSibling.lastChild.textContent = 'Parámetro 2: Especifica el índice donde acaba la extracción (opcional)'

                }else if (e.target.value==='slice') {
                    str = 'slice'
                    e.target.nextSibling.textContent = 'Extrae porciones de texto'
                    e.target.parentElement.nextSibling.firstChild.style.display = 'flex'
                    e.target.parentElement.nextSibling.firstChild.lastChild.textContent = 'Parámetro 1: Especifica el índice a partir del cual realizar la separación (requerido)'
                    e.target.parentElement.nextSibling.firstChild.nextSibling.style.display = 'flex'
                    e.target.parentElement.nextSibling.firstChild.nextSibling.lastChild.textContent = 'Parámetro 2: Especifica el índice donde acaba la separación (opcional)'

                }else if (e.target.value==='replace') {
                    str = 'replace'
                    e.target.nextSibling.textContent = 'Sustituye una letra o fragmento de texto'
                    e.target.parentElement.nextSibling.firstChild.style.display = 'flex'
                    e.target.parentElement.nextSibling.firstChild.lastChild.textContent = 'Parámetro 1: Especifica la letra o fragmento a sustituir, sólo lo hará con la primera coincidencia (requerido)'
                    e.target.parentElement.nextSibling.firstChild.nextSibling.style.display = 'flex'
                    e.target.parentElement.nextSibling.firstChild.nextSibling.lastChild.textContent = 'Parámetro 2: Especifica la letra o fragmento nuevos (requerido)'

                }else if (e.target.value==='indexOf') {
                    str = 'indexOf'
                    e.target.nextSibling.textContent = 'Encuentra el índice donde se encuentra la letra o fragmento especificado'
                    e.target.parentElement.nextSibling.firstChild.style.display = 'flex'
                    e.target.parentElement.nextSibling.firstChild.lastChild.textContent = 'Parámetro 1: Especifica la letra o fragmento a localizar (requerido)'
                    e.target.parentElement.nextSibling.firstChild.nextSibling.style.display = 'flex'
                    e.target.parentElement.nextSibling.firstChild.nextSibling.lastChild.textContent = 'Parámetro 2: Especifica a partir de cual posición realizar la búsqueda (opcional, por defecto es 0)'

                }else if (e.target.value==='includes') {
                    str = 'includes'
                    e.target.nextSibling.textContent = 'Averigua si cierta letra, palabra o fragmento se encuentran en el texto'
                    e.target.parentElement.nextSibling.firstChild.style.display = 'flex'
                    e.target.parentElement.nextSibling.firstChild.lastChild.textContent = 'Parámetro 1: Especifica la letra o fragmento que debe ser encontrado (requerido)'
                    e.target.parentElement.nextSibling.firstChild.nextSibling.style.display = 'flex'
                    e.target.parentElement.nextSibling.firstChild.nextSibling.lastChild.textContent = 'Parámetro 2: Especifica a partir de cual posición realizar la búsqueda (opcional, por defecto es 0)'

                }else if (e.target.value==='concat') {
                    str = 'concat'
                    e.target.nextSibling.textContent = 'Añade letra, palabra o fragmento al texto'
                    e.target.parentElement.nextSibling.firstChild.style.display = 'flex'
                    e.target.parentElement.nextSibling.firstChild.lastChild.textContent = 'Parámetro 1: Especifica la letra o fragmento a añadir, pueden ser varios separados por comas (requerido)'
                    e.target.parentElement.nextSibling.firstChild.nextSibling.style.display = 'none'

                }else if (e.target.value==='match') {
                    str = 'match'
                    e.target.nextSibling.textContent = 'Devuelve las coincidencias del texto'
                    e.target.parentElement.nextSibling.firstChild.style.display = 'flex'
                    e.target.parentElement.nextSibling.firstChild.lastChild.textContent = 'Parámetro 1: Especifica la expresión regular para realizar la búsqueda (requerido)'
                    e.target.parentElement.nextSibling.firstChild.nextSibling.style.display = 'none'

                }else if (e.target.value==='replaceAll') {
                    str = 'replaceAll'
                    e.target.nextSibling.textContent = 'Sustituye todas las letras, palabras o fragmentos especificados por otros'
                    e.target.parentElement.nextSibling.firstChild.style.display = 'flex'
                    e.target.parentElement.nextSibling.firstChild.lastChild.textContent = 'Parámetro 1: Especifica las letras o fragmentos a sustituir (requerido)'
                    e.target.parentElement.nextSibling.firstChild.nextSibling.style.display = 'flex'
                    e.target.parentElement.nextSibling.firstChild.nextSibling.lastChild.textContent = 'Parámetro 2: Especifica la letra o fragmento nuevos (requerido)'

                }else if (e.target.value==='toLowerCase') {
                    str = 'toLowerCase'
                    e.target.nextSibling.textContent = 'Convierte todo el texto a minúscula'
                    e.target.parentElement.nextSibling.firstChild.style.display = 'none'
                    e.target.parentElement.nextSibling.firstChild.nextSibling.style.display = 'none'

                }else if (e.target.value==='toUpperCase') {
                    str = 'toUpperCase'
                    e.target.nextSibling.textContent = 'Convierte todo el texto a mayúscula'
                    e.target.parentElement.nextSibling.firstChild.style.display = 'none'
                    e.target.parentElement.nextSibling.firstChild.nextSibling.style.display = 'none'
                }
            }

            function atajo (e) {
                let input = e.target.parentElement.parentElement.parentElement.querySelector('.input');
                let output = e.target.parentElement.parentElement.parentElement.querySelector('.output');
                if (output.value !== '') {
                    input.value = output.value;
                    output.value = '';
                }

            }

}

function evaluarStr(e) {
    /*           e.target.parentElement.nextSibling.firstChild.lastChild.firstChild.firstChild.value
                e.target.parentElement.nextSibling.firstChild.lastChild.lasttChild.firstChild.value */
    
                try {
                    let p1 = "e.target.parentElement.nextSibling.querySelector('.input-p1').value";
                    let p2 = "e.target.parentElement.nextSibling.querySelector('.input-p2').value";
                    let input = "e.target.parentElement.nextSibling.querySelector('.input').value";
                    let output = e.target.parentElement.nextSibling.querySelector('.output');
    
                    if (str!=='split') {
                        if (str==='toUpperCase'||'toLowerCase'||'trim') {
                            sinParametro(input)
                        } 
        
                        if (str==='concat'||'match') {
                            unParametro(p1,input)
                        }
        
                        if (str==='replace'||'replaceAll'||'slice'||'substring'||'indexOf'||'includes') {
                            dosParametros(p1,p2,input)
                        } 
                    } else {
                        if (eval(p2)!=='') {
                            let previo = eval(`${input}`+'.split'+`(${p1},${p2})`)
                            output.value = '['+previo+']'


                        } else {
                            let previo = eval(`${input}`+'.split'+`(${p1})`)
                            output.value = '['+previo+']'
                    }
                        
                    }
                    
                    function dosParametros (p1,p2,input) {
                        //console.log(eval(p2))
                        //console.log(eval(p1))
                        output.value = eval(`${input}`+'.'+`${str}`+`(${p1},${p2})`)
                        return output.value
                    }
                    function unParametro (p1,input) {
                        console.log(eval(p1))
                        return output.value = eval(`${input}`+'.'+`${str}`+`(${p1})`)
                    }
                    function sinParametro(input) {
                        return output.value = eval(`${input}`+'.'+`${str}`+`()`)
                    }
                    output.style.backgroundColor = "lightgreen";
    
                } catch (error) {
                    console.log('loolololl')
                    console.log(error.message)
                    let output = e.target.parentElement.nextSibling.querySelector('.output')
                    output.style.backgroundColor = "red";
                    output.value = error.message;
                }
    
                //eval("'Hola soy el chipiiii'.replaceAll('i','a')")
            }