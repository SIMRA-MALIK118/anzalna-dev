import Head from 'next/head'

const OpenGraphHead = () => (
  <Head>
    <title>Anzalna Ansari</title>
    <meta name="description" content="My personal solace place on web-earth." />
    <meta property="og:title" content="Anzalna Ansari" />
    <meta
      property="og:description"
      content="Full-Stack MERN Developer | WordPress Specialist | UI/UX Designer"
    />
    <meta property="og:type" content="profile" />
    <meta property="og:image" content="/profile.png" />
  </Head>
)

export default OpenGraphHead