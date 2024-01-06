import { useAnalyticsEvent } from "../hooks/useAnalytics";

export const EmailSignUpForm = () => {
  const { trackCustomEvent } = useAnalyticsEvent();
  const logEmailClicked = () => {
    trackCustomEvent({
      eventName: "clicked_email_button",
      eventTitle: "email_button",
    });
  };

  const onSubmit = () => {
    logEmailClicked();
    window.open(
      "https://tinyletter.com/nishantjha",
      "popupwindow",
      "scrollbars=yes,width=800,height=600",
    );
    return true;
  };

  return (
    <div className="bg-white">
      <div className="w-full pb-12">
        <form
          className="mt-8 sm:flex lg:flex-col"
          onSubmit={onSubmit}
          action="https://tinyletter.com/nishantjha"
          method="post"
          target="popupwindow"
        >
          <label htmlFor="tlemail" className="sr-only">
            Email address
          </label>
          <input type="hidden" value="1" name="embed" />
          <input
            id="tlemail"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="w-full rounded-md border-gray-300 px-3 py-3 placeholder-gray-500 focus:border-blue-500 focus:ring-blue-500 sm:max-w-xs"
            placeholder="Enter your email"
          />
          <div className="mt-3 rounded-md sm:ml-3 sm:mt-0 sm:flex-shrink-0 lg:ml-0 lg:mt-8 lg:w-40 lg:w-auto">
            <GetInTouchButton />
          </div>
        </form>
      </div>
    </div>
  );
};

const EmailIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);
const GetInTouchButton = () => (
  <div className="relative flex basis-0 rounded-lg">
    <button
      type="submit"
      className="block transform items-center rounded-xl bg-blue-900 px-6 py-4 text-base font-medium text-white shadow-md shadow-blue-900 transition duration-500 ease-in-out hover:no-underline hover:shadow-xl hover:shadow-blue-900 focus:outline focus:outline-blue-900 focus:ring-2 focus:ring-blue-900 focus:ring-offset-2 "
    >
      <div className="flex gap-2">
        {EmailIcon}
        Contact
      </div>
    </button>
    <span className="relative right-3 top-0 -mr-1 -mt-1 flex h-4 w-4">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-700 opacity-75"></span>
      <span className="relative inline-flex h-4 w-4 rounded-full border border-2 border-white bg-blue-800"></span>
    </span>
  </div>
);
