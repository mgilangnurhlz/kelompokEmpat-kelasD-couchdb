# Pendataan Mahasiswa
Untuk memenuhi tugas mata kuliah Manajemen Basis Data

## Member of The Group
1. Muhammad Firasy Sajidan (1207050071)
2. Muhammad Gilang Nur Haliz (1207050074)
3. Muhammad Ibnu Firdaus(1207050075)

## Application
Aplikasi digunakan untuk pendataan mahasiswa teknik informatika, pada aplikasi ini digunakan database CouchDB. CouchDB adalah basis data berorientasi dokumen sumber terbuka yang menggunakan peta nilai-kunci untuk menyimpan bidang dokumen.

### API Method
- [x] **POST** (Create data mahasiswa)
- [x] **GET** (View data mahasiswa)
- [x] **DELETE** (Delete data mahasiswa)
- [x] **UPDATE** (Edit data mahasiswa)

### Body JSON
```json
{
  "_id": "f9fff6bc541b3eca43089965f400f6ca",
  "_rev": "2-a3758bf7da296edcc8efdfc7fd1818fb",
  "nim": "20705",
  "nama": "gilangnur",
  "dospem": "WildanBudiawan",
  "notelp": "08123",
  "email": "gilang@gmail.com"
}
```

### Program Installations
cara menjalankan aplikasi sebagai berikut

#### Install and Set Up CouchDB
<a href="https://couchdb.apache.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/0d6c64dbbf311879f7d563bfc3ccf559f9ed111c/icons/couchdb/couchdb-original.svg" alt="couchdb" width="40" height="40"/> </a>

or https://www.youtube.com/watch?v=Mru4sHzIfSA&t

### Runing CouchDB
http://localhost:5984/_utils/#

### Create mahasiswas Database
![Screenshot (2108)](https://user-images.githubusercontent.com/100754364/208107778-62db4d7b-3d66-4ed2-835c-19ca063285f8.png)

### Create Documents
```json
{
  "_id": ,
  "nim": "20705",
  "nama": "gilangnur",
  "dospem": "WildanBudiawan",
  "notelp": "08123",
  "email": "gilang@gmail.com"
}
```

### Create view
![Screenshot (2110)](https://user-images.githubusercontent.com/100754364/208108513-0789baa1-caa7-4f45-bf78-8b72a3e3adf4.png)


```sh
function (doc) {
  emit(doc._id, {nim:doc.nim, nama:doc.nama, dospem:doc.dospem, notelp:doc.notelp, email:doc.email, rev:doc._rev});
}
```

### You Should Have Installed Node.js and npm
<a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> </a>

### Clone This Repository To Your Directory
```sh
git clone https://github.com/mgilangnurhlz/kelompokEmpat-kelasD-couchdb.git
```
### Customize Username and password CouchDB in app.js
```js
const couch = new NodeCouchDb({
  auth: {
    user: "your username",
    pass: "your password",
  },
});
```

### NPM Install
```sh
npm install
```

### Running Program
```sh
node ./app.js
```

### Open Program in Browser
http://localhost:3014/

Enjoy the program :grin:

## Connect With Us
<p align="left">
<a href="https://twitter.com/mgilangnurhlz" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/twitter.svg" alt="mgilangnurhlz" height="30" width="40" /></a>
<a href="https://www.linkedin.com/in/muhammad-gilang-nur-haliz-33bb69254/" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="muhammad-gilang-nur-haliz" height="30" width="40" /></a>
<a href="https://instagram.com/mgilangnurhlz" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/instagram.svg" alt="mgilangnurhlz" height="30" width="40" /></a>
</p>

