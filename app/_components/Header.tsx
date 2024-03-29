import Icon from './Icon'

export default function Header() {
  const phoneNumber = '0448 222 500'

  return (
    <div className="fixed z-10 flex w-full items-center justify-between bg-white py-3 px-1 shadow-[0_5px_5px_0px_rgba(0,0,0,0.1)] sm:px-3">
      <a
        href="#"
        className="rounded-lg bg-blue-700 py-2 px-2 text-xl font-bold tracking-wider text-white sm:px-4 sm:text-2xl"
      >
        AAR PLUMBING
      </a>
      <a
        href={`tel:${phoneNumber}`}
        className="flex items-center rounded-3xl bg-pink-600 py-2 px-4 text-lg font-semibold text-white transition-all duration-200 hover:bg-pink-500 sm:text-xl"
      >
        <Icon icon="phone" className="inline-block scale-150 mr-2" />
        {phoneNumber}
      </a>
    </div>
  )
}
