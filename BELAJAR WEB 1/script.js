document.addEventListener("DOMContentLoaded", function() {
    const images = [
        'jpg/konten/IMG_2487.JPG',
        'jpg/konten/IFMI8870.JPG',
        'jpg/konten/IMG_2441.JPG',
        'jpg/konten/WIDE6760.JPG'
    ];
    let currentIndex = 0;
    const fotoKonten = document.querySelector('.foto-konten');

    function changeImage() {
        currentIndex = (currentIndex + 1) % images.length;
        fotoKonten.src = images[currentIndex];
    }

    setInterval(changeImage, 3000); // Ganti gambar setiap 3 detik
});