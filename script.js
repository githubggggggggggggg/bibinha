const photos = [
    '20240309_212638.jpg',
    '20240309_212646.jpg',
    '20240327_111052.jpg',
    '20240406_211747.jpg',
    '20240412_104213.jpg',
    '20240412_104215.jpg',
    '20240413_123951.jpg',
    '20240426_215849.jpg'
];

document.addEventListener("DOMContentLoaded", function() {
    if (document.getElementById('photoGallery')) {
        const photoGallery = document.getElementById('photoGallery');
        photos.forEach(photo => {
            const img = document.createElement('div');
            img.className = 'photo';
            img.style.backgroundImage = `url(${photo})`;
            photoGallery.appendChild(img);
        });

        createBalloons(); // Chama a função para criar balões
    }

    document.getElementById('surpriseButton').addEventListener('click', function() {
        const surpriseMessage = document.getElementById('surpriseMessage');
        surpriseMessage.classList.toggle('hidden');
    });
});

// Função para criar balões
function createBalloons() {
    const balloonColors = ['#ff4500', '#ff69b4', '#00bfff', '#32cd32', '#ffd700'];
    for (let i = 0; i < 10; i++) {
        const balloon = document.createElement('div');
        balloon.className = 'balloon';
        balloon.style.backgroundColor = balloonColors[Math.floor(Math.random() * balloonColors.length)];
        balloon.style.left = Math.random() * 100 + 'vw'; // Posição aleatória
        balloon.style.animationDuration = (Math.random() * 3 + 4) + 's'; // Duração aleatória
        document.getElementById('balloons').appendChild(balloon);
    }
}
