import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function Component() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => setIsOpen(!isOpen)

  const menuItems = [
    { label: 'Dolares', href: '#Dolares' },
    { label: 'Plazos Fijos', href: '#Plazos-Fijos' },
    { label: 'Billeteras Virtuales', href: '#Billeteras' },
  ]

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        type="button"
        className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-[#161616] rounded-md shadow-sm hover:bg-[#121212] focus:bg-[#121212]"
        id="menu-button"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        Cotizaciones
        <ChevronDown className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
      </button>

      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-[#121212] focus:bg-[#161616] ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex={-1}
        >
          <div className="py-1" role="none">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-white block px-4 py-2 text-sm hover:bg-[#161616] focus:bg-[#161616] hover:text-opacity-50"
                role="menuitem"
                tabIndex={-1}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}