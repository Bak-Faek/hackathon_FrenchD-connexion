import ImageDestination from "./ImageDestination";

const DestinationsPage = () => {
  // Tableau de données des destinations
  const destinations = [
    { id: 1, title: "Destination 1", imageSrc: "/images/destination1.jpg" },
    { id: 2, title: "Destination 2", imageSrc: "/images/destination2.jpg" },
    { id: 3, title: "Destination 3", imageSrc: "/images/destination3.jpg" },
    // Ajoutez d'autres destinations au besoin
  ];

  return (
    <div className="destinations">
      <h2>Nos Destinations</h2>
      <div className="destination-list">
        {destinations.map((destination) => (
          <ImageDestination
            key={destination.id}
            title={destination.title}
            imageSrc={destination.imageSrc}
          />
        ))}
      </div>
    </div>
  );
};

export default DestinationsPage;
