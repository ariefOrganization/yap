# live-code-4-sqlite3


- Telah disediakan package.json sehingga kamu hanya tinggal melakukan npm install saja
- Juga telah disediakan file setup.js, dimana file tersebut ketika dijalankan akan membuat tabel dan menyimpan data-data tabel tersebut. (JALANKAN SEKALI SAJA)

## QUERY

1. Munculkan project-project yang dihandle oleh Manager yang bernama 'Ahmad Syahab' yang durasi hari project-nya diantara 30 - 60 hari. Urutkan berdasarkan durasi waktu project terlama (Hasil yang diharapkan bisa dilihat pada file 'hasil-query-1.png')

2. Tampilkan data Total Project yang di handle oleh setiap Manager yang memiliki nama mengandung kata ‘Ahmad’ (Hasil yang diharapkan bisa dilihat pada file 'hasil-query-2.png')


## MANIPULASI OBJECT  

TIDAK PERLU MENGGUNAKAN EXPRESS. Cukup dengan file nodejs biasa untuk menampilkan data yang diinginkan.

UNTUK SOAL INI, KAMU HANYA DIMINTA UNTUK MENGERJAKAN SALAH SATU PILIHAN SAJA

- Pilihan 1 (Full Point: 100), Many to Many. Tampilkan data relasi antara Employee dan Project. Tampilkan semua data Employee dan terlibat di project mana sajakah Employee tersebut.

  * Menggunakan LEFT JOIN (75)
  * Menggunakan PROMISE dan PROMISE ALL (100)

  Output yang diharapkan:

  [
    {
      id: 1,
      first_name: 'Chandra',
      last_name: 'Budiman',
      gender: 'male',
      status: 'kontrak',
      projects: ['Project Jalan Tol Online', 'Belajar Online']
    },
    {
      id: 2,
      first_name: 'Dhani',
      last_name: 'Luthfi',
      gender: 'male',
      status: 'tetap',
      projects: ['Project Jalan Tol Online', 'Applikasi Absensi', 'CLI Sequelize 4']
    },
    {
      id: 3,
      first_name: 'Dhani',
      last_name: 'Luthfi',
      gender: 'male',
      status: 'tetap',
      projects: ['Pendaftaran Antrian Pajak', 'Pengisian Sistem Pegawai']
    },  
    {
      id: 4,
      first_name: 'Haniiful',
      last_name: 'Wahib',
      gender: 'male',
      status: 'tetap',
      projects: []
    },
    .... dst
  ]


- Pilihan 2 (Full Point: 75), One to Many. Tampilkan data relasi antara Manager dan Project
Tampilkan semua data Project dan nama Manager yang menghandle project tersebut

  * Menggunakan LEFT JOIN (50)
  * Menggunakan CALLBACK(75)

  Outuput yang diharapkan:
  [
    {
      id: 1,
      name_of_project: 'Project Jalan Tol Online',
      durasi: 45,
      managers: 'Ahmad Syahab'
    },
    {
      id: 2,
      name_of_project: 'Pendaftaran Antrian Pajak',
      durasi: 28,
      managers: 'Ahmad Syahab'
    },
    {
      id: 3,
      name_of_project: 'Generate Soal Live Code',
      durasi: 23,
      managers: 'Ahmad Nasikin'
    },
    {
      id: 4,
      name_of_project: 'Search Engine Logic Livecode',
      durasi: 50,
      managers: 'Aang Wijaya'
    },{
      id: 5,
      name_of_project: 'Belajar Online',
      durasi: 53,
      managers: 'Agung Pangestu'
    },
    .... dst
  ]
