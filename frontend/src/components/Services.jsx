const Services = () => {
  const services = [
    {
      id: 1,
      url: "/image3.jpg",
      title: "Birthday Planning",
    },
    {
      id: 2,
      url: "/image2.jpg",
      title: "Anniversary Planning",
    },
    {
      id: 3,
      url: "/image4.jpg",
      title: "Camping Trip Planning",
    },
    {
      id: 4,
      url: "/image5.png",
      title: "Game Night Planning",
    },
    {
      id: 5,
      url: "/image8.jpg",
      title: "Party Planning",
    },
    {
      id: 6,
      url: "/image9.h",
      title: "Wedding Planning",
    },
  ];
  return (
    <>
      <div className="services container">
        <h2>OUR SERVICES</h2>
        <div className="banner">
          {services.map((element) => {
            return (
              <div className="item" key={element.id}>
                <h3>{element.title}</h3>
                <img src={element.url} alt={element.title} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Services;