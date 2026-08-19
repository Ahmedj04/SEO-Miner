import "@/styles/globals.css";
import Script from "next/script";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const isBlogPage = router.pathname.startsWith("/blog/");

  return (
    <>
      {isBlogPage && (
        <Script
          async
          strategy="afterInteractive"
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID}`}
          crossOrigin="anonymous"
        />
      )}

      <Component {...pageProps} />
    </>
  );
}
