import { FaBible, FaSchool, FaChalkboardTeacher, FaPenAlt } from "react-icons/fa";

const features = [
  {
    name: 'Jesus First',
    description:
      'Jesus First, always.  Jesus is the center of everything we do.  We are a Christian school and we are proud of it.',
    icon: FaBible,
  },
  {
    name: 'Quality Education',
    description:
      'We are determined to provide the best education possible.  We are constantly improving our curriculum and our teaching methods to ensure that our students are getting the best education possible.',
    icon: FaSchool,
  },
  {
    name: 'Personal Education',
    description:
      'Becase we are a small school, we are able to provide a more personal education.  We are able to provide more one-on-one time with our students, and we are able to provide a more personal experience for our students.',
    icon: FaChalkboardTeacher,
  },
]

export default function About() {
  return (
    <div id="about" className="py-16 bg-white sm:py-32">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="max-w-2xl mx-auto lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-olive-600">Personal, Christ Centered Education</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
             Join us in our mission to provide a personal, Christ centered education.
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            <span className="italic">“You shall teach them diligently to your children, and shall talk of them when you sit in your house, when you walk by the way, when you lie down, and when you rise up.” </span>
            </p>
            <p>
            <span className="font-semibold">Deuteronomy 6:7</span> 
          </p>
        </div>
        <div className="max-w-2xl mx-auto mt-16 sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center text-base font-semibold leading-7 text-gray-900 gap-x-3">
                  <feature.icon className="flex-none w-5 h-5 text-olive-600" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="flex flex-col flex-auto mt-4 text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                  
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
