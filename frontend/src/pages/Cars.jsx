import React from 'react';

const carData = [
  {
    id: 1,
    name: "Mercedes-Benz S-Class",
    category: "Luxury Sedan",
    price: "27000 / day",
    imageUrl: "https://images.unsplash.com/photo-1610099610040-ab19f3a5ec35?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    features: ["4 Seats", "Auto", "AC","Diesel"]
  },
  {
    id: 2,
    name: "Porsche 911 Carrera",
    category: "Sports Car",
    price: "55000 / day",
    imageUrl: "https://images.unsplash.com/photo-1745402029648-a6a1dd28fa7b?q=80&w=677&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    features: ["2 Seats", "Auto", "AC","Petrol"]
  },
  {
    id: 3,
    name: "Range Rover Autobiography",
    category: "Luxury SUV",
    price: "45000 / day",
    imageUrl: "https://images.unsplash.com/photo-1740954694745-327c03107a7d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    features: ["5 Seats", "Auto", "AC","Diesel"]
  },
  {
    id: 4,
    name: "Audi RS e-tron GT",
    category: "Electric Sports",
    price: "32000 / day",
    imageUrl: "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?auto=format&fit=crop&q=80&w=800",
    features: ["4 Seats", "Auto", "Electric", "AC","Fast Charging","Range: 238 miles"]
  },
  {
    id: 5,
    name: "Bentley Continental GT",
    category: "Grand Tourer",
    price: "25000 / day",
    imageUrl: "https://images.unsplash.com/photo-1580274455191-1c62238fa333?auto=format&fit=crop&q=80&w=800",
    features: ["4 Seats", "Auto", "AC","Petrol"]
  },
  {
    id: 6,
    name: "Lamborghini Urus",
    category: "Performance SUV",
    price: "20000 / day",
    imageUrl: "https://images.unsplash.com/photo-1627140290942-7c8f9f56e870?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    features: ["5 Seats", "Auto", "AC","Petrol"]
  }
];

const Cars = () => {
  return (
    <div className="min-h-screen bg-neutral-900 text-white pt-24 pb-20 px-6 md:px-16 lg:px-24 xl:px-32">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Our Premium Fleet
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Choose from our exclusive collection of world-class vehicles, meticulously maintained for your ultimate driving pleasure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {carData.map((car) => (
            <div key={car.id} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden group hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2 shadow-xl hover:shadow-2xl">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={car.imageUrl} 
                  alt={car.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full text-sm font-bold border border-white/20">
                  {car.price}
                </div>
              </div>
              
              <div className="p-6 md:p-8">
                <div className="text-blue-400 text-xs font-bold uppercase tracking-wider mb-2">{car.category}</div>
                <h3 className="text-2xl font-bold mb-4">{car.name}</h3>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {car.features.map((feature, idx) => (
                    <span key={idx} className="bg-white/5 border border-white/10 text-gray-300 text-xs px-3 py-1 rounded-full">
                      {feature}
                    </span>
                  ))}
                </div>
                
                <button className="w-full py-3 bg-transparent border border-gray-500 hover:border-blue-500 hover:bg-blue-600 transition-colors rounded-xl font-semibold text-sm">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cars;