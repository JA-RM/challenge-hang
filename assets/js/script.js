var btn = document.querySelector('[data-btn]'); 
    var palabras = []; 
    btn.addEventListener('click', () =>{ 
    const input = document.querySelector('[data-input]'); 
    const word = input.value; 
    const may = word.toUpperCase();
    palabras.push(may); 
    localStorage.setItem('almacen', JSON.stringify(palabras)); 
    alert('Palabra agregada')
    
});

