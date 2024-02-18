import Icon from './Icon'

export default function Hero() {
  const phoneNumber = '0448 222 500'

  return (
    <section className="flex h-screen flex-col items-center justify-center gap-4">
      <div
        style={{
          backgroundImage:
            'linear-gradient(rgba(30, 64, 175, 0.8), rgba(30, 64, 175, 0.8)), url(/images/hero.jpg)',
        }}
        className="bg-center bg-no-repeat bg-cover fixed h-screen w-screen z-[-1]"
      />
      <div className="flex items-end mt-[68px] sm:mt-[76px]">
        <h2 className="px-4 text-center text-4xl font-bold text-white sm:text-6xl md:px-6 lg:px-12">
          Latrobe Valley’s trusted local plumber
        </h2>
      </div>
      <a
        href={`tel:${phoneNumber}`}
        className="flex w-fit items-center whitespace-nowrap rounded-3xl bg-pink-600 py-2 px-4 text-lg font-semibold text-white transition-all duration-200 hover:bg-pink-500 sm:text-xl gap-2"
      >
        <span>CALL</span>
        {phoneNumber}
      </a>
    </section>
  )
}
