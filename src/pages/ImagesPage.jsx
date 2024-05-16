const ImagesPage = () => {
  // Tableau de données des images
  const images = [
    { id: 1, src: "/src/images/image1.jpg", alt: "" },
    { id: 2, src: "/src/images/image2.jpg", alt: "Image 2" },
    { id: 3, src: "/src/images/image3.jpg", alt: "Image 3" },
    { id: 4, src: "/src/images/image4.jpg", alt: "Image 4" },
    { id: 5, src: "/src/images/image5.jpg", alt: "Image 5" },
    { id: 6, src: "/src/images/image6.jpg", alt: "Image 6" },
    { id: 7, src: "/src/images/image7.jpg", alt: "Image 7" },
    { id: 8, src: "/src/images/image8.jpg", alt: "Image 8" },
    { id: 9, src: "/src/images/image9.jpg", alt: "Image 9" },
  ];

  return (
    <div className="images-container">
      <h2>Images</h2>
      <div className="image-grid">
        {images.map(image => (
          <img key={image.id} src={image.src} alt={image.alt} />
        ))}
      </div>
    </div>
  );
}

export default ImagesPage;
