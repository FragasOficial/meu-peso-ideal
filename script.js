// const firstDiv = document.querySelector('.first-step');
// const secondDiv = document.querySelector('.second-step');
// const finalDiv = document.querySelector('.final-step');

// function go(currentStep, nextStep) {
//     let dNone, dBlock;

//     if (currentStep === 1) {
//         dNone = firstDiv;
//     } else if (currentStep === 2) {
//         dNone = secondDiv;
//     } else {
//         dNone = finalDiv;
//     }

//     if (nextStep === 1) {
//         dBlock = firstDiv;
//     } else if (nextStep === 2) {
//         dBlock = secondDiv;
//     } else {
//         dBlock = finalDiv;
//     }

//     dNone.style.display = 'none';
//     dBlock.style.display = 'block';
// }

// function validation(){
//     const peso = document.getElementById('peso');
//     const altura = document.getElementById('altura');

//     peso.style.border = 'none';
//     altura.style.border = 'none';

//     let valid = true;

//     if (!peso.value) {
//         peso.style.border = '0.02rem solid red';
//         valid = false;
//     }
//     if (!altura.value) {
//         altura.style.border = '0.02rem solid red';
//         valid = false;
//     }

//     if (!valid) {
//         if (!peso.value && !altura.value) {
//             console.log('Faltam inserir peso e altura');
//         }
//         return;
//     }

//     const imc = peso.value / (altura.value * altura.value);
//     const result = document.getElementById('resultado');

//     if(imc < 16){
//         console.log("Você está na magreza. Cuide da sua alimentação.");
//         result.innerHTML = "Você está na magreza. Cuide da sua alimentação.";

//     } else if(imc <= 16 && imc < 18.5){
//         console.log('Você está abaixo do peso. Cuide da sua alimentação.');
//         result.innerHTML = 'Você está abaixo do peso. Cuide da sua alimentação.';

//     } else if(imc >= 18.5 && imc < 25){
//         console.log('Você peso está normal. Parabéns!');
//         result.innerHTML = 'Você peso está normal. Parabéns!';

//     } else if(imc >= 25 && imc < 30){
//         console.log('Você está acima do peso. Obesidade nível 1. Cuide da sua saéde!');
//         result.innerHTML = 'Você está acima do peso. Obesidade nível 1. Cuide da sua saéde!';

//     }else if(imc > 30 && imc < 40){
//         console.log('Você está obeso(a). Obesidade nível 2. Cuide da sua alimentação. Procure um nutricionista!');
//         result.innerHTML = 'Você está obeso(a). Obesidade nível 2. Cuide da sua alimentação. Procure um nutricionista!';

//     } else{
//         console.log('Você em obesidade nível 3. Procure um nutricionista URGENTEMENTE!');
//         result.innerHTML = 'Você em obesidade nível 3. Procure um nutricionista URGENTEMENTE!';
//     }
// }

// const firstDiv = document.querySelector('.first-step');
// const secondDiv = document.querySelector('.second-step');
// const finalDiv = document.querySelector('.final-step');

// function go(currentStep, nextStep) {
//     let dNone, dBlock;

//     if (currentStep === 1) {
//         dNone = firstDiv;
//     } else if (currentStep === 2) {
//         dNone = secondDiv;
//     } else {
//         dNone = finalDiv;
//     }

//     if (nextStep === 1) {
//         dBlock = firstDiv;
//     } else if (nextStep === 2) {
//         dBlock = secondDiv;
//     } else {
//         dBlock = finalDiv;
//     }

//     dNone.style.display = 'none';
//     dBlock.style.display = 'block';
// }

// function validation(){
//     const peso = document.getElementById('peso');
//     const altura = document.getElementById('altura');

//     peso.style.border = 'none';
//     altura.style.border = 'none';

//     let valid = true;

//     if (!peso.value) {
//         peso.style.border = '0.02rem solid red';
//         valid = false;
//     }
//     if (!altura.value) {
//         altura.style.border = '0.02rem solid red';
//         valid = false;
//     }

//     if (!valid) {
//         if (!peso.value && !altura.value) {
//             console.log('Faltam inserir peso e altura');
//         }
//         return;
//     }

//     const imc = peso.value / (altura.value * altura.value);
//     const result = document.getElementById('resultado');

//     if(imc < 16){
//         console.log("Você está na magreza. Cuide da sua alimentação.");
//         result.innerHTML = "Você está na magreza. Cuide da sua alimentação.";
//     } else if(imc >= 16 && imc < 18.5){
//         console.log('Você está abaixo do peso. Cuide da sua alimentação.');
//         result.innerHTML = 'Você está abaixo do peso. Cuide da sua alimentação.';
//     } else if(imc >= 18.5 && imc < 25){
//         console.log('Seu peso está normal. Parabéns!');
//         result.innerHTML = 'Seu peso está normal. Parabéns!';
//     } else if(imc >= 25 && imc < 30){
//         console.log('Você está acima do peso. Obesidade nível 1. Cuide da sua saúde!');
//         result.innerHTML = 'Você está acima do peso. Obesidade nível 1. Cuide da sua saúde!';
//     } else if(imc >= 30 && imc < 35){
//         console.log('Você está obeso(a). Obesidade nível 2. Cuide da sua alimentação. Procure um nutricionista!');
//         result.innerHTML = 'Você está obeso(a). Obesidade nível 2. Cuide da sua alimentação. Procure um nutricionista!';
//     } else {
//         console.log('Você está em obesidade nível 3. Procure um nutricionista URGENTEMENTE!');
//         result.innerHTML = 'Você está em obesidade nível 3. Procure um nutricionista URGENTEMENTE!';
//     }
// }

const firstDiv = document.querySelector('.first-step');
const secondDiv = document.querySelector('.second-step');
const finalDiv = document.querySelector('.final-step');

function go(currentStep, nextStep) {
    let dNone, dBlock;

    if (currentStep === 1) {
        dNone = firstDiv;
    } else if (currentStep === 2) {
        dNone = secondDiv;
    } else {
        dNone = finalDiv;
    }

    if (nextStep === 1) {
        dBlock = firstDiv;
    } else if (nextStep === 2) {
        dBlock = secondDiv;
    } else {
        dBlock = finalDiv;
    }

    dNone.style.display = 'none';
    dBlock.style.display = 'block';
}

function validation() {
    const peso = document.getElementById('peso');
    const altura = document.getElementById('altura');

    peso.style.border = 'none';
    altura.style.border = 'none';

    let valid = true;

    if (!peso.value) {
        peso.style.border = '0.02rem solid red';
        valid = false;
    }
    if (!altura.value) {
        altura.style.border = '0.02rem solid red';
        valid = false;
    }

    if (!valid) {
        if (!peso.value && !altura.value) {
            console.log('Faltam inserir peso e altura');
        }
        return;
    }

    const imc = peso.value / (altura.value * altura.value);
    const result = document.getElementById('resultado');

    if (imc < 16) {
        result.style.color = 'yellow';
        result.innerHTML = "Você está na magreza. Cuide da sua alimentação.";

    } else if (imc >= 16 && imc < 18.5) {
        result.style.color = 'yellow';
        result.innerHTML = 'Você está abaixo do peso. Cuide da sua alimentação.';

    } else if (imc >= 18.5 && imc < 25) {
        result.style.color = 'white';
        result.innerHTML = 'Seu peso está normal. Parabéns!';

    } else if (imc >= 25 && imc < 30) {
        result.style.color = 'yellow';
        result.innerHTML = 'Você está acima do peso. Obesidade nível 1. Cuide da sua saúde!';

    } else if (imc >= 30 && imc < 40) {
        result.style.color = 'yellow';
        result.innerHTML = 'Você está obeso(a). Obesidade nível 2. Cuide da sua alimentação. Procure um nutricionista!';

    } else {
        result.style.color = 'yellow';
        result.style.fontWeight = 'bold';
        result.innerHTML = 'Você está em obesidade nível 3. Procure um nutricionista URGENTEMENTE!';
    }

    go(2, 3); // Navegar para a etapa final
}
