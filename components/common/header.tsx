import Head from 'next/head';

export const siteTitle = 'طارم پلا';

export default function Header() {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="طارم پلا برنج طارم درجه یک مازندران ارسال به تمام نقاط ایران" />

        <meta property="og:title" content="طارم پلا برنج درجه یک مازندران" />
        <meta property="og:site_name" content="tarempela" />
        <meta property="og:url" content="http://tarempela.ir/" />
        <meta property="og:description" content="طارم پلا برنج طارم درجه یک مازندران ارسال به تمام نقاط ایران" />
        <meta property="og:type" content="business.business" />
        <meta property="og:image" content="https://drive.google.com/uc?export=download&id=1J8Uu703fgfUD_C2vx96kNeatYEBV2yw9" />
        <meta name="google-site-verification" content="ZtmciE-XG3LcOjDs5SjrppiQGqSPFZK446hs2uUJjPE" />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossOrigin="anonymous"></link>
      </Head>
    </>
  );
}
