const toggle = document.getElementById('menuToggle');
const menu = document.getElementById('menu');

toggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});


// transaction.html
let transactions = [
    {
        nama: "Peminjaman Buku Algoritma",
        jumlah: 1,
        kategori: "Peminjaman"
    },
    {
        nama: "Peminjaman Buku Java",
        jumlah: 1,
        kategori: "Peminjaman"
    }
];

const transactionBody = document.getElementById("transactionBody");
const transactionForm = document.getElementById("transactionForm");

function renderTransactions() {
    transactionBody.innerHTML = "";

    transactions.forEach((trx, index) => {
        transactionBody.innerHTML += `
            <tr>
                <td>${index + 1}</td>
                <td>${trx.nama}</td>
                <td>${trx.jumlah}</td>
                <td>${trx.kategori}</td>
                <td>
                    <a href="#" onclick="markDone(${index})">
                        ${trx.kategori === "Pengembalian" ? "Selesai" : "Dikembalikan"}
                    </a>
                </td>
                <td><a href="#" onclick="deleteTransaction(${index})">Hapus</a></td>
            </tr>
        `;
    });
}

transactionForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const nama = document.getElementById("namaTransaksi").value;
    const jumlah = document.getElementById("jumlah").value;
    const kategori = document.getElementById("kategori").value;

    if (nama === "" || jumlah === "" || kategori === "") {
        alert("Semua field wajib diisi!");
        return;
    }

    transactions.push({
        nama,
        jumlah,
        kategori
    });

    renderTransactions();
    transactionForm.reset();
});

function deleteTransaction(index) {
    if (confirm("Yakin ingin menghapus transaksi ini?")) {
        transactions.splice(index, 1);
        renderTransactions();
    }
}

function markDone(index) {
    transactions[index].kategori = "Pengembalian";
    renderTransactions();
}

renderTransactions();
