import { ReactElement } from "react";
import { AppContext, AppInitialProps, AppLayoutProps } from "next/app";
import { Global } from "@emotion/react";
import { NextComponentType } from "next";

import { globalStyles } from "@/styles/GlobalStyle";
import "../public/fonts/style.css";

const App: NextComponentType<AppContext, AppInitialProps, AppLayoutProps> = ({
  Component,
  pageProps,
}: AppLayoutProps) => {
  const getLayout = Component.getLayout ?? ((page: ReactElement) => page);

  return (
    <>
      <Global styles={globalStyles} />
      {getLayout(<Component {...pageProps} />)}
    </>
  );
};

export default App;
