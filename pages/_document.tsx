import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Blog Title</title>
        <meta name="description" content="Blog description" />
        <meta property="og:title" content="Blog Title" />
        <meta property="og:description" content="Blog description" />
        <meta property="og:URL" content="https://blog.com/" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
