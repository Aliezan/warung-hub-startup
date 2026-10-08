// Replace with the real WhatsApp business number (format 62…, no + or spaces).
const WA_NUMBER = '62XXXXXXXXXX'
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
  'Halo Warteg Hub, saya mau daftar.\nNama warteg: \nAlamat: \nNama pemilik: '
)}`

const DAYS_PER_MONTH = 26

// Example basket only. Prices are illustrative, not live.
const NOTA = [
  ['Beras medium', '10 kg', 140000, 130000],
  ['Minyak goreng', '5 liter', 90000, 82500],
  ['Telur ayam', '3 kg', 90000, 82500],
  ['Ayam potong', '5 kg', 190000, 175000],
  ['Cabai rawit', '1 kg', 60000, 54000],
  ['Bawang merah', '2 kg', 84000, 76000],
  ['Tempe', '10 papan', 60000, 55000],
]

const STEPS = [
  ['16.00', 'Harga besok masuk ke WhatsApp Anda', 'Daftar harga untuk antaran besok subuh. Harga itu yang Anda bayar, tidak berubah lagi walaupun pasar naik malam itu.'],
  ['s/d 21.00', 'Balas dengan daftar belanja', 'Ketik biasa, atau foto saja catatan belanja tulisan tangan. Tidak perlu pasang aplikasi.'],
  ['22.00–02.00', 'Pesanan digabung, lalu kami belanja', 'Pesanan semua warteg di wilayah Anda dijadikan satu. Beras dari Pasar Induk Beras Cipinang, sayur dan cabai dari Pasar Induk Kramat Jati, minyak dan telur langsung dari distributor.'],
  ['03.00–05.00', 'Barang sampai, dicek, baru dibayar', 'Hitung dan timbang dulu kalau mau. Setelah cocok, bayar tunai atau QRIS ke kurir.'],
]

const GOODS = [
  ['Beras', 'Medium dan premium. Per 5 kg atau karung 25 kg.'],
  ['Minyak goreng', 'Per liter atau jeriken 18 liter.'],
  ['Telur ayam', 'Per kg atau satu peti 15 kg.'],
  ['Ayam potong', 'Per kg. Utuh, potong 8, atau potong 12.'],
  ['Ikan', 'Tongkol, bandeng, lele, kembung. Per kg.'],
  ['Cabai dan bawang', 'Rawit, merah keriting, bawang merah, bawang putih. Mulai ¼ kg.'],
  ['Sayur', 'Kangkung, sawi, kacang panjang, labu siam, terong. Per ikat atau per kg.'],
  ['Tahu dan tempe', 'Per papan atau per potong.'],
  ['Bumbu dan kecap', 'Garam, gula, kecap, penyedap. Per bungkus atau per dus.'],
]

const RULES = [
  ['Bayar waktu barang sampai', 'Tunai atau QRIS ke kurir. Untuk sekarang belum ada sistem tempo.'],
  ['Barang kurang atau rusak', 'Foto, kirim ke WhatsApp kami sebelum jam 08.00. Kekurangannya kami potong dari tagihan antaran berikutnya.'],
  ['Minimal Rp 300 ribu', 'Per antaran. Ongkos antar sudah masuk di harga, tidak ditagih terpisah.'],
  ['Tanpa biaya daftar, tanpa kontrak', 'Pesan hari ini, besok libur, lusa pesan lagi. Mau berhenti, tinggal berhenti.'],
]

const WAVES = [
  ['Gelombang 1', 'Pendaftaran dibuka', ['Jakarta Timur', 'Kota Bekasi']],
  ['Gelombang 2', 'Daftar tunggu', ['Jakarta Pusat', 'Jakarta Selatan', 'Jakarta Utara', 'Depok']],
  ['Gelombang 3', 'Daftar tunggu', ['Jakarta Barat', 'Tangerang dan Tangerang Selatan', 'Bogor', 'Kabupaten Bekasi']],
]

const FAQ = [
  ['Harus pakai aplikasi?', 'Tidak. Semua lewat WhatsApp: harga, pesanan, dan komplain.'],
  ['Saya sudah punya langganan di pasar.', 'Tidak perlu langsung pindah. Coba pesan sebagian dulu, misalnya beras dan minyak saja. Bandingkan selisihnya selama seminggu.'],
  ['Bisa bayar belakangan?', 'Belum. Sekarang bayar saat barang sampai. Itu yang membuat harga kami bisa tetap murah.'],
  ['Kalau harga cabai tiba-tiba naik?', 'Harga yang kami kirim jam 16.00 berlaku untuk antaran besok subuh. Kalau pasar naik malam itu, kami yang tanggung.'],
  ['Saya bukan warteg. Boleh ikut?', 'Boleh. Warung nasi, nasi padang, warung soto, atau siapa saja yang masak tiap hari.'],
]

// Photos from Wikimedia Commons; CC licenses require the credit in the footer.
const COMMONS = 'https://commons.wikimedia.org/wiki/File:'
const PHOTOS = {
  warteg: ['warteg.jpg', 1280, 1442, 'Warteg kecil berdinding kayu biru dengan tulisan WARTEG', 'Warteg, tiap hari masak dari subuh', 'Midori', 'CC BY-SA 3.0', 'Warung_Tegal_di_Kota_Tegal.JPG'],
  etalase: ['etalase.jpg', 1024, 768, 'Etalase kaca warteg berisi baskom sayur, tempe orek, dan gorengan', 'Isi etalase, belanjanya dari pasar', 'Veriyanta Kusuma', 'CC BY-SA 3.0', 'Food_at_Warung_Tegal.jpg'],
  bawang: ['bawang.jpg', 1280, 853, 'Los pasar penuh karung bawang merah', 'Kami belanja langsung di pasar induk', 'Ken Bawono', 'CC BY-SA 4.0', 'Pedagang_Bawang_Merah.jpg'],
  cabai: ['cabai.jpg', 1280, 960, 'Tumpukan cabai rawit dan karung cabai di pasar induk', 'Cabai, mulai ¼ kg', 'Indonesiagood', 'CC BY 4.0', 'Kios_Cabai_di_Pasar_Induk_Pare_Kediri.jpg'],
  tahuTempe: ['tahu-tempe.jpg', 1280, 960, 'Lapak tahu putih dan tempe bungkus daun di pasar', 'Tahu dan tempe, per papan', 'Sakurai Midori', 'CC BY 3.0', 'Penjual_tahu_dan_tempe_Jakarta.JPG'],
}

function Photos({ names }) {
  return (
    <div className="photos">
      {names.map((n) => {
        const [src, w, h, alt, cap] = PHOTOS[n]
        return <figure key={n}><img src={`/img/${src}`} width={w} height={h} alt={alt} loading="lazy" decoding="async" /><figcaption>{cap}</figcaption></figure>
      })}
    </div>
  )
}

const rp = (n) => n.toLocaleString('id-ID')

function Nota() {
  const retail = NOTA.reduce((s, r) => s + r[2], 0)
  const hub = NOTA.reduce((s, r) => s + r[3], 0)
  const saved = retail - hub
  const monthly = ((saved * DAYS_PER_MONTH) / 1e6).toLocaleString('id-ID', { maximumFractionDigits: 1 })
  return (
    <div className="nota" aria-labelledby="nota-title">
      <div className="nota-top"><b id="nota-title">Nota Kulakan</b><small>Contoh</small></div>
      <table>
        <caption>Satu hari belanja warteg ukuran sedang</caption>
        <thead><tr><th scope="col">Barang</th><th scope="col">Pasar eceran</th><th scope="col">Warteg Hub</th></tr></thead>
        <tbody>
          {NOTA.map(([name, qty, a, b]) => (
            <tr key={name}><td>{name}<small>{qty}</small></td><td className="old">{rp(a)}</td><td>{rp(b)}</td></tr>
          ))}
        </tbody>
        <tfoot><tr><td>Total</td><td className="old">{rp(retail)}</td><td>{rp(hub)}</td></tr></tfoot>
      </table>
      <p className="stamp"><span>Hemat Rp {rp(saved)}</span><br />× {DAYS_PER_MONTH} hari ≈ Rp {monthly} juta sebulan</p>
      <p className="fine">Angka contoh untuk menunjukkan cara hitungnya. Harga asli dikirim tiap sore dan ikut harga pasar.</p>
    </div>
  )
}

function Head({ kicker, title, children }) {
  return (
    <div className="head">
      <p className="kicker">{kicker}</p>
      <h2>{title}</h2>
      {children}
    </div>
  )
}

export default function App() {
  return (
    <div className="wrap">
      <header className="hero">
        <div>
          <div className="sign" role="img" aria-label="Warteg Hub, kulakan bareng warteg Jabodetabek">
            <b>Warteg Hub</b>
            <span>Kulakan bareng · Jabodetabek</span>
          </div>
          <h1>Belanja bahan bareng warteg lain. <em>Harga grosir, sampai sebelum Anda mulai masak.</em></h1>
          <p className="lede">Pesan lewat WhatsApp sampai jam 21.00. Beras, minyak, telur, ayam, cabai, dan sayur kami antar jam 03.00–05.00. Bayar tunai atau QRIS waktu barang sampai.</p>
          <div className="cta-row">
            <a className="btn" href={WA_LINK}>Daftar lewat WhatsApp</a>
            <a href="#cara-kerja">Lihat cara kerjanya</a>
          </div>
          <p className="fine">Gratis daftar. Tanpa kontrak. Minimal belanja Rp 300 ribu per antaran.</p>
        </div>
        <Nota />
      </header>

      <Photos names={['warteg', 'etalase', 'bawang']} />

      <section id="cara-kerja">
        <Head kicker="Cara kerja" title="Satu hari kulakan, dari sore sampai subuh" />
        <ol className="clock">
          {STEPS.map(([time, title, body]) => (
            <li key={time}><time>{time}</time><div><h3>{title}</h3><p>{body}</p></div></li>
          ))}
        </ol>
      </section>

      <section>
        <Head kicker="Yang bisa dipesan" title="Bahan yang Anda beli tiap hari, dalam satuan yang biasa Anda pakai" />
        <Photos names={['cabai', 'tahuTempe']} />
        <div className="etalase">
          <div className="shelf">
            {GOODS.map(([name, body]) => <div key={name}><h3>{name}</h3><p>{body}</p></div>)}
          </div>
          <p className="fine">Gas elpiji tidak kami jual.</p>
        </div>
      </section>

      <section>
        <Head kicker="Aturan main" title="Semuanya tertulis di sini, tidak ada yang disembunyikan" />
        <div className="rules">
          {RULES.map(([title, body]) => <div key={title}><h3>{title}</h3><p>{body}</p></div>)}
          <div className="money">
            <h3>Kami untung dari mana?</h3>
            <p>Kami belanja dalam jumlah besar untuk banyak warteg sekaligus, jadi dapat harga lebih murah dari pasar eceran. Kami ambil sedikit dari selisih itu. Sisanya jadi hemat Anda.</p>
          </div>
        </div>
      </section>

      <section>
        <Head kicker="Wilayah antar" title="Dibuka bertahap di seluruh Jabodetabek">
          <p className="lede">Antar subuh hanya bisa tepat waktu kalau rutenya pendek. Jadi kami buka per wilayah, mulai dari yang paling dekat dengan Pasar Induk Kramat Jati.</p>
        </Head>
        <div className="waves">
          {WAVES.map(([name, status, areas], i) => (
            <div key={name} className={i === 0 ? 'wave open' : 'wave'}>
              <span className="chip">{status}</span>
              <h3>{name}</h3>
              <ul>{areas.map((a) => <li key={a}>{a}</li>)}</ul>
            </div>
          ))}
        </div>
        <p className="note">Wilayah Anda belum buka? Tetap daftar. Wilayah baru kami buka di tempat yang paling banyak warteg menunggu.</p>
      </section>

      <section>
        <div className="soon">
          <span className="chip">Nanti, setelah 300 warteg bergabung</span>
          <h2>Pesanan nasi kotak dan katering kantor</h2>
          <p className="lede">Kantor, pengajian, dan acara di sekitar Anda bisa pesan langsung ke warteg anggota Warteg Hub. Komisinya 8%, jauh lebih kecil dari aplikasi pesan-antar. Warteg yang sudah rutin kulakan lewat kami dapat pesanan lebih dulu.</p>
        </div>
      </section>

      <section className="faq">
        <Head kicker="Pertanyaan" title="Yang biasanya ditanyakan pemilik warteg" />
        {FAQ.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}
      </section>

      <div className="final">
        <h2>Daftar lima menit lewat WhatsApp</h2>
        <p>Kirim nama warteg, alamat lengkap, dan nama pemilik. Tim kami datang ke warteg Anda untuk kenalan sebelum antaran pertama.</p>
        <a className="btn" href={WA_LINK}>Daftar lewat WhatsApp</a>
      </div>

      <footer>
        <p><b>Warteg Hub</b> · Kulakan bareng untuk warteg Jabodetabek.</p>
        <p>Harga di halaman ini contoh, bukan harga hari ini.</p>
        <p className="credits">Foto dari Wikimedia Commons:{' '}
          {Object.values(PHOTOS).map(([, , , , , by, lic, file], i) => (
            <span key={file}>{i ? ' · ' : ''}<a href={COMMONS + file}>{by}</a> ({lic})</span>
          ))}
        </p>
      </footer>
    </div>
  )
}
