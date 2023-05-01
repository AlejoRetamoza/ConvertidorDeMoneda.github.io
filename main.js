let inputARS = document.getElementById("inputARS");
let inputUSD = document.getElementById("inputUSD");
let price = document.getElementById("price");
let btn = document.getElementById("boton");
let u$d ;


let apiUrl = 'https://api.bluelytics.com.ar/v2/latest';

async function obtenerPrecioDolarBlue() {
  try {
    const response = await fetch(apiUrl);
    
    if (response.ok) {
      const data = await response.json();
      const precioDolarBlue = data.blue.value_sell;
      return precioDolarBlue;
    } else {
      throw new Error('Error al obtener el precio del dólar blue');
    }
  } catch (error) {
    console.error(error);
  }
}

async function mostrarPrecioDolarBlue() {
  try {
    u$d = await obtenerPrecioDolarBlue();
    price.innerHTML = 'Dolar blue = $' + u$d;
  } catch (error) {
    console.error(error);
  }
}

mostrarPrecioDolarBlue();


function cuenta (){
    let pesos = parseInt(inputARS.value);
    let dolar = parseInt(inputUSD.value);

    if(pesos != 0 && isNaN(dolar)) {
        let resultado = pesos/u$d;
        inputUSD.value = resultado.toFixed(2)

    } else if (isNaN(pesos) && dolar !=0) {
        let resultado2 = dolar*u$d;
        inputARS.value = resultado2.toFixed(2)
    
    } else {
        alert('Ingrese solo uno de los dos valores por favor')
    }
}

btn.addEventListener('click',cuenta);
inputARS.addEventListener('input', function (){
    if ( inputARS.value == ''){
        inputUSD.value = '';

    }
})

inputUSD.addEventListener('input', function (){
    if ( inputUSD.value == ''){
        inputARS.value = '';

    }
})

    

