export default function Spotlight() {
  return (
    <section className="bg-gray-100 mt-20 mb-24">
      <div className="section-container">
        <div className="md:flex justify-between items-center">
          <img
            className="pb-10 lg:m-[-41px]"
            src="https://assets.setmore.com/website/v2/images/homepage-v2-2/setmore-booking-page.png"
            alt=""
          />
          <div className="lg:pl-44">
            <h1 className="text-3xl font-bold lg:pt-5 mb-6">
              Spotlight your brand
              <span className="text-blue-500">.</span>
            </h1>
            <p className="text-lg leading-7">
              Brand experience hits a whole new level with a custom Booking
              Page. Show why your business stands apart and enable people to
              self-book at their convenience.
            </p>
            <div className="mt-10">
              <button className="border-2 border-blue-500 text-blue-500 px-5 py-2 rounded-md h-14 max-md:w-full">
                Create your Booking page
              </button>
            </div>
          </div>
        </div>

        <div className="md:flex justify-between items-center pt-40">
          <div className="p-3">
            <h1 className="text-xl lg:pt-5 mb-6">Stay one step ahead</h1>
            <p className="text-lg leading-7">
              Share your online Booking Page and every new appointment lands in
              your calendar.
            </p>
          </div>
          <div className="p-3">
            <h1 className="text-xl lg:pt-5 mb-6">Reach global customers</h1>
            <p className="text-lg leading-7">
              Add 1-click Zoom or Teleport video meeting links to your
              appointments.
            </p>
          </div>
          <div className="p-3">
            <h1 className="text-xl  lg:pt-5 mb-6">Get paid in advance</h1>
            <p className="text-lg leading-7">
              Forget about chasing invoices by accepting payments easily and
              securely online.
            </p>
          </div>
          <div className="p-3">
            <h1 className="text-xl  lg:pt-5 mb-6">No more no-shows</h1>
            <p className="text-lg leading-7">
              Let Setmore fire out personalized email or text reminders to every
              customer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
