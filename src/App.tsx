import { useState, useEffect } from 'react'
import UIKit from './pages/UIKit'

function App() {
  const [count, setCount] = useState(0)
  const [page, setPage] = useState<'home' | 'uikit'>('home')
  const [dark, setDark] = useState(false)

  // Toggle dark class on <html>
  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])

  return (
    <>
      {/* ── Skip Link (Accessibility) ── */}
      <a href="#main-content" className="skip-link">
        İçeriğe geç
      </a>

      {/* ── HEADER / NAV ── */}
      <header className="bg-surface dark:bg-dark-surface border-b border-border dark:border-dark-border sticky top-0 z-50 shadow-sm">
        <nav
          className="flex flex-col sm:flex-row items-center sm:justify-between gap-3 sm:gap-0 max-w-6xl mx-auto px-4 py-3"
          role="navigation"
          aria-label="Ana navigasyon"
        >
          {/* Brand */}
          <div className="text-xl font-bold text-primary flex items-center gap-2">
            <span aria-hidden="true">🚀</span>
            Web Lab
          </div>

          {/* Nav links + dark toggle */}
          <div className="flex items-center gap-2 flex-wrap justify-center">
            <button
              onClick={() => setPage('home')}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                page === 'home'
                  ? 'bg-primary text-white'
                  : 'text-muted dark:text-dark-text-muted hover:bg-primary-light dark:hover:bg-dark-surface-alt'
              }`}
            >
              Ana Sayfa
            </button>
            <button
              onClick={() => setPage('uikit')}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                page === 'uikit'
                  ? 'bg-primary text-white'
                  : 'text-muted dark:text-dark-text-muted hover:bg-primary-light dark:hover:bg-dark-surface-alt'
              }`}
            >
              UI Kit
            </button>

            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDark(d => !d)}
              aria-label={dark ? 'Açık moda geç' : 'Koyu moda geç'}
              className="ml-2 p-2 rounded-full text-lg transition-all duration-200 hover:bg-primary-light dark:hover:bg-dark-surface-alt"
            >
              {dark ? '☀️' : '🌙'}
            </button>
          </div>
        </nav>
      </header>

      {/* ── PAGE ROUTER ── */}
      {page === 'uikit' ? (
        <UIKit />
      ) : (
        <>
          {/* ── HERO SECTION ── */}
          <section
            id="hero"
            className="text-center py-12 sm:py-16 lg:py-20 px-4 sm:px-8
              bg-gradient-to-br from-primary-light to-bg
              dark:from-dark-surface dark:to-dark-bg"
          >
            <span className="inline-block bg-primary text-white px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
              LAB-4 — Tailwind CSS
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text dark:text-dark-text leading-tight mb-3">
              Web Tasarımı ve Programlama
            </h1>
            <p className="text-lg text-muted dark:text-dark-text-muted max-w-xl mx-auto mb-8">
              Tailwind CSS v4, Responsive Layout, Reusable Components ve Dark Mode
              kullanılarak geliştirilmiş bir web uygulaması.
            </p>

            {/* Student Info Card */}
            <div
              id="about"
              className="bg-surface dark:bg-dark-surface rounded-xl p-6 shadow-card max-w-md mx-auto border-l-4 border-primary"
            >
              {[
                { icon: '👤', label: 'Ad Soyad:', value: 'Ahmed Al Hamed' },
                { icon: '🎓', label: 'Öğrenci No:', value: '225541606' },
                { icon: '📚', label: 'Ders:', value: 'Web Tasarımı ve Programlama' },
              ].map((item, i, arr) => (
                <div
                  key={item.label}
                  className={`flex items-center gap-3 py-3 text-base ${
                    i < arr.length - 1 ? 'border-b border-border dark:border-dark-border' : ''
                  }`}
                >
                  <span className="text-lg flex-shrink-0" aria-hidden="true">{item.icon}</span>
                  <span className="font-semibold text-text dark:text-dark-text">{item.label}</span>
                  <span className="text-muted dark:text-dark-text-muted">{item.value}</span>
                </div>
              ))}
            </div>
          </section>

          {/* ── MAIN CONTENT ── */}
          <main
            id="main-content"
            className="flex-1 py-8 sm:py-12 lg:py-16 px-4 sm:px-8 max-w-6xl mx-auto w-full"
          >
            {/* Technologies Section */}
            <section id="tech">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-text dark:text-dark-text mb-1">
                  Kullanılan Teknolojiler
                </h2>
                <p className="text-base text-muted dark:text-dark-text-muted">
                  Bu projede kullanılan modern web teknolojileri
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { icon: '⚛️', title: 'React', desc: 'Kullanıcı arayüzleri oluşturmak için kullanılan modern JavaScript kütüphanesi. Component tabanlı mimari ile hızlı ve verimli uygulamalar geliştirmeyi sağlar.' },
                  { icon: '📘', title: 'TypeScript', desc: "JavaScript'e tip güvenliği ekleyen programlama dili. Daha güvenilir ve bakımı kolay kod yazmayı sağlar." },
                  { icon: '⚡', title: 'Vite', desc: 'Hızlı geliştirme deneyimi sunan modern build aracı. Hot Module Replacement ile anında değişiklik gösterir.' },
                  { icon: '🌊', title: 'Tailwind CSS', desc: 'Utility-first CSS framework. Hızlı ve tutarlı tasarım sistemi, responsive layout ve dark mode desteği sağlar.' },
                  { icon: '📐', title: 'Flexbox', desc: 'Esnek mizanpaj düzeni oluşturmak için kullanılan CSS modülü. Header ve navigasyon bölümlerinde kullanılmıştır.' },
                  { icon: '🔲', title: 'CSS Grid', desc: 'İki boyutlu grid sistemi ile responsive kart düzeni. Otomatik sütun sayısı ayarlama ile esnek yapı sunar.' },
                ].map((tech) => (
                  <article
                    key={tech.title}
                    className="bg-surface dark:bg-dark-surface rounded-xl p-6 shadow-card border border-border dark:border-dark-border
                      transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover flex flex-col"
                  >
                    <span className="text-3xl mb-3" aria-hidden="true">{tech.icon}</span>
                    <h3 className="text-lg font-semibold text-text dark:text-dark-text mb-2">{tech.title}</h3>
                    <p className="text-sm text-muted dark:text-dark-text-muted leading-relaxed flex-1">{tech.desc}</p>
                  </article>
                ))}
              </div>
            </section>

            {/* Counter Section */}
            <section
              id="counter"
              className="text-center py-12 sm:py-16 bg-surface dark:bg-dark-surface rounded-2xl shadow-card mt-12"
            >
              <h2 className="text-xl font-semibold text-text dark:text-dark-text mb-4">
                Etkileşimli Sayaç
              </h2>
              <div
                className="text-5xl font-bold text-primary mb-6 tabular-nums"
                aria-live="polite"
                aria-label={`Sayaç değeri: ${count}`}
              >
                {count}
              </div>
              <div className="flex justify-center gap-4 flex-wrap">
                <button
                  onClick={() => setCount(c => c + 1)}
                  aria-label="Sayacı artır"
                  className="px-6 py-2.5 rounded-full font-semibold text-base bg-primary text-white hover:bg-primary-hover transition-all duration-200 hover:scale-105 shadow-md
                    focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-dark-surface"
                >
                  + Artır
                </button>
                <button
                  onClick={() => setCount(0)}
                  aria-label="Sayacı sıfırla"
                  className="px-6 py-2.5 rounded-full font-semibold text-base bg-transparent text-primary border-2 border-primary hover:bg-primary-light dark:hover:bg-dark-surface-alt transition-all duration-200
                    focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-dark-surface"
                >
                  ↺ Sıfırla
                </button>
              </div>
            </section>
          </main>

          {/* ── FOOTER ── */}
          <footer className="bg-text text-white text-center py-8 px-4 mt-auto">
            <div className="max-w-6xl mx-auto">
              <p className="text-sm text-white/70 mb-1">
                React + TypeScript + Vite + Tailwind CSS ile geliştirildi &copy; {new Date().getFullYear()}
              </p>
              <p className="text-base font-semibold text-white/90">
                Ahmed Al Hamed — 225541606
              </p>
            </div>
          </footer>
        </>
      )}
    </>
  )
}

export default App