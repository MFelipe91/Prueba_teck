import React from 'react';
import './App.css';

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-gray-800 text-white py-4">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-semibold">TeckWare</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#" className="hover:text-gray-300">Inicio</a></li>
              <li><a href="#" className="hover:text-gray-300">Productos</a></li>
              <li><a href="#" className="hover:text-gray-300">Contacto</a></li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="container mx-auto py-8">
        <section className="mb-12 text-center">
          <h2 className="text-4xl font-semibold mb-4">¡Bienvenido a TeckWare!</h2>
          <p className="text-lg text-gray-600">Tu destino para encontrar los mejores componentes de hardware y PC gamers.</p>
        </section>
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Productos Destacados</h2>
          <div className="overflow-x-scroll flex space-x-4">
            {['CPU', 'RAM', 'SSD', 'GPU', 'Motherboard'].map((product, index) => (
              <div key={index} className="flex-shrink-0 w-64 bg-white rounded-lg shadow-md overflow-hidden">
                <img src="https://via.placeholder.com/500" alt={product} className="w-full h-48 object-cover object-center" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{product}</h3>
                  <p className="text-gray-600">Descripción del {product}.</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xl font-semibold">$99.99</span>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">Agregar al Carrito</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 TeckWare. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;



