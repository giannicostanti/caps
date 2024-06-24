document.querySelectorAll('.locked').forEach(button => {
    button.addEventListener('click', () => {
        button.classList.add('vibrate');
        setTimeout(() => {
            button.classList.remove('vibrate');
        }, 300);
    });
});

window.addEventListener('load', () => {
    const capitulo2 = document.getElementById('capitulo2');
    
    setTimeout(() => {
        capitulo2.classList.add('open');
    }, 1000); // Desbloquea el Capítulo 2 después de 2 segundos
    setTimeout(() => {
        capitulo2.classList.remove('open');
        capitulo2.classList.remove('locked');
    }, 1500); // Desbloquea el Capítulo 2 después de 2 segundos
    capitulo2.addEventListener('click', () => {
        if (capitulo2.classList.contains('locked')) {
            capitulo2.classList.add('vibrate');
            setTimeout(() => {
                capitulo2.classList.remove('vibrate');
            }, 300);
        } else {
            window.location.href = 'https://www.youtube.com/watch?v=tu_video_id2';
        }
    });
});
