export const ContactMeBanner = (props: { hide: () => void }) => {
  return (
    <section className="-mt-8 w-full items-center px-5 py-12 lg:px-20">
      <div className="w-full text-yellow-600 border rounded-lg shadow-xl">
        <div className="flex items-center justify-between px-6 py-4 mx-auto">
          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-4 icon icon-tabler icon-tabler-alert-triangle"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <circle cx="12" cy="12" r="9"></circle>
              <line x1="12" y1="8" x2="12.01" y2="8"></line>
              <polyline points="11 12 12 12 12 16 13 16"></polyline>
            </svg>
            <p className="text-sm font-semibold tracking-wide uppercase">
              <strong>Alert:</strong> Want to search against your own proprietary sequences?
            </p>
          </div>
          <a
            className="p-1 transition-colors duration-200 transform rounded-md hover:bg-opacity-25 hover:bg-blueGray-600 focus:outline-none cursor-pointer"
            type="button"
            aria-label="Close"
            aria-hidden="true"
          >
            Get in touch!
          </a>
        </div>
      </div>
    </section>
  );
};