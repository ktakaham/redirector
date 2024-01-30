import type { EmotionCache } from "@emotion/react";
import type { AppPropsWithLayout } from "next/app";


interface AppProps extends AppPropsWithLayout {
  emotionCache?: EmotionCache;
}

const App = ({ Component, pageProps }: AppProps) => {

  return (
    <>
      {<Component {...pageProps} />}
    </>
  );
};

export default App;