import Head from "next/head";
import '../styles/global.css';

const MyApp = ({ Component, pageProps}) => (
    <>
     <Head>
        <title>Metaversus</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="http://stijndv.com" />
        <link rel="stylesheet" href="http://stijndv.com/fonts/Eudoxus-Sans.css" />
     </Head>
     <Component {...pageProps} />
    </>
);

export default MyApp;