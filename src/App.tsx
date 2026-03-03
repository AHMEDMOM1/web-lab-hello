import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* ── HEADER / NAV — Flexbox ── */}
      <header className="header">
        <nav className="nav" role="navigation" aria-label="Ana navigasyon">
          <div className="nav__brand">
            <span className="nav__brand-icon" aria-hidden="true">🚀</span>
            Web Lab
          </div>
          <ul className="nav__links">
            <li><a href="#hero" className="nav__link nav__link--active">Ana Sayfa</a></li>
            <li><a href="#tech" className="nav__link">Teknolojiler</a></li>
            <li><a href="#counter" className="nav__link">Sayaç</a></li>
            <li><a href="#about" className="nav__link">Hakkımda</a></li>
          </ul>
        </nav>
      </header>

      {/* ── HERO SECTION ── */}
      <section className="hero" id="hero">
        <span className="hero__badge">LAB-3 — Responsive Design</span>
        <h1 className="hero__title">Web Tasarımı ve Programlama</h1>
        <p className="hero__subtitle">
          Modern CSS, Responsive Layout, Design Tokens ve Fluid Typography
          kullanılarak geliştirilmiş bir web uygulaması.
        </p>

        {/* ── Student Info Card ── */}
        <div className="info-card" id="about">
          <div className="info-card__row">
            <span className="info-card__icon" aria-hidden="true">👤</span>
            <span className="info-card__label">Ad Soyad:</span>
            <span className="info-card__value">Ahmed Al Hamed</span>
          </div>
          <div className="info-card__row">
            <span className="info-card__icon" aria-hidden="true">🎓</span>
            <span className="info-card__label">Öğrenci No:</span>
            <span className="info-card__value">225541606</span>
          </div>
          <div className="info-card__row">
            <span className="info-card__icon" aria-hidden="true">📚</span>
            <span className="info-card__label">Ders:</span>
            <span className="info-card__value">Web Tasarımı ve Programlama</span>
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <main className="main">
        {/* ── Technologies — CSS Grid Cards ── */}
        <section id="tech">
          <div className="section-header">
            <h2 className="section-header__title">Kullanılan Teknolojiler</h2>
            <p className="section-header__desc">Bu projede kullanılan modern web teknolojileri</p>
          </div>

          <div className="cards-grid">
            <article className="card">
              <span className="card__icon" aria-hidden="true">⚛️</span>
              <h3 className="card__title">React</h3>
              <p className="card__desc">
                Kullanıcı arayüzleri oluşturmak için kullanılan modern JavaScript kütüphanesi.
                Component tabanlı mimari ile hızlı ve verimli uygulamalar geliştirmeyi sağlar.
              </p>
            </article>

            <article className="card">
              <span className="card__icon" aria-hidden="true">📘</span>
              <h3 className="card__title">TypeScript</h3>
              <p className="card__desc">
                JavaScript'e tip güvenliği ekleyen programlama dili.
                Daha güvenilir ve bakımı kolay kod yazmayı sağlar.
              </p>
            </article>

            <article className="card">
              <span className="card__icon" aria-hidden="true">⚡</span>
              <h3 className="card__title">Vite</h3>
              <p className="card__desc">
                Hızlı geliştirme deneyimi sunan modern build aracı.
                Hot Module Replacement ile anında değişiklik gösterir.
              </p>
            </article>

            <article className="card">
              <span className="card__icon" aria-hidden="true">🎨</span>
              <h3 className="card__title">CSS Tokens</h3>
              <p className="card__desc">
                Tutarlı tasarım sistemi sağlayan CSS custom properties.
                Renkler, aralıklar ve tipografi tek yerden yönetilir.
              </p>
            </article>

            <article className="card">
              <span className="card__icon" aria-hidden="true">📐</span>
              <h3 className="card__title">Flexbox</h3>
              <p className="card__desc">
                Esnek mizanpaj düzeni oluşturmak için kullanılan CSS modülü.
                Header ve navigasyon bölümlerinde kullanılmıştır.
              </p>
            </article>

            <article className="card">
              <span className="card__icon" aria-hidden="true">🔲</span>
              <h3 className="card__title">CSS Grid</h3>
              <p className="card__desc">
                İki boyutlu grid sistemi ile responsive kart düzeni.
                Otomatik sütun sayısı ayarlama ile esnek yapı sunar.
              </p>
            </article>
          </div>
        </section>

        {/* ── COUNTER SECTION ── */}
        <section className="counter-section" id="counter">
          <h2 className="counter-section__title">Etkileşimli Sayaç</h2>
          <div className="counter__display" aria-live="polite" aria-label={`Sayaç değeri: ${count}`}>
            {count}
          </div>
          <div className="counter__buttons">
            <button
              className="btn btn--primary"
              onClick={() => setCount(c => c + 1)}
              aria-label="Sayacı artır"
            >
              + Artır
            </button>
            <button
              className="btn btn--outline"
              onClick={() => setCount(0)}
              aria-label="Sayacı sıfırla"
            >
              ↺ Sıfırla
            </button>
          </div>
        </section>
      </main>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <div className="footer__content">
          <p className="footer__text">
            React + TypeScript + Vite ile geliştirildi &copy; {new Date().getFullYear()}
          </p>
          <p className="footer__brand">Ahmed Al Hamed — 225541606</p>
        </div>
      </footer>
    </>
  )
}

export default App