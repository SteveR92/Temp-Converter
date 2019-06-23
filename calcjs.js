let formSubmit = document.querySelector('#tempCalculator')

formSubmit.addEventListener('submit', runEvent);

function runEvent(e) {
    let celInput = document.querySelector('#cAmount');
    let fahInput = document.querySelector('#fAmount');
    let celResult = document.querySelector('#celsius-result')
    let fahResult = document.querySelector('#f-res');


    //input

    let fahVal = parseFloat((celInput.value * 9/5) + 32);

    let celVal = parseFloat((fahInput.value - 32) * 5/9);

    //output

    celResult.value = celVal;

    fahResult.value = fahVal;

    //if statement to stop formula occuring on empty input
    if(!fahInput.value) {
        celResult.value = celInput.value;
    } else if (!celInput.value) {
        fahResult.value = fahInput.value;
    }


    //stop form refreshing
    e.preventDefault();

}
