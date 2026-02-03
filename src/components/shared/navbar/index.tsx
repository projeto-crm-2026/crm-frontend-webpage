'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

import { HamburgerButton } from 'crm-project-ui'

/**
 * Navbar - Main navigation component with responsive design.
 *
 * Displays a sticky header with logo, navigation links, and a CTA button on desktop.
 * On mobile, shows a hamburger menu that toggles a vertical navigation menu.
 *
 */
export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false)

  const pathname = usePathname()

  if (pathname === '/login') return null

  return (
    <nav className="sticky top-0 left-0 z-40 flex w-full justify-between border-b border-neutral-300 bg-white">
      <div className="bg-stripes relative hidden w-full flex-1 border-r border-neutral-300 lg:flex" />
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 lg:px-6">
        <Link href="/">
          {/* <Image
            alt="Project Logo"
            className="aspect-video max-h-10 max-w-28 object-cover"
            height={180}
            src="/capivara-solidaria-logo.png"
            width={360}
          /> */}
          
        </Link>

        <div className="hidden items-center gap-8 lg:flex xl:gap-12">
          <ul className="flex items-center gap-4">
            <li>
              <Link
                className="border-b border-transparent text-sm font-medium transition-colors duration-150 ease-in-out hover:border-neutral-700"
                href="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="border-b border-transparent text-sm font-medium transition-colors duration-150 ease-in-out hover:border-neutral-700"
                href="/ongs"
              >
                Projetos
              </Link>
            </li>
            <li>
              <Link
                className="border-b border-transparent text-sm font-medium transition-colors duration-150 ease-in-out hover:border-neutral-700"
                href="/sobre"
              >
                Sobre
              </Link>
            </li>
            <li>
              <Link
                className="border-b border-transparent text-sm font-medium transition-colors duration-150 ease-in-out hover:border-neutral-700"
                href="/contato"
              >
                Contato
              </Link>
            </li>
            <li>
              <Link
                className="border-b border-transparent text-sm font-medium transition-colors duration-150 ease-in-out hover:border-neutral-700"
                href="/faq"
              >
                FAQ
              </Link>
            </li>
          </ul>

          <div className="flex items-center gap-3">
            <Link
              className="cursor-pointer rounded-md border border-neutral-700 px-4 py-1.5 text-sm font-semibold text-neutral-800 transition-all duration-150 hover:bg-neutral-800 hover:text-neutral-50"
              href="/contato"
            >
              Contato
            </Link>
            <Link
              className="cursor-pointer rounded-md bg-neutral-800 px-4 py-1.5 text-sm font-semibold text-white transition-all duration-150 hover:bg-neutral-700"
              href="#"
            >
              Entrar
            </Link>
          </div>
        </div>

        <div className="flex items-center lg:hidden">
          <HamburgerButton
            isOpen={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            variant="primary"
          />
        </div>
      </div>

      {menuOpen ? (
        <div className="flex w-full flex-col gap-4 bg-white/90 px-6 py-4 text-neutral-800 shadow-md lg:hidden">
          <Link
            className="border-b border-transparent text-sm font-medium transition-colors duration-150 ease-in-out hover:border-neutral-700"
            href="/"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            Home
          </Link>
          <Link
            className="border-b border-transparent text-sm font-medium transition-colors duration-150 ease-in-out hover:border-neutral-700"
            href="/sobre"
            onClick={() => setMenuOpen(false)}
          >
            Sobre
          </Link>
          <Link
            className="border-b border-transparent text-sm font-medium transition-colors duration-150 ease-in-out hover:border-neutral-700"
            href="/contato"
            onClick={() => setMenuOpen(false)}
          >
            Contato
          </Link>
          <Link
            className="border-b border-transparent text-sm font-medium transition-colors duration-150 ease-in-out hover:border-neutral-700"
            href="/projetos"
            onClick={() => setMenuOpen(false)}
          >
            Projetos
          </Link>
        </div>
      ) : null}
      <div className="bg-stripes relative hidden w-full flex-1 border-l border-neutral-300 lg:flex" />
    </nav>
  )
}
