import { useState } from 'react';
import './ImagesPage.css'; // Assurez-vous d'avoir un fichier CSS pour les styles

const ImagesPage = () => {
  // Tableau de données des images
  const images = [
    { id: 1, src: "/src/components/pictures/image11.jpg", alt: "" },
    { id: 2, src: "src/components/pictures/image22.jpg", alt: "Image 2" },
    { id: 3, src: "src/components/pictures/image33.jpg", alt: "Image 3" },
    { id: 4, src: "/src/components/pictures/image4.jpg", alt: "Image 4" },
    { id: 5, src: "/src/components/pictures/image5.jpg", alt: "Image 5" },
    { id: 6, src: "src/components/pictures/image6.jpg", alt: "Image 6" },
    { id: 7, src: "src/components/pictures/image1.jpg", alt: "Image 7" },
    { id: 8, src: "src/components/pictures/image2.jpg", alt: "Image 8" },
    { id: 9, src: "src/components/pictures/image10.jpg", alt: "Image 9" },
  ];

  const [birdPosition, setBirdPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setBirdPosition({ x: event.clientX, y: event.clientY });
  };

  const handleMouseEnter = () => {
    // Démarrez l'animation de l'oiseau ici
    const bird = document.getElementById('bird');
    bird.classList.add('fly');
  };

  const handleMouseLeave = () => {
    // Arrêtez l'animation de l'oiseau ici
    const bird = document.getElementById('bird');
    bird.classList.remove('fly');
  };

  const groupedImages = [];
  for (let i = 0; i < images.length; i += 3) {
    groupedImages.push(images.slice(i, i + 3));
  }

  return (
    <div className="images-container" onMouseMove={handleMouseMove}>
      <h1>Vos destinations</h1>
      {groupedImages.map((group, index) => (
        <div key={index}>
          <div className="image-group">
            {group.map((image) => (
              <img
                key={image.id}
                src={image.src}
                alt={image.alt}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
            ))}
          </div>
          <p></p>
        </div>
      ))}
      {/* Oiseau animé */}
      <div id="bird" className="bird" style={{ left: birdPosition.x, top: birdPosition.y }}></div>
    </div>
  );
};

export default ImagesPage;

