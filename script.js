//toogle class active 
const navbarNav = document.querySelector
('.navbar-nav');

document.querySelector('#hamburger-menu').onclick = ( ) => {
    navbarNav.classList.toggle('active');
};

//section1
let sections = document.querySelectorAll('section');

window.onscroll = () => {
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;

        if(top >= offset && top < offset + height) {
            sec.classList.add('show-animate');
        }

        //untuk animasi berulang 
       
    })
}

// Inisialisasi array data_mhs dengan data dari localStorage atau array kosong jika tidak ada data yang tersimpan
let data_mhs=JSON.parse(localStorage.getItem("data")) || [];

// Memanggil fungsi untuk merender data pada halaman
renderData();

// Fungsi untuk memeriksa apakah semua properti objek memiliki nilai (tidak null atau kosong)
function checkObject(data){
  for (const key in data) {
    if (data[key] === null || data[key] === ''){
      return false; // Mengembalikan false jika ada properti yang kosong atau null
    }
  }
  return true; // Mengembalikan true jika semua properti memiliki nilai
}

// Fungsi untuk menambahkan data mahasiswa ke localStorage
function addData(){
  // Mendapatkan nilai dari input fields
  const inputName=document.querySelector(".nama");
  const nama=inputName.value;
  const inputNIM=document.querySelector(".nim");
  const NIM=inputNIM.value;
  const inputProdi=document.querySelector(".prodi");
  const prodi=inputProdi.value;
  const inputEmail=document.querySelector(".email");
  const email=inputEmail.value;
  const inputPass=document.querySelector(".password");
  const password=inputPass.value;
  const inputJenkel=document.querySelector(".jnskel");
  const jenis_kelamin=inputJenkel.value;
  const inputTanggal=document.querySelector(".tanggal");
  const tgl_lahir=inputTanggal.value;
  const inputAlamat=document.querySelector(".alamat");
  const alamat=inputAlamat.value;

    // Membuat objek data mahasiswa
    data={
      nama:nama,
      NIM:NIM,
      prodi:prodi,
      email:email,
      password:password,
      jenis_kelamin:jenis_kelamin,
      tgl_lahir:tgl_lahir,
      alamat:alamat,
    };

    // Memeriksa apakah objek memiliki semua properti yang diisi
    const validasi=checkObject(data);

    // Jika validasi sukses, tambahkan objek data ke array dan simpan ke localStorage
    if(validasi){
        data_mhs.push(data);
        localStorage.setItem("data", JSON.stringify(data_mhs));
        alert("Data Berhasil Di Input");
    }
}

// Fungsi untuk merender data mahasiswa ke dalam tabel
function renderData(){
    let dataHTML = "";
  
    // Mengambil setiap objek data mahasiswa dan menggabungkannya dalam format HTML
    for (let i = 0; i < data_mhs.length; i++) {
      const nama = data_mhs[i].nama;
      const NIM = data_mhs[i].NIM;
      const prodi = data_mhs[i].prodi;
      const email = data_mhs[i].email;
      const password = data_mhs[i].password;
      const jenis_kelamin = data_mhs[i].jenis_kelamin;
      const tgl_lahir = data_mhs[i].tgl_lahir;
      const alamat = data_mhs[i].alamat;
      
      const html = `<tr><td>${nama}</td><td>${NIM}</td><td>${prodi}</td><td>${email}</td><td>${password}</td><td>${jenis_kelamin}</td><td>${tgl_lahir}</td><td>${alamat}</td></tr>`;
      dataHTML += html;
    }

    // Memasukkan data HTML ke dalam elemen dengan kelas "data_mhs"
    document.querySelector(".data_mhs").innerHTML += dataHTML;
}

// Fungsi untuk menghapus data dari localStorage dan me-refresh halaman
function clearData(){
    localStorage.clear(); // Menghapus semua data dari localStorage
    location.reload();  // Me-refresh halaman untuk menghapus data yang ditampilkan
}