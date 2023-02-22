import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang="en">
        <Head>
            <Script id="prepr-tracking-pixel" strategy="afterInteractive" dangerouslySetInnerHTML={{
                __html: `! function (e, t, p, r, n, a, s) {
                    e[r] || ((n = e[r] = function () {
                        n.process ? n.process.apply(n, arguments) : n.queue.push(arguments)
                    }).queue = [], n.t = +new Date, (a = t.createElement(p)).async = 1, a.src = "https://cdn.tracking.prepr.io/js/prepr.min.js?t=" + 864e5 * Math.ceil(new Date / 864e5), (s = t.getElementsByTagName(p)[0]).parentNode.insertBefore(a, s))
                }(window, document, "script", "prepr"), prepr("init", "179d3d7e5dbcd4feb35fd0e0fed2e6e7fdd4c43543f439eab62a17ac1bea9548"), prepr("event", "pageload");`
            }}
            />
        </Head>
      <body className="bg-gray-50">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
