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
    { name: "Nazmy",   rn: "I",    arcana: "Magician",   rank: 10, photo: "assets/members/rafi.jpg",   quote: "Pencetus ide dan tukang ngajak kumpul." },
    { name: "Althaf",  rn: "II",   arcana: "Priestess",  rank: 9,  photo: "assets/members/dinda.jpg",  quote: "Pendengar paling sabar di sirkel." },
    { name: "Kiram",  rn: "III",  arcana: "Empress",    rank: 8,  photo: "assets/members/sekar.jpg",  quote: "Koki andalan semua acara." },
    { name: "Faris",   rn: "IV",   arcana: "Emperor",    rank: 9,  photo: "assets/members/bima.jpg",   quote: "Penjaga jadwal dan aturan." },
    { name: "Zen",   rn: "V",    arcana: "Hierophant", rank: 7,  photo: "assets/members/raka.jpg",   quote: "Penjaga tradisi dan fotografer tidak resmi." },
    { name: "Naufal",  rn: "VI",   arcana: "Lovers",     rank: 8,  photo: "assets/members/nadia.jpg",  quote: "Penyambung semua obrolan." },
    { name: "Pandu",   rn: "VII",  arcana: "Chariot",    rank: 6,  photo: "assets/members/alya.jpg",   quote: "Selalu paling duluan sampai." },
    { name: "Billy",  rn: "VIII", arcana: "Justice",    rank: 7,  photo: "assets/members/billy.jpeg",  quote: "Wasit setiap debat kecil." },
    { name: "Syafi",  rn: "IX",   arcana: "Hermit",     rank: 6,  photo: "assets/members/intan.jpg",  quote: "Tenang, jarang bicara, sekali bicara pas." },
  ],

  // ---- Kegiatan ----
  events: [
    { title: "Kumpul Purnama",      tag: "Rutin",   color: "#3dc8ff", when: "TIAP BULAN PURNAMA", where: "Lokasi bergantian", desc: "Acara utama sirkel: makan, ngobrol, dan cerita bulan ini." },
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
