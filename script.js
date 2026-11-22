// --- AMBIL ELEMEN DOM ---
const inputWidth = document.getElementById("input-width");
const inputHeight = document.getElementById("input-height");
const ratioButtons = document.querySelectorAll(".ratio-btn");
const btnSwap = document.getElementById("btn-swap");
const previewBox = document.getElementById("preview-box");
const previewText = document.getElementById("preview-text");

// Default Rasio awal (16:9)
let currentRatioW = 16;
let currentRatioH = 9;

// Flag untuk mencegah infinite loop event listener
let isUpdating = false;

// --- 1. HITUNG TINGGI BERDASARKAN LEBAR ---
function calculateHeight() {
    if (isUpdating) return;
    isUpdating = true;

    const width = parseFloat(inputWidth.value) || 0;
    const height = Math.round((width * currentRatioH) / currentRatioW);

    inputHeight.value = height;
    updatePreview(width, height);

    isUpdating = false;
}

// --- 2. HITUNG LEBAR BERDASARKAN TINGGI ---
function calculateWidth() {
    if (isUpdating) return;
    isUpdating = true;

    const height = parseFloat(inputHeight.value) || 0;
    const width = Math.round((height * currentRatioW) / currentRatioH);

    inputWidth.value = width;
    updatePreview(width, height);

    isUpdating = false;
}

// --- 3. PERBARUI PRATINJAU VISUAL ---
function updatePreview(w, h) {
    previewText.textContent = `${w} x ${h} (${currentRatioW}:${currentRatioH})`;

    // Atur proporsi ukuran kotak preview secara proporsional
    const maxArenaW = 180;
    const maxArenaH = 100;

    let boxW = maxArenaW;
    let boxH = (h * maxArenaW) / w;

    if (boxH > maxArenaH) {
        boxH = maxArenaH;
        boxW = (w * maxArenaH) / h;
    }

    previewBox.style.width = `${boxW}px`;
    previewBox.style.height = `${boxH}px`;
}

// --- 4. EVENT LISTENER TOMBOL RASIO ---
ratioButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        ratioButtons.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");

        currentRatioW = parseInt(btn.getAttribute("data-w"));
        currentRatioH = parseInt(btn.getAttribute("data-h"));

        calculateHeight();
    });
});

// --- 5. EVENT LISTENER TOMBOL SWAP ---
btnSwap.addEventListener("click", () => {
    // Tukar rasio W dan H
    const tempRatio = currentRatioW;
    currentRatioW = currentRatioH;
    currentRatioH = tempRatio;

    // Perbarui teks tombol atau aktifkan state jika perlu
    calculateHeight();
});

// --- EVENT LISTENERS INPUT ---
inputWidth.addEventListener("input", calculateHeight);
inputHeight.addEventListener("input", calculateWidth);

// Inisialisasi awal
calculateHeight();
