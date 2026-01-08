const toggle = document.getElementById('menuToggle');
const menu = document.getElementById('menu');

toggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});


const transactionForm = document.getElementById("transactionForm");

transactionForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const nama = document.getElementById("namaTransaksi").value.trim();
    const jumlah = document.getElementById("jumlah").value.trim();
    const kategori = document.getElementById("kategori").value;

    if (nama === "" || jumlah === "" || kategori === "") {
        alert("Semua form wajib diisi!");
        return;
    }

    alert("Transaksi berhasil disimpan!");

    transactionForm.reset();
});
