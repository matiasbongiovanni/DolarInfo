import React from 'react'
import Nav from '../components/Nav'
import CotizacionesDolar from '../components/CotizacionesDolar'
import PlazosFijos from '../components/PlazosFijos'
import Billeteras from '../components/Billeteras'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
    <Nav />
    <main className='bg-[#101010] h-full text-white'>
        <h1 className='text-6xl font-bold text-center pt-10'>DolarInfo</h1>
        <h3 className='text-center p-3 text-balance'>Tené las cotizaciones de todos los tipos de dólares, siempre a mano.</h3>
        <section className='p-3'>
        <CotizacionesDolar />
        <PlazosFijos />
        <Billeteras />
        </section>
        <ul className='flex justify-center gap-5 opacity-50'>
          <li><a href="https://dolarapi.com/" rel="noreferrer noopener" className='font-extrabold'>DolarAPI</a></li>
          <li><a href="https://dolarify-api.vercel.app/" rel="noreferrer noopener" className='font-extrabold'>Dolarify</a></li>
        </ul>
        <p className='text-sm text-balance text-center p-3'>Los datos se proporcionaron de manera informativa, basandose en los datos que suministra cada proveedor.<br />
        Dev <a href="https://instagram.com/matibongiovann" rel="noreferrer noopener" className='font-bold'>Mati Bongiovanni</a>.</p>
        <Footer />
    </main>
    </>
  )
}

export default Home
