function ModelIcons() {
  const carLogo = [
    {
      logo: "https://www.carlogos.org/car-logos/bmw-logo.png",
    },
    {
      logo: "https://www.carlogos.org/car-logos/ford-logo.png",
    },
    {
      logo: "https://www.carlogos.org/car-logos/toyota-logo.png",
    },
    {
      logo: "https://www.carlogos.org/car-logos/honda-logo.png",
    },
    {
      logo: "https://www.carlogos.org/car-logos/audi-logo.png",
    },
    {
      logo: "https://www.carlogos.org/car-logos/subaru-logo.png",
    },
    {
      logo: "https://www.carlogos.org/car-logos/hyundai-logo.png",
    },
    {
      logo: "https://www.carlogos.org/car-logos/mazda-logo.png",
    },
    {
      logo: "https://www.carlogos.org/car-logos/nissan-logo.png",
    },
    {
      logo: "https://www.carlogos.org/car-logos/mitsubishi-logo.png",
    },
  ];
  return (
    <div>
        <h1
        style={{
            marginLeft: "30rem"
        }}
        >Brands we work with.</h1>
      <div className="stock">
        {carLogo.map((car, index) => {
          return <img style={{
            height: '8rem'
          }} key={index} src={car.logo} alt={car.logo} />;
        })}
      </div>
    </div>
  );
}

export default ModelIcons;
