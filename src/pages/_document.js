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
            <Script id="chameleon" strategy="afterInteractive" dangerouslySetInnerHTML={
                {
                    __html: `
                    !function(d,w){var t=\"SliKIsOn78Fnm9uLXgcFyI5oJNZYwY5dPgAX2LTvAAvCgl-1PAiet-EgsLlncdOAqRVOPh\",c=\"chmln\",i=d.createElement(\"script\");if(w[c]||(w[c]={}),!w[c].root){w[c].accountToken=t,w[c].location=w.location.href.toString(),w[c].now=new Date,w[c].fastUrl='https://fast.chameleon.io/';var m=\"identify alias track clear set show on off custom help _data\".split(\" \");for(var s=0;s<m.length;s++){!function(){var t=w[c][m[s]+\"_a\"]=[];w[c][m[s]]=function(){t.push(arguments);};}();}i.src=w[c].fastUrl+\"messo/\"+t+\"/messo.min.js\",i.async=!0,d.head.appendChild(i);}}(document,window);
                    `
                }
            }
            />

        </Head>
      <body className="bg-gray-50">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}