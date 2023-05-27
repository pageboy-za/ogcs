"use client" 

import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

const navigation = [
  { name: 'About', href: '#about' },
  { name: 'Vision', href: '#vision' },

]

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div id="top" className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 mx-auto max-w-7xl lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Olive Grove Christian School</span>
              <Image
                  alt="Olive Grove Christian School"
                  className="w-auto h-20"
                  width={250}
                  height={250}
                  src={'/images/olive-grove-sml.png'}
                />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="w-6 h-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          </div>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full px-6 py-6 overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                 <Image
                  alt="Olive Grove Christian School"
                  className="w-auto h-8"
                  width={25}
                  height={25}
                  src={'/images/olive-grove-sml.png'}
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="w-6 h-6" aria-hidden="true" />
              </button>
            </div>
            <div className="flow-root mt-6">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="py-6 space-y-2">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
               
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
      <div className="relative overflow-hidden isolate bg-gradient-to-b from-indigo-100/20 pt-14">
        <div
          className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96"
          aria-hidden="true"
        />
        <div className="px-6 py-32 mx-auto max-w-7xl sm:py-40 lg:px-8">
          <div className="max-w-2xl mx-auto lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
            <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:col-span-2 xl:col-auto">
              Our vision is to see a Christ centered school planted in the heart of Cambrideshire.
            </h1>
            <div className="max-w-xl mt-6 lg:mt-0 xl:col-end-1 xl:row-start-1">
              <p className="text-lg leading-8 text-gray-600">
               The Olive Grove Christian School is a independent school in Cambridgeshire, that puts Jesus at the center of it all.  
              </p>
              <div className="flex items-center mt-10 gap-x-6">
                <a
                  href="/#newsletter"
                  className="rounded-md bg-olive-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-olive-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-olive-600"
                >
                 Follow our journey
                </a>
                <a href="/#about" className="text-sm font-semibold leading-6 text-gray-900">
                  Read more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
           <Image
            className="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
            width={1587}
            height={1058}
            src={'/images/photo-1604882737321-e6937fd6f519.avif'}
            alt=""
            priority 
          />
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-24 -z-10 bg-gradient-to-t from-white sm:h-32" />
      </div>
    </div>
  )
}
