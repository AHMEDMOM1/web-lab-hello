# CSS Kararları — LAB-3

Bu belge, LAB-3 projesinde alınan CSS tasarım kararlarını açıklar.

---

## 1. Breakpoints: Neden 640px ve 1024px?

**Mobile-First** yaklaşımı benimsenmiştir. Varsayılan stiller mobil cihazlar (0–639px) için yazılmış, daha büyük ekranlar `min-width` media query'leri ile genişletilmiştir.

- **640px (Tablet):** Çoğu tablet cihazın yatay genişliği bu aralıktadır. Navigasyon yatay konuma geçer, kartlar iki sütuna genişler.
- **1024px (Desktop):** Masaüstü monitörlerde tam genişlik düzeni aktifleşir. Kartlar 3 sütuna geçer, spacing artırılır.

Bu değerler, yaygın cihaz boyutlarına göre ve içeriğin okunabilirliğine göre seçilmiştir.

---

## 2. Flexbox vs Grid: Ne Zaman Hangisi?

- **Flexbox → Header/Nav:** Navigasyon tek boyutlu (yatay) bir düzendir. Flex, elemanları sıralamak, hizalamak ve `flex-wrap` ile mobilde dikey yığılmaya geçmek için idealdir.
- **CSS Grid → Kart Düzeni:** Kartlar iki boyutlu (satır + sütun) bir grid düzeni gerektirir. `repeat(auto-fit, minmax(280px, 1fr))` ile otomatik responsive davranış sağlanır.

---

## 3. Design Tokens: Neler ve Neden?

Tüm tasarım değerleri CSS custom properties (`--var`) olarak `:root`'ta tanımlanmıştır:

| Token Grubu   | Örnek                        | Amaç                          |
|---------------|------------------------------|-------------------------------|
| **Renkler**   | `--color-primary: #6366f1`   | Tutarlı renk paleti           |
| **Spacing**   | `--space-md: 1rem`           | Standart aralık sistemi       |
| **Radius**    | `--radius-lg: 0.75rem`       | Tutarlı köşe yuvarlama        |
| **Shadow**    | `--shadow-md`                | Derinlik hiyerarşisi          |
| **Typography**| `--text-base: clamp(...)`    | Fluid typography (clamp)      |
| **Transition**| `--transition-fast: 150ms`   | Tutarlı animasyon süreleri    |

Token kullanımı sayesinde tüm tasarım tek yerden değiştirilebilir ve tutarlılık sağlanır.

---

## 4. Breakpoint'lerde Ne Değişir?

| Özellik         | Mobile (0–639px)       | Tablet (≥640px)             | Desktop (≥1024px)          |
|-----------------|------------------------|-----------------------------|----------------------------|
| **Nav**         | Dikey (column)         | Yatay (row)                 | Yatay (row)                |
| **Kartlar**     | 1 sütun                | auto-fit (2 sütun)          | 3 sütun                   |
| **Padding**     | Minimal                | Orta                        | Geniş                     |
| **Typography**  | Küçük (clamp min)      | Orta (clamp mid)            | Büyük (clamp max)          |
| **Kart yüksekliği** | 160px image       | 180px image                 | 200px image                |

---

## 5. Fluid Typography

`clamp()` fonksiyonu kullanılarak yazı boyutları ekran genişliğine göre otomatik ölçeklenir. Bu sayede ayrı breakpoint'lerde `font-size` tanımlamaya gerek kalmaz. Örnek:

```css
--text-base: clamp(0.9375rem, 0.875rem + 0.3vw, 1.0625rem);
```

Minimum 15px, maksimum 17px arasında akıcı geçiş sağlanır.
