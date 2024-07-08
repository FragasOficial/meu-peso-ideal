const firstDiv = document.querySelector('.first-step');
const secondDiv = document.querySelector('.second-step');
const finalDiv = document.querySelector('.final-step');

function go(currentStep, nextStep) {
    let dNone, dBlock;

    if (currentStep == 1) {
        dNone = firstDiv;
    } else if (currentStep == 2) {
        dNone = secondDiv;
    } else {
        dNone = finalDiv;
    }

    if (nextStep == 1) {
        dBlock = firstDiv;
    } else if (nextStep == 2) {
        dBlock = secondDiv;
    } else {
        dBlock = finalDiv;
    }

    dNone.style.display = 'none';
    dBlock.style.display = 'block';
}

function validation(){
    const peso = document.getElementById('peso');
    const altura = document.getElementById('altura');

    peso.style.border = 'none';
    altura.style.border = 'none';

    if(!peso.value || !altura.value){
        peso.style.border = '0.1rem solid green';
        altura.style.border = '0.1rem solid green';

        if(!peso.value && !altura.value){
            console.log('Faltam inserir peso e altura');
        }
        else if(!peso.value){
            peso.style.border = '0.02rem solid red';
        }
        else{
            altura.style.border = '0.02rem solid red';
        }   
    }
    else (
        console.log('Prosseguir e calcular.')
    )
}
