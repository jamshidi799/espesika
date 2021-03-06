import Head from 'next/head';
import styles from './index.module.scss';
import Image from 'next/image';
import Layout from '../components/layout';

export default function Home() {
  return (
    <Layout isCantanier={false}>
      <Head>
        <title>طارم پلا برنج اصیل مازندران</title>
      </Head>

      <main>
        <div className="hero-ghazmahli" title="اسپه سیکا غاز محلی قوغاز غاز اوکراینی"></div>

        <section>
          <div className="container">
            <div className="section">
              <h1>
                <strong>غاز محلی</strong>
              </h1>
              <p>
                غاز های محلی به نژادی از غاز ها می‌گویند که دارای پرهای سفید و ابلق و چشمان آبی و همچنین نوک نارنجی هستند . در سال های اخیر
                پرورش این نژاد از غاز در مازندران طرفدار زیادی داشته است و به همین دلیل به غاز های محلی مشهور شدند . غاز های محلی وزن شان به
                پنج کیلو می‌رسد و استفاده از گوشت آن ها از هدف های اصلی پرورش این غاز می‌باشد .
              </p>
              <p></p>
            </div>
          </div>

          <div className="parallax-ghazmahli" title="اسپه سیکا غاز محلی قوغاز غاز اوکراینی"></div>

          <div className="container">
            <div className="bache">
              <div className="row justify-content-lg-between">
                <div className="col-12 col-sm-12 col-md-12 col-lg-4 order-1 order-lg-0">
                  <div className="image-wrapper">
                    <img
                      src="img/img/abi6.jpg"
                      alt="اسپه سیکا جوجه
              غاز اوکراینی قو‌غاز‌"
                    />
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-8 order-0 order-lg-1">
                  <div className="jumbotron">
                    <h4>جوجه غاز محلی</h4>
                    <p>
                      جوجه غازهای محلی تقریباً دو ماه زمان نیاز دارند که به بلوغ برسند. در روز های ابتدایی به محیط گرم و جای خشک نیاز دارند
                      .
                    </p>
                    <p>
                      سرعت رشد جوجه‌های غاز محلی از غاز اوکراینی بیشتر است و همچنین جوجه های یک روزه غاز محلی تقریبا یک و نیم برابر جوجه
                      قوغاز می‌باشد . جوجه غاز ها به آب علاقه خاصی دارند و در روز های گرم تابستان از آب برای خنک شدن استفاده می‌کنند
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="jumbotron">
              <div className="tokhm-gozar">
                <h3>
                  <strong>غاز محلی بالغ</strong>
                </h3>
                <br />
                <p>
                  غاز های محلی وزن شان معمولا بین چهار و پنج کیلو می‌باشد درحالی که غاز های مجموعه <strong>اسپه سیکا‌</strong> غاز های دورگه
                  اوکراینی-محلی می‌باشند که دارای جثه بزرگ تری هستند و رنگ گردن و پر هایشان ترکیب زیبایی از غاز های اوکراینی و محلی است .
                  لازم به ذکر است که غاز های دورگه تقریبا تا ۴۵ روز بعد از تولد از نظر ظاهری فرقی با غاز های اوکراینی ندارند .
                </p>
                <img src="img/img/abi3.jpg" alt="قو‌غاز‌ تخم گذار اسپه سیکا" />
                <p className="mt-4">
                  فصل تخم گذاری غاز های محلی همانند قوغاز ها از اوایل زمستان شروع می‌شود و تا اوایل خرداد نیز ادامه دارد. غاز های محلی بعد
                  از تخم گذاری روی تخم خود می‌نشینند یا به اصطلاح کرج (korj) می‌شوند . در مجموعه <strong>اسپه سیکا‌</strong> این تخم ها جمع
                  آوری شده و در دستگاه جوجه کشی گذاشته می‌شود و باید گفت که درصد خرابی تخم های غاز محلی بسیار پایین است و از این نظر هم
                  بازدهی خوبی دارند . این تخم ها بعد از قرار داده شدن در دستگاه باید از دو مرحله نطفه سنجی رد شوند تا تخم های بدون نطفه
                  شناسایی شوند و از دستگاه بیرون بیایند چون احتمال انفجار و ترکیدن تخم های بدون نطفه بعد از ۱۸ الی ۲۰ روز زیاد می‌شود و اگر
                  در دستگاه منفجر شوند همه‌ی تخم ها آلوده می‌شوند و محیط آلوده بازدهی دستگاه جوجه‌کشی را پایین می‌آورد .
                </p>
                <p>
                  غاز های محلی همانند قوغاز ها بعد از فصل تخم گذاری پرهای خود را می‌ریزند و پر جدید درمی‌آورند و در این هنگام بخشی از وزن
                  خود را از دست می‌دهند که البته که بر اساس تجربه و مشاهده ما در مجموعه
                  <strong>اسپه سیکا</strong> غاز های محلی نسبت به قوغاز ها زودتر وزن از دست رفته خود را بدست می‌آورند
                </p>
                <p>
                  غازهای مجموعه <strong>اسپه‌سیکا </strong> در فصل های پاییز و زمستان در زمین های کشاورزی نگه‌داری می‌شوند که این کار هم به
                  سلامت غازها کمک می‌کند و باعث می‌شود غازها وزن از دست رفته خود را بدست بیاورند و همینطور به ارگانیک بودن پرورش غازها کمک
                  می شود. بودن غازها در زمین کشاورزی یک مزیت برای خود زمین کشاورزی محسوب می‌شود که پیشنهاد می‌کنم برای اطلاعات بیشتر به سایت{' '}
                  <a href="https://tarempela.ir/" className="text-primary" target="blank">
                    <strong className="px-2">طارم پلا</strong>{' '}
                  </a>
                  مراجعه کنید
                </p>
                <p>
                  مجموعه{' '}
                  <a href="https://tarempela.ir/" className="text-primary" target="blank">
                    <strong className="px-2">طارم پلا</strong>{' '}
                  </a>{' '}
                  و <strong>‌اسپه‌ سیکا</strong> درکنار هم قرار دارند و از پرنده‌های (قوغاز و غاز‌محلی و اردک) مجموعه اسپه‌سیکا برای از بین
                  بردن کرم ها و علف های هرز زمین های کشاورزی مجموعه طارم پلا استفاده می‌شود. این کار نیاز زمین های کشاورزی به سم های شیمیایی
                  را از بین می‌برد و باعث تولید برنج ارگانیک می‌شود
                </p>
                <h3 className="text-center mt-4">این صفحه به‌تدریج کامل می‌شود</h3>
              </div>
            </div>
          </div>
        </section>
        <br />
        <br />
      </main>
    </Layout>
  );
}
