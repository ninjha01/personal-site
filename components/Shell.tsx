import { JSXElementConstructor, ReactElement, ReactFragment, ReactPortal, StrictMode } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const Shell = (props: {
  children:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | ReactFragment
    | ReactPortal;
  noStrict?: boolean;
}) => {
  const Wrapper = (props: { children: any; noStrict?: boolean }) => {
    if (props.noStrict) {
      return <>{props.children}</>;
    } else {
      return <StrictMode>{props.children}</StrictMode>;
    }
  };

  return (
    <Wrapper noStrict={props.noStrict}>
      <div className="fixed inset-0 mx-auto mx-auto flex w-full max-w-4xl justify-center rounded-lg bg-zinc-900 px-4 px-4 sm:px-6 sm:px-6 md:px-8 md:px-8" />

      <div className="relative">
        <Header />
        <main className="mx-auto mt-4 mb-16 w-full max-w-4xl bg-zinc-900 px-4 sm:px-6 md:mt-16 md:px-8">
          {props.children}
        </main>
        <Footer />
      </div>
    </Wrapper>
  );
};
