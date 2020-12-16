import Head from "next/head";

export const siteTitle = "طارم پلا";

export default function Header() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>
          اسپه سیکا پرورش غاز اوکراینی(قو‌غاز‌) و بوقلمون برنز آمریکایی
        </title>
        <meta
          name="keywords"
          content="اسپه سیکا, غاز اوکراینی, قوغاز, جوجه غاز اوکراینی, قو‌غاز‌, بوقلمون برنز آمریکایی"
        />
        <meta
          name="description"
          content="مزرعه اسپه سیکا پرورش و فروش غاز اوکراینی(قو‌غاز‌‌) و بوقلمون برنز آمریکایی"
        />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="img/icons/kiwi-bird.png" type="image/x-icon" />
        <meta
          name="google-site-verification"
          content="fsX1ox9AKWWn3gB1lAv-GyMBNjc6UzTSrzDT3BsN6_Q"
        />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossOrigin="anonymous"
        ></link>
      </Head>
    </>
  );
}
