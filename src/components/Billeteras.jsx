import React, { useEffect, useState } from 'react';

export default function Cotizaciones() {
  const [data, setData] = useState([]); 

  useEffect(() => {
    fetch('https://dolarify-api.vercel.app/api/billeteras')
      .then(response => response.json())
      .then(fetchedData => setData(fetchedData)) 
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  if (!data) {
    return <div>Cargando Datos...</div>;
  }

  return (
    <section className="bg-[#121212] p-6 rounded-xl" id='Billeteras'>
        <label className='opacity-50 text-lg max-[640px]:text-balance'>Rendimientos de las principales billeteres virtuales.</label>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4 pt-5">
        {data.map((item, index) => (
          <div key={index} className="bg-[#161616] p-4 rounded-lg flex flex-col justify-between shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
            <div className="flex justify-between items-center mb-2 gap-2">
              <h4 className="text-xl font-bold text-white">{item.billetera}</h4>
            </div>
            <div className="text-gray-300 text-sm mb-2 flex flex-col gap-1">
              <p>TNA: {item.TNA}%</p>
              <p className='opacity-50 font-bold'>TEA: {item.TEA}%</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
