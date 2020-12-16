export default function Footer() {
  return (
    <footer className="container-fluid bg__footer p-5">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-4 text-right mt-4">
          <h1 className="">اسپه‌ سیکا</h1>
          <p className="">
            اسپه سیکا (در زبان مازندرانی یعنی اردک سفید) یک مجموعه پرواربندی و پرورش قوغاز و بوقلمون برنز آمریکایی به صورت ارگانیک هست که
            چهار سال سابقه فعالیت دارد . برای خرید جوجه غاز و جوجه بوقلمون با ما تماس بگیرید
          </p>
        </div>
        <div className="col-12 col-sm-12 col-md-4 text-right mt-4">
          <h1 className="">اطلاعات تماس</h1>
          <div>
            <div className="d-flex align-items-center">
              <img src="img/icons/phone.png" className="icon icon-phone" alt="phone" />
              <div className="">7639 929 0991</div>
            </div>
            <div className="d-flex align-items-center">
              <img src="img/icons/location.png" className="icon" alt="location" />
              <div className="">مازندران,محمودآباد,روستای‌آزادمون</div>
            </div>
            <div className="d-flex align-items-center">
              <img src="img/icons/email.png" className="icon" alt="email" />
              <div className="">jamshidi.m799@gmail.com</div>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-4 text-right mt-4">
          <h1>محصولات</h1>
          <div>
            <a href="/ghooghaz.html" className="d-flex align-items-center">
              <img src="img/icons/arrow.png" className="icon" alt="email" />
              <h5>غاز‌اوکراینی</h5>
            </a>
            <a href="/boghy.html" className="d-flex align-items-center">
              <img src="img/icons/arrow.png" className="icon" alt="email" />
              <h5>بوقلمون آمریکایی</h5>
            </a>
            <a href="/ghazmahli.html" className="d-flex align-items-center">
              <img src="img/icons/arrow.png" className="icon" alt="email" />
              <h5>غاز‌محلی</h5>
            </a>
            <a href="/ordak.html" className="d-flex align-items-center">
              <img src="img/icons/arrow.png" className="icon" alt="email" />
              <h5>اردک محلی</h5>
            </a>
            <a href="/" className="d-flex align-items-center">
              <img src="img/icons/arrow.png" className="icon" alt="email" />
              <h5>جوجه محلی</h5>
            </a>
          </div>
        </div>
      </div>
      <style jsx>{`
        .bg__footer {
          position: relative;
          overflow-x: hidden;
          padding: 20px;
        }

        .bg__footer::before {
          content: '';
          display: block;
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
          opacity: 0.6;
        }

        .max-height {
          max-height: 550px;
        }

        .icon {
          max-width: 30px;
          height: auto;
          margin: 10px;
        }

        .icon-phone {
          transform: rotateY(180deg);
        }
      `}</style>
    </footer>
  );
}
