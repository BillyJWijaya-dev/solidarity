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
    { name: "Faris",   rn: "IV",   arcana: "Emperor",    rank: 9,  photo: "assets/members/Faris.jpeg",   quote: "Try To Be Better." },
    { name: "Zen",   rn: "V",    arcana: "Hierophant", rank: 7,  photo: "assets/members/Zen.jpeg",   quote: "Bukan orang bener, tapi beneran orang." },
    { name: "Naufal",  rn: "VI",   arcana: "Lovers",     rank: 8,  photo: "assets/members/naufal.jpeg",  quote: "A lot has changed, but Im still here." },
    { name: "Pandu",   rn: "VII",  arcana: "Chariot",    rank: 6,  photo: "assets/members/ndu.jpeg",   quote: "Kejarlah cita-cita, jangan dia yang ngga cinta." },
    { name: "Billy",  rn: "VIII", arcana: "Justice",    rank: 7,  photo: "assets/members/billy.jpeg",  quote: "Bisikan dari belakang cuma membuktikan bahwa kami di depan." },
    { name: "Syafi",  rn: "IX",   arcana: "Hermit",     rank: 6,  photo: "assets/members/syafi.jpeg",  quote: "-" },
  ],

  // ---- Kegiatan ----
  events: [
    { title: "Kumpul",      tag: "Rutin",   color: "#3dc8ff", when: "TIAP BULAN HARI", where: "Rumah Kiram", desc: "Acara utama sirkel: makan, ngobrol, dan nugas." },
    { title: "Makan Malam Bareng",  tag: "Bulanan", color: "#7c6cff", when: "AKHIR BULAN",        where: "Rumah anggota",    desc: "Masak ramai-ramai, tiap bulan giliran satu anggota jadi tuan rumah." },
    { title: "Camping Tahunan",     tag: "Tahunan", color: "#18c5b0", when: "SETIAP AGUSTUS",     where: "Puncak",           desc: "Satu malam di bawah bulan, tenda, api unggun, dan gitar." },
    { title: "Ulang Tahun Anggota", tag: "Spesial", color: "#ffb347", when: "SESUAI TANGGAL",     where: "Kejutan",          desc: "Tidak ada yang boleh ulang tahun sendirian." },
  ],

  // ---- Galeri. img = assets/gallery/<nomor>.jpg ----
  gallery: [
    { title: "Purnama Pertama", desc: "Awal dari semuanya.",              img: "assets/gallery/01.jpg" },
    { title: "Camping Puncak",  desc: "Tenda bocor, tawa tidak.",         img: "assets/gallery/02.jpg" },
    { title: "Karaoke",         desc: "Suara pas-pasan, semangat penuh.", img: "assets/gallery/03.jpg" },
    { title: "Piknik Pantai",   desc: "Matahari terbit bareng.",          img: "assets/gallery/04.jpg" },
    { title: "Bakar-bakaran",   desc: "Sekar di dapur, Raka di kamera.",  img: "assets/gallery/05.jpg" },
    { title: "Ulang Tahun",     desc: "Kue hampir jatuh.",                img: "assets/gallery/06.jpg" },
  ],
};
