import React, { useEffect, useState } from 'react';
import { MdRefresh } from "react-icons/md";

export default function Cotizaciones() {
  const [data, setData] = useState(null);
  const [fechaActualizacion, setFechaActualizacion] = useState('');

  useEffect(() => {
    fetch("https://dolarapi.com/v1/dolares")
      .then(response => response.json())
      .then(fetchedData => {
        const filteredData = fetchedData.filter(item => item.nombre !== "Mayorista");
        const formattedData = filteredData.map(item => {
          if (item.nombre === "Contado con liquidación") {
            return { ...item, nombre: "CCL" };
          }
          return item;
        });
        setData(formattedData);
        setFechaActualizacion(new Date().toLocaleString('es-AR'));
      })
      .catch(error => console.error('Error al obtener los datos.', error));
  }, []);

  if (!data) {
    return <div>Cargando Datos...</div>;
  }

  return (
    <>
      <section className="bg-[#121212] p-6 rounded-xl" id='Dolares'>
      <label className='opacity-50 text-lg max-[640px]:text-balance'>Cotizaciones de los distintos tipos de dolares en el país.</label>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4 pt-5">
          {data.map((item, index) => (
            <div key={index} className="bg-[#161616] p-4 rounded-lg flex flex-col justify-between shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
              <div className="flex justify-between items-center mb-2">
                <h4 className="text-xl font-bold text-white">{item.nombre}</h4>
              </div>
              <div className="text-gray-300 text-sm mb-2 flex flex-col gap-1">
                <p>Compra: {Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(item.compra)}</p>
                <p className='opacity-50 font-bold'>Venta: {Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(item.venta)}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-white text-center opacity-50 pt-5">Ultima Actualización: {fechaActualizacion}</p>
      </section>
    </>
  );
}
