const box = document.querySelector('.box')
const tecla = document.querySelector('.tecla')
const nomeCor = document.querySelector('.nome-cor')
const hex = document.querySelector('.hex')


function mudarCorDoBg(event){
    switch (event.key){
        case 'a':
            document.body.setAttribute('class', 'a')
            tecla.innerHTML = 'A'
            nomeCor.innerHTML = 'Anil'
            hex.innerHTML = '#233f61'
            break
        case 'b':
            document.body.setAttribute('class','b')
            tecla.innerHTML = 'B'
            nomeCor.innerHTML = 'Borgonha'
            hex.innerHTML = '#900020'
            break
        case 'c':
            document.body.setAttribute('class' ,'c')
            tecla.innerHTML = 'C'
            nomeCor.innerHTML = 'Ciano'
            hex.innerHTML = '#00FFFF'
            break
        case 'd':
            document.body.setAttribute('class', 'd')
            tecla.innerHTML = 'D'
            nomeCor.innerHTML = 'Dourado'
            hex.innerHTML = '#daa520'
            break
        case 'e':    
            document.body.setAttribute('class', 'e')
            tecla.innerHTML = 'E'
            nomeCor.innerHTML = 'Eucalipto'
            hex.innerHTML ='#6c704e'
            break
        case 'f':
            document.body.setAttribute('class', 'f')
            tecla.innerHTML = 'F'
            nomeCor.innerHTML = 'Ferrugem'
            hex.innerHTML ='#aa5a24'
            break
        case 'g':
            document.body.setAttribute('class', 'g')
            tecla.innerHTML = 'G'
            nomeCor.innerHTML = 'Goiaba'
            hex.innerHTML ='#be5b59'
            break  
        case 'h':
            document.body.setAttribute('class', 'h')
            tecla.innerHTML = 'H'
            nomeCor.innerHTML = 'Hortelã'
            hex.innerHTML ='#80a358'
            break
        case 'i':
            document.body.setAttribute('class', 'i')
            tecla.innerHTML = 'I'
            nomeCor.innerHTML = 'Indigo Blue'
            hex.innerHTML ='#3d415f'
            break
        case 'j':
            document.body.setAttribute('class', 'j')
            tecla.innerHTML = 'J'
            nomeCor.innerHTML = 'Jade'
            hex.innerHTML ='#00a86b'
            break
        case 'k':    
            document.body.setAttribute('class', 'k')
            tecla.innerHTML = 'K'
            nomeCor.innerHTML = 'Khaki'
            hex.innerHTML ='#f0e68c'
            break
        case 'l': 
            document.body.setAttribute('class', 'l')
            tecla.innerHTML = 'L'
            nomeCor.innerHTML = 'Lilas'
            hex.innerHTML ='#c8a2c8'
            break
        case 'm':  
            document.body.setAttribute('class', 'm')
            tecla.innerHTML = 'M'
            nomeCor.innerHTML ='Mirtilo'
            hex.innerHTML ='#6c6490'
            break
        case 'n':
            document.body.setAttribute('class', 'n')
            tecla.innerHTML = 'N'
            nomeCor.innerHTML = 'Neve'
            hex.innerHTML ='#FFFafa'
            break
        case 'o':
            document.body.setAttribute('class', 'o')
            tecla.innerHTML = 'O'
            nomeCor.innerHTML = 'Ocre'
            hex.innerHTML ='#cc7722'
            break  
        case 'p':
            document.body.setAttribute('class', 'p')
            tecla.innerHTML = 'P'
            nomeCor.innerHTML = 'Pêssego'
            hex.innerHTML ='#eabda3'
            break
        case 'q':
            document.body.setAttribute('class', 'q')
            tecla.innerHTML = 'Q'
            nomeCor.innerHTML = 'Quartz'
            hex.innerHTML ='#ac7175'
            break
        case 'r':
            document.body.setAttribute('class', 'r')
            tecla.innerHTML = 'R'
            nomeCor.innerHTML = 'Rosa'
            hex.innerHTML ='#ff007f'
            break
        case 's':
            document.body.setAttribute('class', 's')
            tecla.innerHTML = 'S'
            nomeCor.innerHTML ='Siena'
            hex.innerHTML ='#ff8247'
            break
        case 't':
            document.body.setAttribute('class', 't')
            tecla.innerHTML = 'T'
            nomeCor.innerHTML = 'Turquesa'
            hex.innerHTML ='#81d8d0'
            break
        case 'u':
            document.body.setAttribute('class', 'u')
            tecla.innerHTML = 'U'
            nomeCor.innerHTML = 'Urano'
            hex.innerHTML ='#CAF0F1'
            break
        case 'v':
            document.body.setAttribute('class', 'v')
            tecla.innerHTML = 'V'
            nomeCor.innerHTML ='Violeta'
            hex.innerHTML ='#9400d3'
            break
        case 'w':
            document.body.setAttribute('class', 'w')
            tecla.innerHTML = 'W'
            nomeCor.innerHTML ='Wisteria'
            hex.innerHTML ='#967de3'
            break
        case 'x':
            document.body.setAttribute('class', 'x')
            tecla.innerHTML = 'X'
            nomeCor.innerHTML ='Xanthic'
            hex.innerHTML ='#eeed09'
            break
        case 'y':
            document.body.setAttribute('class','y') 
            tecla.innerHTML = 'Y'
            nomeCor.innerHTML ='Yale blue'
            hex.innerHTML ='#0f4d92'
            break
        case 'z':
            document.body.setAttribute('class', 'z')
            tecla.innerHTML = 'Z'
            nomeCor.innerHTML ='Zaffre'
            hex.innerHTML = '#0014a8'
            break                                           
    }
}


//     if(event.key === 'a'){
//     document.body.setAttribute('class','a')
//     }else if(event.key === 'b'){
//         document.body.setAttribute('class','b')
//     }else if(event.key === 'c'){
//         document.body.setAttribute('class' ,'c')
//     }else if(event.key === 'd'){
//         document.body.setAttribute('class', 'd')
//     }else if(event.key === 'e'){
//         document.body.setAttribute('class', 'e')
//     }else if(event.key === 'f'){
//         document.body.setAttribute('class', 'f')
//     }else if(event.key === 'g'){
//         document.body.setAttribute('class', 'g')
//     }else if(event.key === 'h'){
//         document.body.setAttribute('class', 'h')
//     }else if(event.key === 'i'){
//         document.body.setAttribute('class', 'i')
//     }else if(event.key === 'j'){
//         document.body.setAttribute('class', 'j')
//     }else if(event.key === 'k'){
//         document.body.setAttribute('class', 'k')       
//     }else if(event.key === 'l'){
//         document.body.setAttribute('class', 'l')
//     }else if(event.key === 'm'){
//         document.body.setAttribute('class', 'm')
//     }else if(event.key === 'n'){
//         document.body.setAttribute('class', 'n')
//     }else if(event.key === 'o'){
//         document.body.setAttribute('class', 'o')
//     }else if(event.key === 'p'){
//         document.body.setAttribute('class', 'p')
//     }else if(event.key === 'q'){
//         document.body.setAttribute('class', 'q')
//     }else if(event.key === 'r'){
//         document.body.setAttribute('class', 'r')
//     }else if(event.key === 's'){
//         document.body.setAttribute('class', 's')
//     }else if(event.key === 't'){
//         document.body.setAttribute('class', 't')
//     }else if(event.key === 'u'){
//         document.body.setAttribute('class', 'u')
//     }else if(event.key === 'v'){
//         document.body.setAttribute('class', 'v')
//     }else if(event.key === 'w'){
//         document.body.setAttribute('class', 'w')
//     }else if(event.key === 'x'){
//         document.body.setAttribute('class', 'x')
//     }else if(event.key === 'y'){
//         document.body.setAttribute('class', 'y')
//     }else if(event.key === 'z'){
//         document.body.setAttribute('class', 'z')               
//     }
// }






window.addEventListener('keydown', mudarCorDoBg)