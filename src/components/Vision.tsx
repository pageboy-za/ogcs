import { CheckCircleIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'

export default function Vision() {
  return (
    <div id="vision" className="relative mb-4 bg-white">
      <div className="mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end">
        <div className="lg:flex lg:w-1/2 lg:shrink lg:grow-0 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2">
          <div className="relative h-80 lg:-ml-8 lg:h-auto lg:w-full lg:grow xl:ml-0">
            <Image
              className="absolute inset-0 object-cover w-full h-full rounded-r-2xl bg-gray-50"
              height={3413}
                width={2560}
              src="/images/photo-1663866702581-a9712aed5c93.avif"
              alt=""
            />
          </div>
        </div>
        <div className="px-6 lg:contents">
          <div className="max-w-2xl pt-16 pb-24 mx-auto sm:pb-32 sm:pt-20 lg:ml-8 lg:mr-0 lg:w-full lg:max-w-lg lg:flex-none lg:pt-32 xl:w-1/2">
            <p className="text-base font-semibold leading-7 text-olive-600">Christ centered education</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">A return to traditional values</h1>
            <p className="mt-6 text-xl leading-8 text-gray-700">
              
            </p>
            <div className="max-w-xl mt-10 text-base leading-7 text-gray-700 lg:max-w-none">
              <p>
                To Glorify God through planting a Christ Centred school in Cambridge/Cambridgeshire. The desire is to have a school which is built upon the word of God, where Jesus is spoken of, adored and worshiped unashamedly. 

              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <CheckCircleIcon className="flex-none w-5 h-5 mt-1 text-olive-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Christ First.</strong> 
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <CheckCircleIcon className="flex-none w-5 h-5 mt-1 text-olive-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Quality education</strong> 
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <CheckCircleIcon className="flex-none w-5 h-5 mt-1 text-olive-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Priortising Children</strong> 
                  </span>
                </li>
              </ul>
             
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900"></h2>
              <p className="mt-6">
                The need is there and we believe God has called us to be a way in which that need may be fulfilled here in Cambridge.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


