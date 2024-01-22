// script.js
let usersData = [];

function submitRegisterForm() {
  const registerName = document.getElementById('registerName').value;
  const registerEmail = document.getElementById('registerEmail').value;
  const registerPassword = document.getElementById('registerPassword').value;

  const userData = { name: registerName, email: registerEmail, password: registerPassword };
  usersData.push(userData);

  // Tampilkan data di konsol untuk tujuan demonstrasi
  console.log('Registered Users:', usersData);

  // Untuk produksi, Anda bisa menyimpan data ke server atau penyimpanan yang permanen.
}

function submitLoginForm() {
  const loginEmail = document.getElementById('loginEmail').value;
  const loginPassword = document.getElementById('loginPassword').value;

  // Verifikasi login, contoh sederhana hanya menampilkan data di konsol
  const user = usersData.find(u => u.email === loginEmail && u.password === loginPassword);
  if (user) {
    console.log('Login successful:', user);
  } else {
    console.log('Login failed. User not found or invalid credentials.');
  }
}
