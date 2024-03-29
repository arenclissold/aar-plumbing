export default function Services() {
  const services = [
    {
      title: 'General plumbing',
      description:
        'Are you tired of dealing with leaky or faulty taps? Do you want to upgrade to stylish and modern fixtures? Look no further! I offer professional tap repair and replacement services.',
      imageSrc: '/images/services/taps.jpg',
    },
    {
      title: 'Hot Water Service Replacement',
      description:
        'Need a new hot water system? I can help! I offer expert hot water replacement services. Contact me for a free quote.',
      imageSrc: '/images/services/hot-water-service.jpg',
    },
    {
      title: 'Blocked Drains',
      description:
        "Is your drain clogged and causing water to back up? Don't suffer any longer! We offer fast and effective drain unblocking.",
      imageSrc: '/images/services/drain-cleaner.jpg',
    },
    {
      title: 'Gas Safety Check',
      description:
        "Are you a landlord needing a gas safety check on a rental property? Or seeking to service your gas appliances? Look no further, I'm licensed to perform these services and offer competitive prices.",
      imageSrc: '/images/services/gas-heater.jpg',
    },
    {
      title: 'Commercial Maintenance',
      description:
        'I have a number of commercial clients and create tailored routine maintenance schedules for restaurants, businesses and school buildings. These ensure that I am preventing plumbing problems instead of just fixing them.',
      imageSrc: '/images/services/cafe.jpg',
    },
    {
      title: 'Gas Service',
      description:
        "Need a gas appliance repair? I'm a licensed technician that can help. I offer fast, reliable services at competitive prices. Contact me today to schedule an appointment and get your appliances running smoothly again.",
      imageSrc: '/images/services/gas-meter.jpg',
    },
  ]

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 bg-white">
      {services.map((service) => (
        <div
          key={service.title}
          className="flex h-[50vh] min-h-[24rem] items-center justify-center bg-cover bg-center bg-no-repeat p-6"
          style={{ backgroundImage: `url('${service.imageSrc}')` }}
        >
          <div className="rounded bg-white p-3 py-6 text-center shadow">
            <h3 className="mb-2 text-3xl font-semibold uppercase">
              {service.title}
            </h3>
            <p className="">{service.description}</p>
          </div>
        </div>
      ))}
    </section>
  )
}
