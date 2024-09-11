let num = document.getElementById('Num');
let Celsius = document.getElementById('Celsius');
let Fahrenheit = document.getElementById('Fahrenheit');
let button = document.getElementById('button');
let display = document.getElementById('result')


button.onclick = () =>{
    num = Number(num.value);
    if ( num == ''){
        window.alert("Empty box")
    }
    if(Celsius.checked){
        result = num * 9/5 + 32;
        display.textContent = result.toFixed(1) + '°C'

    }else if(Fahrenheit.checked){
        result = (num -32) * 5/9;
        display.textContent = result.toFixed(1) + '°F'
    }else{
         display.textContent = 'select unit'
        
    }
}
