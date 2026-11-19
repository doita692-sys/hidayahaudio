// =========================================================
// DATA PILIHAN PAKET AUDIO MOBIL (Ubah foto, nama, harga & spek di sini)
// =========================================================
const dataPaketAudio = [
    {
        gambar: "img/paket1.jpg",
        nama: "Paket Harian Hemat",
        harga: "Mulai Rp 2.xxx.xxx",
        unggulan: false,
        fitur: [
            "nominal di atas sudah terima beres"
            ]
    },
    {
        gambar: "img/paket2.jpg",
        nama: "Paket SQL Favorit",
        harga: "Mulai Rp 3.5xx.xxx",
        unggulan: true,
        fitur: [
            "nominal di atas sudah terima beres"
            ]
        
    },
    {
        gambar: "img/paket3.jpg",
        nama: "Paket Full Upgrade + Android",
        harga: "Mulai Rp 3.xxx.xxx",
        unggulan: false,
        fitur: [
            "nominal di atas sudah terima beres"
        ]
    }
];

const paketContainer = document.getElementById('randhan_paket_list');

function tampilkanPaket() {
    paketContainer.innerHTML = "";
    dataPaketAudio.forEach(function (paket) {
        const card = document.createElement('div');
        card.className = paket.unggulan
            ? 'randhan_card randhan_paket_card randhan_featured'
            : 'randhan_card randhan_paket_card';

        const listFitur = paket.fitur.map(item => `<li>${item}</li>`).join('');

        card.innerHTML = `
            <img src="${paket.gambar}" alt="${paket.nama}" class="randhan_paket_img">
            <div class="randhan_paket_body">
                <h3>${paket.nama}</h3>
                <p class="randhan_price">${paket.harga}</p>
                <ul class="randhan_list">
                    ${listFitur}
                </ul>
            </div>
        `;
        paketContainer.appendChild(card);
    });
}

tampilkanPaket();

// =========================================================
// DATA GALERI HASIL INSTALASI (Ubah foto & judul di bagian ini)
// =========================================================
const dataGaleri = [
    {
        gambar: "img/instalasi1.jpg",
        judul: "Instalasi Kosmetik Subwoofer & Power SQL"
    },
    {
        gambar: "img/instalasi2.jpg",
        judul: "Upgrade Head Unit Android 10 Inch OEM Look"
    },
    {
        gambar: "img/instalasi3.jpg",
        judul: "Pemasangan Peredam Pintu & Speaker Split 2-Way"
    }
];

const galeriContainer = document.getElementById('randhan_galeri_list');

function tampilkanGaleri() {
    galeriContainer.innerHTML = "";
    dataGaleri.forEach(function (item) {
        const card = document.createElement('div');
        card.className = 'randhan_galeri_item';
        card.innerHTML = `
            <img src="${item.gambar}" alt="${item.judul}">
            <p>${item.judul}</p>
        `;
        galeriContainer.appendChild(card);
    });
}

tampilkanGaleri();

// =========================================================
// NAVIGASI MOBILE & FORM KONTAK
// =========================================================
const menuToggle = document.getElementById('randhan_menu_toggle');
const navMenu = document.getElementById('randhan_nav');

menuToggle.addEventListener('click', function () {
    navMenu.classList.toggle('randhan_active');
});

const navLinks = document.querySelectorAll('.randhan_menu a');
navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
        navMenu.classList.remove('randhan_active');
    });
});

const formKontak = document.getElementById('randhan_form_kontak');
const statusPesan = document.getElementById('randhan_status_pesan');

formKontak.addEventListener('submit', function (event) {
    event.preventDefault();
    const nama = document.getElementById('randhan_nama').value;
    const mobil = document.getElementById('randhan_mobil').value;
    statusPesan.textContent = `Terima kasih, ${nama}! Pesan konsultasi audio untuk mobil ${mobil} telah diterima oleh Hidayah Audio.`;
    formKontak.reset();
});