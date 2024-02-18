export default function Footer() {
  return (
    <footer className="mx-auto p-4 md:px-6 lg:px-12 xl:px-[156px] bg-white">
      <div className="grid-col-1 my-4 grid gap-4 md:grid-cols-2 md:gap-8">
        <div className="mb-4">
          <h4 className="mb-2 text-xl font-semibold">LOCATION</h4>
          <p className="text-lg">
            Serving the Traralgon, Morwell, Churchill, Moe and surrounding area.
          </p>
        </div>
        <div>
          <h4 className="mb-2 text-xl font-semibold">CONTACT</h4>
          <p className="text-lg">
            <a href="tel:0448222500" className="hover:underline">
              0448 222 500
            </a>
            |
            <a href="mailto:aarplumb@icloud.com" className="hover:underline">
              aarplumb@icloud.com
            </a>
          </p>
        </div>
      </div>
      <div className="text-center text-sm">
        <p>
          This site was created by Aren Clissold. Enquire about having your own
          site created at{' '}
          <a className="hover:underline" href="https://arenclissold.com">
            arenclissold.com
          </a>
        </p>
      </div>
    </footer>
  )
}
