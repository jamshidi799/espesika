document.querySelectorAll("p").forEach((p) => {
  p.classList.add("text-muted");
  p.classList.add("text-justify");
});

document.querySelector("nav").innerHTML = `
<a class="navbar-brand" href="/">اسپه سیکا</a>
<button
  class="navbar-toggler"
  type="button"
  data-toggle="collapse"
  data-target="#collapsibleNavbar"
>
  <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="collapsibleNavbar">
  <ul class="navbar-nav">
    <li class="nav-item">
      <a class="nav-link" href="/ghooghaz.html">غاز ‌اوکراینی</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="/boghy.html">بوقلمون برنز</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="/ghazmahli.html">غاز محلی</a>
    </li>
  </ul>
</div>
`;

document.querySelector("footer").innerHTML = `
<div class="row">
<div class="col-12 col-sm-12 col-md-4 text-right mt-4">
  <h1 class="">اسپه‌سیکا</h1>
  <p class="">
    اسپه سیکا (در زبان مازندرانی یعنی اردک سفید) یک مجموعه پرواربندی و
    پرورش قوغاز و بوقلمون برنز آمریکایی به صورت ارگانیک هست که دو سال
    سابقه فعالیت دارد . برای خرید جوجه غاز و جوجه بوقلمون با ما تماس
    بگیرید
  </p>
</div>
<div class="col-12 col-sm-12 col-md-4 text-right mt-4">
  <h1 class="">اطلاعات تماس</h1>
  <div>
    <div class="d-flex align-items-center">
      <img
        src="img/icons/phone.png"
        class="icon icon-phone"
        alt="phone"
      />
      <div class="">7639 929 0991</div>
    </div>
    <div class="d-flex align-items-center">
      <img src="img/icons/location.png" class="icon" alt="location" />
      <div class="">مازندران,محمودآباد,روستای‌آزادمون</div>
    </div>
    <div class="d-flex align-items-center">
      <img src="img/icons/email.png" class="icon" alt="email" />
      <div class="">jamshidi.m799@gmail.com</div>
    </div>
  </div>
</div>
<div class="col-12 col-sm-12 col-md-4 text-right mt-4">
  <h1>محصولات</h1>
  <div>
    <div class="d-flex align-items-center">
      <img src="img/icons/arrow.png" class="icon" alt="email" />
      <a class="" href="/ghooghaz.html">غاز‌اوکراینی</a>
    </div>
    <div class="d-flex align-items-center">
      <img src="img/icons/arrow.png" class="icon" alt="email" />
      <a href="/boghy.html" class="">بوقلمون آمریکایی</a>
    </div>
    <div class="d-flex align-items-center">
      <img src="img/icons/arrow.png" class="icon" alt="email" />
      <a href="/ghazmahli" class="">غاز‌محلی</a>
    </div>
    <div class="d-flex align-items-center">
      <img src="img/icons/arrow.png" class="icon" alt="email" />
      <a href="/ordak.html" class="">اردک</a>
    </div>
    <div class="d-flex align-items-center">
      <img src="img/icons/arrow.png" class="icon" alt="email" />
      <a href="/" class="">جوجه محلی</a>
    </div>
  </div>
</div>
</div>`;
