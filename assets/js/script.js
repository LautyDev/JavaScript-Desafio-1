const button = document.getElementById('start')

button.addEventListener('click', start)

function start() {
    const date = new Date()

    if (date.getUTCHours() >= 20 || date.getUTCHours() <= 8 ) {
        return alert('¡Lo sentimos! El juego se encuentra cerrado, vuelve más tarde.')
    }

    alert('El juego coinciste en lo siguiente:')
    alert('Tienes que encontrar la combinación de números para ganar.')
    alert('La combinación siempre cambia, es aleatoria.')
    alert('Solo puedes usar números del 1 al 10.')

    const result = Math.round(Math.random() * (10 - 1) + 1)
    const result2 = Math.round(Math.random() * (10 - 1) + 1)

    const number = Number(prompt('Escribe un número.'))

    if (!number) {
        alert('Eso no es un número.')
        alert('Precioná el botón de nuevo.')
        return
    }

    if (number > 10) {
        alert('El limíte es 10.')
        alert('Precioná el botón de nuevo.')
        return
    }

    const number2 = Number(prompt('Escribe un número.'))

    if (!number2) {
        alert('Eso no es un número.')
        alert('Precioná el botón de nuevo.')
        return
    }

    if (number2 > 10) {
        alert('El limíte es 10.')
        alert('Precioná el botón de nuevo.')
        return
    }

    if (number === result || number2 === result2) {
        alert('¡Felicidades! Ganaste el juego.')

        const h1 = document.getElementById('win')

        button.style.display = 'none'
        h1.style.display = 'flex'

        for (var i = 0; i < 10; i++) {
            document.body.style.backgroundColor = '#0e9894'
            setTimeout(() => {
                document.body.style.backgroundColor = '#d30f05'
            }, 500)
        }

        setTimeout(() => {
            window.location.reload()
        }, 3000)
    } else {
        alert('¡Lo sentimos! Perdiste.')
        alert('Precioná el botón de nuevo.')
    }
}