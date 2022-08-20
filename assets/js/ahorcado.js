function palabrabrowser(){ 
    var arr = JSON.parse(localStorage.getItem ( 'almacen' )); 
    var palabra = arr[Math.floor(Math.random()*arr.length)]
    palabrarandom = palabra;

    return palabrarandom;
}


var tablero = document.getElementById('raya').getContext('2d');
var letras = [];
var palabraCorrecta = [];
var errores = 0;


function dibujarLineas(){
    tablero.lineWidth = 6 
    tablero.linecap = "round" 
    tablero.lineJoin = "round"
    tablero.strokeStyle = "#0A3871"
    tablero.beginPath()

    var ancho=600/palabrarandom.length 
    for(let i = 0; i < palabrarandom.length; i++){
        tablero.moveTo(500+(ancho*i),640)
        tablero.lineTo(550+(ancho*i),640)
    }
    tablero.stroke()
    tablero.closePath()
} dibujarLineas(palabrabrowser())

function escribirLetraCorrecta(index){
    tablero.font = 'bold 52px Inter';
    tablero.lineWidth = 6
    tablero.linecap = "round"
    tablero.lineJoin = "round"
    tablero.fillStyle = "#0A3871"
    var ancho=600/palabrarandom.length
    tablero.fillText(palabrarandom[index],505+(ancho*index),620)
    
}

function escribirLetraIncorrecta(letra, errorsLeft){ 
    tablero.font = 'bold 40px Inter';
    tablero.lineWidth = 6
    tablero.linecap = "round"
    tablero.lineJoin = "round"
    tablero.strokeStyle = "#0A3871"

    tablero.fillText(letra, 535+(40*(10-errorsLeft)), 710,40)
}

function verificarLetraClicada(key){
    if (letras.length<1 || letras.indexOf(key)<0) 
    {
        letras.push(key)
        return false
    } else {
        letras.push(key)
        return true
   }
}

function ganador(){
   if(palabraCorrecta.length == palabrarandom.length){
      alert('Correcto!!');
      document.location.reload();
      }
}

function perder(){
   alert('Lo siento, intentalo de nuevo!!');
   document.location.reload();
}

function adicionarLetraCorrecta(i){
    palabraCorrecta += palabrarandom[i].toUpperCase()
      setTimeout(ganador,1000)
    }
console.log(palabraCorrecta.every[palabrarandom.every])


function adicionarLetraIncorrecta(letter){ 
    if (palabrarandom.indexOf(letter)<=0) {
        
        errores+=1

        function cargaContextoCanvas(idCanvas){
            var elemento = document.getElementById(idCanvas);
            if(elemento && elemento.getContext){
               var contexto = elemento.getContext('2d');
               if(contexto){
                  return contexto;
               }
            }
            return false;
         }
         function borrarCanvas(contexto, anchura, altura){
            contexto.clearRect(0,0,anchura,anchura);
         }
         function dibujaHorca(ctx){
            var img = new Image(); 
           img.onload = function(){
              ctx.fillStyle = '#f2d666';
              ctx.drawImage(img,70,40);
              ctx.fillRect(172,12,4,28);
           } 
           img.src = './assets/img/ahorcado/0.png';

            
         }
         function dibujaCabeza(ctx){
            var img = new Image(); 
            img.onload = function(){
               ctx.fillStyle = '#f2d666';
               ctx.drawImage(img,300,45);
               ctx.fillRect(172,12,4,28);
            } 
            img.src = './assets/img/ahorcado/1.png'; 
         }
         function dibujaCuerpo(ctx){
             var img = new Image(); 
             img.onload = function(){
                ctx.fillStyle = '#f2d666';
                ctx.drawImage(img,300,105);
                ctx.fillRect(172,12,4,28);
             } 
             img.src = './assets/img/ahorcado/2.png'; 
          }
         
         function dibujaBrazoIzq(ctx){
             var img = new Image(); 
             img.onload = function(){
                ctx.fillStyle = '#f2d666';
                ctx.drawImage(img,278,110);
                ctx.fillRect(172,12,4,28);
             } 
             img.src = './assets/img/ahorcado/3.png'; 
         }
         function dibujaBrazoDer(ctx){
             var img = new Image(); 
             img.onload = function(){
                ctx.fillStyle = '#f2d666';
                ctx.drawImage(img,320,110);
                ctx.fillRect(172,12,4,28);
             } 
             img.src = './assets/img/ahorcado/4.png'; 
         }
         function dibujaPiernaIzq(ctx){
             var img = new Image(); 
             img.onload = function(){
                ctx.fillStyle = '#f2d666';
                ctx.drawImage(img,290,160);
                ctx.fillRect(172,12,4,28);
             } 
             img.src = './assets/img/ahorcado/5.png'; 
         }
         function dibujaPiernaDer(ctx){
             var img = new Image(); 
             img.onload = function(){
                ctx.fillStyle = '#f2d666';
                ctx.drawImage(img,310,160);
                ctx.fillRect(172,12,4,28);
             } 
             img.src = './assets/img/ahorcado/6.png'; 
         }
         
         
         function dibujaAhorado(errores){
            var contexto = cargaContextoCanvas('raya');
            if(contexto){
               dibujaHorca(contexto);
               if(errores==1){
                  dibujaCabeza(contexto)
               }
               contexto.fillStyle = '#1f3e18';
               if(errores==2){
                  dibujaCuerpo(contexto)
               }
               if(errores==3){
                  dibujaBrazoIzq(contexto)
               }
               if(errores==4){
                  dibujaBrazoDer(contexto)
               }
               if(errores==5){
                  dibujaPiernaIzq(contexto)
               }
               if(errores==6){
                  dibujaPiernaDer(contexto)
               }
               
            }
         }
         dibujaAhorado(errores)
        
        console.log(errores)
        if(errores==6){
         setTimeout(perder,1000);
        }
    }
    }



document.onkeydown = (e) => {
    let letra=e.key.toUpperCase()
    if (!verificarLetraClicada(e.key)) {
        if(palabrarandom.includes(letra)){ 
            
            adicionarLetraCorrecta(palabrarandom.indexOf(letra))
            
            for (let i=0;i<palabrarandom.length;i++) {
                if(palabrarandom[i]===letra){
                    escribirLetraCorrecta(i)
                    

                }
                
            }
      
        
    } else {
        if(!verificarLetraClicada(e.key)) return
        adicionarLetraIncorrecta(letra)
        escribirLetraIncorrecta(letra,errores)
        
    }
}
}; 


