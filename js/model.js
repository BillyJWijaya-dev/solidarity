/* =====================================================================
   MODEL — data dan state. Tidak menyentuh DOM.
   Ubah isi sirkelmu di sini: anggota, kegiatan, galeri.
   (Semua nama dan teks di bawah masih contoh.)
   ===================================================================== */

const Model = {

  // Tujuan formulir kontak (lewat formsubmit.co). GANTI dengan emailmu.
  contactEmail: "emailkamu@contoh.com",

  state: {
    screen: "home",
    menuIndex: 0,
    built: {},          // layar mana yang kartunya sudah dibuat
  },

  // ---- 9 anggota. photo = assets/members/<nama>.jpg (persegi paling pas) ----
  // Kalau foto belum ada, kartu menampilkan huruf awal nama.
  members: [
    { name: "Nazmy",   rn: "I",    arcana: "Magician",   rank: 10, photo: "assets/members/nazmy.jpeg",   quote: "Build with intention, refined over time." },
    { name: "Althaf",  rn: "II",   arcana: "Priestess",  rank: 9,  photo: "assets/members/althaf.jpeg",  quote: "Hidup itu sederhana, kita yang membuatnya rumiT." },
    { name: "Kiram",  rn: "III",  arcana: "Empress",    rank: 8,  photo: "assets/members/kiram.jpeg",  quote: "Ga perlu kata-kata, yang penting aksi nyata." },
    { name: "Faris",   rn: "IV",   arcana: "Emperor",    rank: 9,  photo: "assets/members/faris.jpeg",   quote: "Try To Be Better." },
    { name: "Zen",   rn: "V",    arcana: "Hierophant", rank: 7,  photo: "assets/members/Zen.jpeg",   quote: "Bukan orang bener, tapi beneran orang." },
    { name: "Naufal",  rn: "VI",   arcana: "Lovers",     rank: 8,  photo: "assets/members/naufal.jpeg",  quote: "A lot has changed, but Im still here." },
    { name: "Pandu",   rn: "VII",  arcana: "Chariot",    rank: 6,  photo: "assets/members/ndu.jpeg",   quote: "Kejarlah cita-cita, jangan dia yang ngga cinta." },
    { name: "Billy",  rn: "VIII", arcana: "Justice",    rank: 7,  photo: "assets/members/billy.jpeg",  quote: "Bisikan dari belakang cuma membuktikan bahwa kami di depan." },
    { name: "Syafi",  rn: "IX",   arcana: "Hermit",     rank: 6,  photo: "assets/members/syafi.jpeg",  quote: "-" },
  ],

  // ---- Kegiatan ----
  events: [
    { title: "Kumpul",      tag: "Rutin",   color: "#3dc8ff", when: "TIAP HARI", where: "rumah Kiram", desc: "Acara utama sirkel: makan, ngobrol, dan nugas." },
    { title: "Nugas Bareng",  tag: "Rutin", color: "#7c6cff", when: "AKHIR HARI",        where: "rumah kiram",    desc: "Nugas loh ya cik." },
    { title: "Makan bareng",     tag: "Rutin", color: "#18c5b0", when: "SETIAP HARI",     where: "tergantung",           desc: "Makan biar jadi orang." },
    { title: "Mabar Roblox", tag: "Terkadang", color: "#ffb347", when: "KALAU GA SIBUK",     where: "rumah",          desc: "When roblok wok?." },
  ],

  // ---- Galeri. img = assets/gallery/<nomor>.jpg ----
  gallery: [
    { title: "Perawalan", desc: "Awal dari semuanya.",              img: "assets/gallery/1.jpeg" },
    { title: "Fotbar",  desc: "Keren bang kata moms teddy.",         img: "assets/gallery/11.jpeg" },
    { title: "Main ps",         desc: "Yang kalah dikecup faris.", img: "assets/gallery/7.jpeg" },
    { title: "Seminar Insyfest",   desc: "Duh Pandu hot banget.",          img: "assets/gallery/5.jpeg" },
    { title: "Foto with outsiders",   desc: "Random kid.",  img: "assets/gallery/2.jpeg" },
    { title: "Fotobar",     desc: "idk man.",                img: "assets/gallery/4.jpeg" },
  ],
};
