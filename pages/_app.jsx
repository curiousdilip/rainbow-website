import Head from "next/head";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/assets/css/preloader.css" />
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/slick.css" />
        <link rel="stylesheet" href="/assets/css/metisMenu.css" />
        <link rel="stylesheet" href="/assets/css/owl.carousel.min.css" />
        <link rel="stylesheet" href="/assets/css/animate.min.css" />
        <link rel="stylesheet" href="/assets/css/jquery.fancybox.min.css" />
        <link rel="stylesheet" href="/assets/css/all.min.css" />
        <link rel="stylesheet" href="/assets/css/flaticon.css" />
        <link rel="stylesheet" href="/assets/css/nice-select.css" />
        <link rel="stylesheet" href="/assets/css/default.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />
      </Head>

      <Script src="/assets/js/vendor/jquery.js" />
      <Script src="/assets/js/bootstrap.min.js"  />
      <Script src="/assets/js/waypoint.js"  />
      <Script src="/assets/js/metisMenu.min.js" />
      <Script src="/assets/js/slick.min.js" />
      <Script src="/assets/js/jquery.fancybox.min.js" />
      <Script src="/assets/js/isotope.pkgd.min.js" />
      <Script src="/assets/js/owl.carousel.min.js" />
      <Script src="/assets/js/ajax-form.js" />
      <Script src="/assets/js/jquery.nice-select.min.js" />
      <Script src="/assets/js/wow.min.js" />
      <Script src="/assets/js/imagesloaded.pkgd.min.js" />
      <Script src="/assets/js/jquery.counterup.min.js" />
      <Script src="/assets/js/main.js" />
      <Component {...pageProps} />
    </>
  );
}
