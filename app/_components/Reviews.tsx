import Icon from './Icon'

export default function Reviews() {
  return (
    <section className="flex justify-center p-10 bg-cyan-100">
      {
        <div className="relative max-w-xl text-sky-900 pl-2">
          <Icon
            icon="quote"
            className="absolute left-[-2.5rem] top-[-1.5rem] h-10 w-10"
          />
          <Icon
            icon="quote"
            className="absolute right-[-1.5rem] bottom-[-0.5rem] h-10 w-10 rotate-180"
          />
          <h4 className="font-bold">Canex Graphic Designs</h4>
          <p className="my-2">
            Rhett is by far the best plumber around! Recommended to us by the
            real estate we bought our house through - definitely glad we had
            asked them! Great prices, very quick and extremely helpful for
            people who may not know the ins and outs of plumbing!
          </p>
          <div className="flex ml-[-0.5rem]">
            <Icon icon="star" className="h-8 w-8" />
            <Icon icon="star" className="h-8 w-8" />
            <Icon icon="star" className="h-8 w-8" />
            <Icon icon="star" className="h-8 w-8" />
            <Icon icon="star" className="h-8 w-8" />
          </div>
        </div>
      }
    </section>
  )
}
