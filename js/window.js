$('#btn1').on('click', (event) => {
    $('div').animate({
        'left': '500px'
    }, 1500, 'linear', () => {
        alert('Квадрат сдвинулся с места')
    })
})