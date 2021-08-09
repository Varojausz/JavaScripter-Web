let array = 'sort'
        function crearArrayer () {
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
            boton.addEventListener("click",evaluarArray)

            
            let boton2 = boton.nextSibling;
            boton2.textContent = "+"
            boton2.classList.add('two')
            boton2.addEventListener("click",crearArrayer)

            
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
            table.lastChild.textContent = 'Array Methods';

            table.append(createTr())
            let fila = table.lastChild;
            fila.append(createTh())
            fila.lastChild.append(createLink());
            fila.lastChild.lastChild.textContent = 'sort'
            fila.lastChild.lastChild.setAttribute("href", "https://www.w3schools.com/jsref/jsref_sort.asp")
            fila.lastChild.lastChild.setAttribute("target", "_blank")

            fila.append(createTh())
            fila.lastChild.append(createLink());
            fila.lastChild.lastChild.textContent = 'join'
            fila.lastChild.lastChild.setAttribute("href", "https://www.w3schools.com/jsref/jsref_join.asp")
            fila.lastChild.lastChild.setAttribute("target", "_blank")

            fila.append(createTh())
            fila.lastChild.append(createLink());
            fila.lastChild.lastChild.textContent = 'splice'
            fila.lastChild.lastChild.setAttribute("href", "https://www.w3schools.com/jsref/jsref_splice.asp")
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
            fila.lastChild.lastChild.textContent = 'reverse'
            fila.lastChild.lastChild.setAttribute("href", "https://www.w3schools.com/jsref/jsref_reverse.asp")
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

            strConfig.lastChild.textContent = 'Ordena los elementos de un array, por defecto es alfabeticamente y numericamente ascendente'
            let select = strConfig.firstChild

            select.append(createOption());
            select.lastChild.textContent = 'sort';
            /* strConfig.lastChild.lastChild.addEventListener('change', trimMethod); */
            select.addEventListener('change',ArrayMethod)
            select.addEventListener('click',atajo)

            select.append(createOption());
            select.lastChild.textContent = 'join';

            select.append(createOption());
            select.lastChild.textContent = 'splice';

            select.append(createOption());
            select.lastChild.textContent = 'slice';

            select.append(createOption());
            select.lastChild.textContent = 'reverse';

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
            parameters.lastChild.lastChild.textContent = 'Función de comparación (opcional)';
            parameters.append(createDiv());
            parameters.lastChild.append(createInput());
            parameters.lastChild.lastChild.classList.add('input-p2');
            parameters.lastChild.append(createLabel());
            parameters.lastChild.lastChild.textContent = 'Parametro 2';
            parameters.append(createDiv());
            parameters.lastChild.append(createInput());
            parameters.lastChild.lastChild.classList.add('input-p3');
            parameters.lastChild.append(createLabel());
            parameters.lastChild.lastChild.textContent = 'Parametro 3';
            parameters.firstChild.style.display = 'flex'
            parameters.firstChild.nextSibling.style.display = 'none'
            parameters.lastChild.style.display = 'none'


            section.append(createDiv());
            section.lastChild.classList.add('strBlock');

            section.lastChild.append(createTextarea());
            section.lastChild.lastChild.classList.add('input');
            section.lastChild.lastChild.style.display = 'flex';

            section.lastChild.append(createTextarea());
            section.lastChild.lastChild.classList.add('output');
            section.lastChild.lastChild.style.display = 'flex';

            function ArrayMethod(e) {
                
                if (e.target.value==='sort') {
                    array = 'sort';
                    e.target.nextSibling.textContent = 'Ordena los elementos de un array, por defecto es alfabeticamente y numericamente ascendente'
                    e.target.parentElement.nextSibling.firstChild.style.display = 'flex'
                    e.target.parentElement.nextSibling.firstChild.nextSibling.style.display = 'none'
                    e.target.parentElement.nextSibling.lastChild.style.display = 'none'

                }else if (e.target.value==='join') {
                    array = 'join';
                    e.target.nextSibling.textContent = 'Convierte los elementos de un array en un string'
                    e.target.parentElement.nextSibling.firstChild.style.display = 'flex'
                    e.target.parentElement.nextSibling.firstChild.lastChild.textContent = 'Parámetro 1: Especifica el separador usado para la división, por defecto es la coma (opcional)'
                    e.target.parentElement.nextSibling.firstChild.nextSibling.style.display = 'none'
                    e.target.parentElement.nextSibling.firstChild.nextSibling.lastChild.textContent = 'Parámetro 2: Especifica el número de divisiones (opcional)'
                    e.target.parentElement.nextSibling.lastChild.style.display = 'none'

                }else if (e.target.value==='splice') {
                    array = 'splice';
                    e.target.nextSibling.textContent = 'Quita o añade elementos a un array'
                    e.target.parentElement.nextSibling.firstChild.style.display = 'flex'
                    e.target.parentElement.nextSibling.firstChild.lastChild.textContent = 'Parámetro 1: Posición en la que quitar o añadir elementos (requerido)'
                    e.target.parentElement.nextSibling.firstChild.nextSibling.style.display = 'flex'
                    e.target.parentElement.nextSibling.firstChild.nextSibling.lastChild.textContent = 'Parámetro 2: Número de elementos que deban ser retirados (opcional)'
                    e.target.parentElement.nextSibling.lastChild.style.display = 'flex'
                    e.target.parentElement.nextSibling.lastChild.lastChild.textContent = 'Parámetro 3: Elementos que deban ser adicionados (opcional)'

                }else if (e.target.value==='slice') {
                    array = 'slice'
                    e.target.nextSibling.textContent = 'Devuelve elementos del array'
                    e.target.parentElement.nextSibling.firstChild.style.display = 'flex'
                    e.target.parentElement.nextSibling.firstChild.lastChild.textContent = 'Parámetro 1: Especifica el índice a partir del cual realizar la separación (requerido)'
                    e.target.parentElement.nextSibling.firstChild.nextSibling.style.display = 'flex'
                    e.target.parentElement.nextSibling.firstChild.nextSibling.lastChild.textContent = 'Parámetro 2: Especifica el índice donde acaba la separación (opcional)'
                    e.target.parentElement.nextSibling.lastChild.style.display = 'none'

                }else if (e.target.value==='reverse') {
                    array = 'reverse'
                    e.target.nextSibling.textContent = 'Invierte el orden del array'
                    e.target.parentElement.nextSibling.firstChild.style.display = 'none'
                    e.target.parentElement.nextSibling.firstChild.lastChild.textContent = 'Parámetro 1: Especifica la letra o fragmento a sustituir, sólo lo hará con la primera coincidencia (requerido)'
                    e.target.parentElement.nextSibling.firstChild.nextSibling.style.display = 'none'
                    e.target.parentElement.nextSibling.firstChild.nextSibling.lastChild.textContent = 'Parámetro 2: Especifica la letra o fragmento nuevos (requerido)'
                    e.target.parentElement.nextSibling.lastChild.style.display = 'none'

                }else if (e.target.value==='indexOf') {
                    array = 'indexOf'
                    e.target.nextSibling.textContent = 'Encuentra el índice donde se encuentra la letra o fragmento especificado'
                    e.target.parentElement.nextSibling.firstChild.style.display = 'flex'
                    e.target.parentElement.nextSibling.firstChild.lastChild.textContent = 'Parámetro 1: Especifica la letra o fragmento a localizar (requerido)'
                    e.target.parentElement.nextSibling.firstChild.nextSibling.style.display = 'flex'
                    e.target.parentElement.nextSibling.firstChild.nextSibling.lastChild.textContent = 'Parámetro 2: Especifica a partir de cual posición realizar la búsqueda (opcional, por defecto es 0)'
                    e.target.parentElement.nextSibling.lastChild.style.display = 'none'

                }else if (e.target.value==='includes') {
                    array = 'includes'
                    e.target.nextSibling.textContent = 'Averigua si cierta letra, palabra o fragmento se encuentran en el texto'
                    e.target.parentElement.nextSibling.firstChild.style.display = 'flex'
                    e.target.parentElement.nextSibling.firstChild.lastChild.textContent = 'Parámetro 1: Especifica la letra o fragmento que debe ser encontrado (requerido)'
                    e.target.parentElement.nextSibling.firstChild.nextSibling.style.display = 'flex'
                    e.target.parentElement.nextSibling.firstChild.nextSibling.lastChild.textContent = 'Parámetro 2: Especifica a partir de cual posición realizar la búsqueda (opcional, por defecto es 0)'
                    e.target.parentElement.nextSibling.lastChild.style.display = 'none'

                }else if (e.target.value==='concat') {
                    array = 'concat'
                    e.target.nextSibling.textContent = 'Añade letra, palabra o fragmento al texto'
                    e.target.parentElement.nextSibling.firstChild.style.display = 'flex'
                    e.target.parentElement.nextSibling.firstChild.lastChild.textContent = 'Parámetro 1: Especifica la letra o fragmento a añadir, pueden ser varios separados por comas (requerido)'
                    e.target.parentElement.nextSibling.firstChild.nextSibling.style.display = 'none'
                    e.target.parentElement.nextSibling.lastChild.style.display = 'none'

                }else if (e.target.value==='match') {
                    array = 'match'
                    e.target.nextSibling.textContent = 'Devuelve las coincidencias del texto'
                    e.target.parentElement.nextSibling.firstChild.style.display = 'flex'
                    e.target.parentElement.nextSibling.firstChild.lastChild.textContent = 'Parámetro 1: Especifica la expresión regular para realizar la búsqueda (requerido)'
                    e.target.parentElement.nextSibling.firstChild.nextSibling.style.display = 'none'
                    e.target.parentElement.nextSibling.lastChild.style.display = 'none'

                }else if (e.target.value==='replaceAll') {
                    array = 'replaceAll'
                    e.target.nextSibling.textContent = 'Sustituye todas las letras, palabras o fragmentos especificados por otros'
                    e.target.parentElement.nextSibling.firstChild.style.display = 'flex'
                    e.target.parentElement.nextSibling.firstChild.lastChild.textContent = 'Parámetro 1: Especifica las letras o fragmentos a sustituir (requerido)'
                    e.target.parentElement.nextSibling.firstChild.nextSibling.style.display = 'flex'
                    e.target.parentElement.nextSibling.firstChild.nextSibling.lastChild.textContent = 'Parámetro 2: Especifica la letra o fragmento nuevos (requerido)'
                    e.target.parentElement.nextSibling.lastChild.style.display = 'none'

                }else if (e.target.value==='toLowerCase') {
                    array = 'toLowerCase'
                    e.target.nextSibling.textContent = 'Convierte todo el texto a minúscula'
                    e.target.parentElement.nextSibling.firstChild.style.display = 'none'
                    e.target.parentElement.nextSibling.firstChild.nextSibling.style.display = 'none'
                    e.target.parentElement.nextSibling.lastChild.style.display = 'none'

                }else if (e.target.value==='toUpperCase') {
                    array = 'toUpperCase'
                    e.target.nextSibling.textContent = 'Convierte todo el texto a mayúscula'
                    e.target.parentElement.nextSibling.firstChild.style.display = 'none'
                    e.target.parentElement.nextSibling.firstChild.nextSibling.style.display = 'none'
                    e.target.parentElement.nextSibling.lastChild.style.display = 'none'
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

function evaluarArray(e) {
    /*           e.target.parentElement.nextSibling.firstChild.lastChild.firstChild.firstChild.value
                e.target.parentElement.nextSibling.firstChild.lastChild.lasttChild.firstChild.value */
    
                try {
                    let p1 = "e.target.parentElement.nextSibling.querySelector('.input-p1').value";
                    let p2 = "e.target.parentElement.nextSibling.querySelector('.input-p2').value";
                    let p3 = "e.target.parentElement.nextSibling.querySelector('.input-p3').value";
                    let input = "e.target.parentElement.nextSibling.querySelector('.input').value";
                    let output = e.target.parentElement.nextSibling.querySelector('.output');
                    
                    
    
                    /* if (array!=='join') { */

                        if (array=== 'reverse') {
                            arraySinParametro(input)
                        } 
        
                        if (array==='push'||'join'||'sort') {
                            //console.log('Un parametro()')
                            (eval(p1)==='') && (p1=undefined)
                            console.log(p1)
                            arrayUnParametro(p1,input)
                        }
                        if (array==='splice') {
                            (eval(p2)==='') && (p2=undefined)
                            (eval(p3)==='') && (p3=undefined)
                            arrayTresParametros(p1,p2,p3)
                        }
        
                        if (array==='slice'||'indexOf'||'includes') {
                            arrayDosParametros(p1,p2,input)
                        } 

/*                     } else {
                        if (eval(p1)!=='') {
                            console.log('un parametro()')
                            //output.value = eval(`${'['+input1+']'}`+'.join'+`(${p1})`)
                            output.value = eval(`${eval('['+input+']')}`+'.join'+`(${p1})`)
                            //NO ME PREGUNTES POR QUÉ COÑO SOLO FUNCIONA CON ESE EVAL NESTED

                        } else {
                            console.log('sin parametro()')
                            console.log(`${'['+input+']'}`+'.join'+`()`)
                            console.log(eval(`${'['+input+']'}`+'.join'+`()`))
                            output.value = eval(`${eval('['+input+']')}`+'.join'+`()`)
                    }
                        
                    } */
                    
                    function arrayTresParametros (p1,p2,p3) {
                        p1 = eval(p1); p2 = eval(p2); p3 = eval(p3)
                        input3 = eval(document.querySelector('.input').value)
                        let input4 = input3.splice(p1,p2,p3)
                        output.value = {input3}

                        //output.value =  '['+`${input3}`+']' 
                        //previo = output.value;
                        //previo = `${previo}`;
                        //previo.replaceAll('[','["').replaceAll(',','","').replaceAll(']','"]')
                        //alert(previo)
                        console.log(input3)
                        console.log(input4)
                        console.log(output.value)
                        return output.value
                    }
                    function arrayDosParametros (p1,p2,input) {
                        //console.log(eval(p2))
                        //console.log(eval(p1))
                        output.value = eval(`${eval('['+input+']')}`+'.'+`${array}`+`(${p1},${p2})`)
                        return output.value
                    }
                    function arrayUnParametro (p1,input) {
                        console.log(eval(p1))
                        return output.value = eval(`${eval('['+input+']')}`+'.'+`${array}`+`(${p1})`)
                    }
                    function arraySinParametro(input) {
                        return output.value = eval(`${eval('['+input+']')}`+'.'+`${array}`+`()`)
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