import Button from '../components/Button'
import Input from '../components/Input'
import Card from '../components/Card'
import Alert from '../components/Alert'

export default function UIKit() {
  return (
    <div className="min-h-screen bg-bg dark:bg-dark-bg py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-primary text-white px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
            LAB-4 — UI Kit
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-text dark:text-dark-text mb-2">
            UI Kit Bileşenleri
          </h1>
          <p className="text-muted dark:text-dark-text-muted text-lg">
            Tekrar kullanılabilir React bileşenlerinin tüm varyantları
          </p>
        </div>

        {/* ─── 1 · BUTTON VARIANTS ─── */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-text dark:text-dark-text mb-1">Button — Varyantlar</h2>
          <p className="text-sm text-muted dark:text-dark-text-muted mb-4">primary · secondary · danger · ghost</p>
          <div className="flex flex-wrap gap-3">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="danger">Danger</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="primary" disabled>Disabled</Button>
          </div>
        </section>

        {/* ─── 2 · BUTTON SIZES ─── */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-text dark:text-dark-text mb-1">Button — Boyutlar</h2>
          <p className="text-sm text-muted dark:text-dark-text-muted mb-4">sm · md · lg</p>
          <div className="flex flex-wrap items-end gap-3">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
          </div>
        </section>

        {/* ─── 3 · INPUT STATES ─── */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-text dark:text-dark-text mb-1">Input — Durumlar</h2>
          <p className="text-sm text-muted dark:text-dark-text-muted mb-4">normal · hata · yardım metni · devre dışı</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl">
            <Input label="Normal Input" placeholder="Metin girin..." />
            <Input label="Hata Durumu" placeholder="Geçersiz değer" error="Bu alan zorunludur" />
            <Input label="Yardım Metni" placeholder="email@ornek.com" helpText="E-posta adresinizi girin" />
            <Input label="Devre Dışı" placeholder="Düzenlenemez" disabled />
          </div>
        </section>

        {/* ─── 4 · CARD VARIANTS ─── */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-text dark:text-dark-text mb-1">Card — Varyantlar</h2>
          <p className="text-sm text-muted dark:text-dark-text-muted mb-4">elevated · outlined · filled</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card variant="elevated" title="Elevated Card">
              Gölge efekti ile yükseltilmiş kart. Hover ile gölge büyür.
            </Card>

            <Card
              variant="outlined"
              title="Outlined Card"
              footer={<span className="text-xs text-muted dark:text-dark-text-muted">Footer alanı</span>}
            >
              Kenarlıklı kart, footer desteği ile birlikte.
            </Card>

            <Card variant="filled" title="Filled Card">
              Dolgulu arka plana sahip kart varyantı.
            </Card>
          </div>
        </section>

        {/* ─── 5 · ALERT VARIANTS ─── */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-text dark:text-dark-text mb-1">Alert — Varyantlar</h2>
          <p className="text-sm text-muted dark:text-dark-text-muted mb-4">info · success · warning · error</p>
          <div className="flex flex-col gap-4 max-w-2xl">
            <Alert variant="info" title="Bilgi">
              Bu bir bilgi mesajıdır. Kullanıcıya genel bilgi sağlar.
            </Alert>
            <Alert variant="success" title="Başarılı">
              İşlem başarıyla tamamlandı!
            </Alert>
            <Alert variant="warning" title="Uyarı" dismissible>
              Bu bir uyarı mesajıdır — kapatılabilir.
            </Alert>
            <Alert variant="error" title="Hata">
              Bir hata oluştu. Lütfen tekrar deneyin.
            </Alert>
          </div>
        </section>
      </div>
    </div>
  )
}
