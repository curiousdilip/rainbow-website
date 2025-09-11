import Script from "next/script";

export default function App({ Component, pageProps }) {
  return (
    <>

      <Script src="/assets/js/vendor/jquery.js" strategy="beforeInteractive" />

    
      <Script src="/assets/js/bootstrap.min.js" strategy="afterInteractive" />


      <Script src="/assets/js/waypoint.js" strategy="afterInteractive" />
      <Script src="/assets/js/metisMenu.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/slick.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/jquery.fancybox.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/isotope.pkgd.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/owl.carousel.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/ajax-form.js" strategy="afterInteractive" />
      <Script src="/assets/js/jquery.nice-select.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/wow.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/imagesloaded.pkgd.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/jquery.counterup.min.js" strategy="afterInteractive" />

   
      <Script src="/assets/js/main.js" strategy="afterInteractive" />

      <Component {...pageProps} />
    </>
  );
}
