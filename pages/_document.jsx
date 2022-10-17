import bundleCss from "!raw-loader!../styles/tailwindSSR.css";
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
          {/* Analitycs */}
        </Head>
        {process.env.NODE_ENV === "production" && (
          <style dangerouslySetInnerHTML={{ __html: bundleCss }} />
        )}
        <body>
          <Main />
          <NextScript />
        </body>
        <script
          async
          src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAfW9cJGuzky_v8zWjWE-BkVtsh-nWFmJ4&libraries=places&callback=initMap"
        ></script>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js"
          integrity="sha512-GsLlZN/3F2ErC5ifS5QtgpiJtWd43JWSuIgh7mbzZ8zBps+dvLusV+eNQATqgA/HdeKFVgA5v3S/cIrLF7QnIg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        ></script>
      </Html>
    );
  }
}

export default MyDocument;
