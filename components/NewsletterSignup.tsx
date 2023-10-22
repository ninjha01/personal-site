import { MailIcon } from "@heroicons/react/solid";
import { useAnalyticsEvent } from "../hooks/useAnalytics";
import { classNames } from "../utils";
import { Button } from "./Button";
export const NewsletterSignup = ({
  className,
  pageName,
}: {
  className?: string;
  pageName: string;
}) => {
  const { trackCustomEvent } = useAnalyticsEvent();
  const logEmailClicked = () => {
    trackCustomEvent({
      eventName: "clicked_email_button",
      eventTitle: `Clicked email button on ${pageName}`,
    });
  };

  const onSubmit = () => {
    logEmailClicked();
    window.open(
      "https://tinyletter.com/nishantjha",
      "popupwindow",
      "scrollbars=yes,width=800,height=600"
    );
    return true;
  };

  return (
    <section
      className={classNames(
        "h-fit rounded-2xl border border-zinc-700/40 p-6",
        className
      )}
    >
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <MailIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Stay up to date</span>
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Get notified when I publish something new, and unsubscribe at any time.
      </p>

      <form
        className="mt-6 flex"
        onSubmit={onSubmit}
        action="https://tinyletter.com/nishantjha"
        method="post"
        target="popupwindow"
      >
        <input type="hidden" value="1" name="embed" />
        <input
          id="tlemail"
          name="email"
          type="email"
          autoComplete="email"
          required
          placeholder="Email address"
          aria-label="Email address"
          className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-500 bg-zinc-900 px-3 py-[calc(theme(spacing.2)-1px)]  text-zinc-200 shadow-md shadow-zinc-800/5 placeholder:text-zinc-500 focus:border-teal-500  focus:outline-none focus:ring-4 focus:ring-teal-500/10 sm:text-sm"
        />
        <Button
          type="submit"
          variant="primary"
          className="ml-4 flex-none text-blue-100 "
        >
          Join
        </Button>
      </form>
    </section>
  );
};
