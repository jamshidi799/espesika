import Head from "next/head";
import styles from "./index.module.scss";
import Image from "next/image";
import Link from "next/link";
import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout isCantanier={false}>
      <Head>
        <title>طارم پلا برنج اصیل مازندران</title>
      </Head>

      <header>
        <div id="demo" className="carousel slide" data-ride="carousel">
          <ul className="carousel-indicators">
            <li data-target="#demo" data-slide-to="0" className="active"></li>
            <li data-target="#demo" data-slide-to="1"></li>
            <li data-target="#demo" data-slide-to="2"></li>
          </ul>
          <div className={styles.carousel_inner}>
            <div className="overlay"></div>
            <div className="carousel-item">
              <img
                className="carousel-img"
                src="img/carousel/gho.jpg"
                alt="اسپه سیکا"
              />
              <div className="carousel-caption">
                <h1>غاز اوکراینی (قو‌غاز‌)</h1>
                <h3>پرورش غاز اوکراینی</h3>
              </div>
            </div>
            <div className="carousel-item">
              <img
                className="carousel-img"
                src="img/carousel/boghi.jpg"
                alt="اسپه سیکا"
              />
              <div className="carousel-caption">
                <h1>بوقلمون</h1>
                <h3>پرورش بوقلمون های برنز با وزن ۱۷ کیلو</h3>
              </div>
            </div>
            <div className="carousel-item active">
              <img src="img/img/abi_bache2.jpg" alt="اسپه سیکا" />
              <div className="carousel-caption">
                <h1>غاز محلی</h1>
                <h3>پرورش غاز های محلی دورگه</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-overlay"></div>
      </header>

      <main>
        <section>
          <div className="container">
            <div className="row justify-content-md-around">
              <div className="col-12 col-sm-12 col-md-3 d-flex flex-column align-items-center">
                <img
                  src="/img/img/boghy1.jpg"
                  className={styles.card_img}
                  alt="بوقلمون برنز آمریکایی"
                />
                <p className="text-center">
                  بوقلمون برنز آمریکایی یک نژاد خاص از بوقلمون است که با هدف
                  پرواربندی پرورش داده می‌شود. بوقلمون‌های‌ برنز به وزن ۱۷ کیلو
                  می رسند
                </p>
              </div>
              <div className="col-12 col-sm-12 col-md-3 d-flex flex-column align-items-center">
                <img
                  src="/img/img/ghoo3.jpg"
                  className={styles.card_img}
                  alt="غاز اوکراینی یا قو‌غاز‌ ‌‌یا غاز آفریقایی"
                />
                <p className="text-center">
                  غاز اوکراینی یا قوغاز دارای منقار‌های سیاه و گردن قهوه‌ای
                  می‌باشند. غاز اوکراینی به وزن ۹ کیلوگرم می رسند و همچنین عموما
                  قوغاز برای تخم گذاری استفاده می‌شود
                </p>
              </div>
              <div className="col-12 col-sm-12 col-md-3 d-flex flex-column align-items-center">
                <img
                  src="/img/img/abi_1.jpg"
                  className={styles.card_img}
                  alt="غاز محلی یا غاز‌های دورگه"
                />
                <p className="text-center">
                  غاز‌های دورگه یا غاز محلی عموما به رنگ های سفید یا ابلق یافت
                  می‌شوند و دارای منقار نارنجی می‌باشند. غاز محلی به وزن ۶
                  کیلوگرم می رسد.
                </p>
              </div>
            </div>
          </div>
        </section>

        <br />
        <hr />
        <br />

        <section>
          <div className="container mb-5">
            <div className="row justify-content-md-around">
              <img
                src="img/img/ghoo_bache3.jpg"
                className="col-sm-12 col-md-5 order-2 order-md-1"
                alt="اسپه سیکا"
              />
              <div className="col-sm-12 col-md-7 order-1 order-md-2 d-flex flex-column justify-content-md-center mb-3 mb-lg-0">
                <h1 className="text-right mb-5">بچه غاز اوکراینی</h1>
                <p>
                  قوغازها در سال‌های اخیر علاقه مردم را به خود جذب کرده است.
                  دراین بین بچه غازهای اوکراینی به‌دلیل قیمت بسیار کمتر از
                  غازهای مولد بهترین انتخاب برای شروع پرورش قوغاز بشمار می‌روند
                  .
                </p>
                <p>
                  شما می‌توانید بچه غازهای اوکراینی در سن‌‌های مختلف را با قیمت
                  مناسب از مجموعه <strong>اسپه‌سیکا</strong>‌ تهیه کنید که عمده
                  مردم بچه غازهای بزرگتر از یک ماه را ترجیح میدهند چون هم احتمال
                  مرگ آن ها کمتر است و هم دردسر نگهداری کمتری برای خریداران دارد
                </p>
                <Link href="/ghooghaz">
                  <a className="text-muted text-right">
                    <span> &gt;&gt; </span>‌جزییات پرورش قوغاز
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <br />

        <section>
          <div className="container mb-5">
            <div className="row justify-content-md-around">
              <div className="col-sm-12 col-md-6 d-flex flex-column justify-content-md-center mb-3 mb-lg-0">
                <h1 className="text-right mb-5">بچه بوقلمون برنز</h1>
                <p>
                  بچه بوقلمون‌های‌ برنز که از خطر مرگ نجات پیدا کرده‌اند ‌مورد
                  استقبال خریداران قرار می‌گیرند که معمولا ۱ یا ۲ ماه سن دارند .
                </p>
                <p>
                  برای اطلاعات بیشتر درمورد پرورش بوقلمون برنز آمریکایی به صفحه
                  آن بروید
                </p>
                <Link href="/boghy">
                  <a className="text-muted text-right">
                    <span> &gt;&gt; </span>‌جزییات پرورش بوقلمون برنز آمریکایی
                  </a>
                </Link>
              </div>
              <img
                src="img/img/boghy_bache.jpg"
                className="col-sm-12 col-md-5 sec-img"
                alt="اسپه سیکا"
              />
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="row justify-content-md-around">
              <img
                src="img/img/abi_bache3.jpg"
                className="col-sm-12 col-md-5 order-2 order-md-1 sec-img max-height"
                alt="اسپه سیکا"
              />
              <div className="col-sm-12 col-md-6 order-1 order-md-2 d-flex flex-column justify-content-md-center mb-3 mb-lg-0">
                <h1 className="text-right mb-5">بچه غاز محلی</h1>
                <p>
                  غازهای محلی یا غاز هوایی که در مجموعه
                  <strong> اسپه سیکا </strong> پرورش داده می‌شوند غاز های دورگه
                  اصلاح نژاد شده هستند
                </p>
                <p>
                  جوجه‌های غاز محلی سریع‌تر از جوجه غاز‌اوکراینی رشد می‌کند و
                  نگهداری از آنها هم آسان‌تر است
                </p>
                <p>
                  برای اطلاعات بیشتر درمورد پرورش غازهای محلی به صفحه آن بروید
                </p>
                <Link href="/ghazmahali">
                  <a className="text-muted text-right">
                    <span> &gt;&gt; </span>‌جزییات پرورش غازهای محلی
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
