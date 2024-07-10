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

    const imc = (peso.value / (altura.value * altura.value)).toFixed(2);
    const result = document.getElementById('resultado');

    if (imc < 16) {
        let imcIdeal = 18.5;
        let subImc = imcIdeal - imc;
        let pesoGanhar = (subImc*altura.value*altura.value).toFixed(2);

        result.style.color = 'yellow';
        result.innerHTML = "Seu IMC é: " + imc + '. Você está na magreza. Precisará ganhar: ' + pesoGanhar + ' Kg de massa magra. Procure um nutricionista!';

    } else if (imc >= 16 && imc < 18.5) {
        let imcIdeal = 18.5;
        let subImc = imcIdeal - imc;
        let pesoGanhar = subImc*altura.value*altura.value;

        result.style.color = 'yellow';
        result.innerHTML = 'Seu IMC é: ' + imc + '. Você está abaixo do peso. Precisa ganhar: ' + pesoGanhar.toFixed(2) + ' Kg de massa magra. Cuide da sua alimentação!';

    } else if (imc >= 18.5 && imc < 25) {
        result.style.color = 'white';
        result.innerHTML = 'Seu IMC é: ' + imc + '. Seu peso está normal. Parabéns! Mantenha sua dieta atual.';

    } else if (imc >= 25 && imc < 30) {
        let imcIdeal = 24.99;
        let subImc = imc - imcIdeal;
        let pesoPerder = subImc * altura.value * altura.value;

        result.style.color = 'yellow';
        result.innerHTML = "Seu IMC é: " + imc + ". Você está em Obesidade nível 1. Você precisará perder: " + pesoPerder.toFixed(2) + " kg. Cuide da sua alimentação!";

    } else if (imc >= 30 && imc < 40) {
        let imcIdeal = 24.99;
        let subImc = imc - imcIdeal;
        let pesoPerder = subImc * altura.value * altura.value;

        result.style.color = 'yellow';
        result.innerHTML = 'Seu IMC é: ' + imc + '. Você está em Obesidade nível 2. Você precisará perder: ' + pesoPerder.toFixed(2) + ' Kg de gorduras. Procure um nutricionista!';

    } else {
        let imcIdeal = 24.99;
        let subImc = imc - imcIdeal;
        let pesoPerder = subImc*altura.value*altura.value;

        result.style.color = 'yellow';
        result.style.fontWeight = 'bold';
        result.innerHTML = 'Seu IMC é: ' + imc + '. Você está em obesidade nível 3. Você precisará perder: ' + pesoPerder.toFixed(2) + ' Kg de gordura. Procure um nutricionista URGENTEMENTE!';
    }

    go(2, 3); // Navegar para a etapa final
}
