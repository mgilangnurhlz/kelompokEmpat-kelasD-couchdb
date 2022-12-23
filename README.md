<div align="center"> 
  <h1> Pendataan Mahasiswa</h1> 
  <p>Untuk Memenuhi Ujian Akhir Semester Mata Kuliah Manajemen Basis Data</p> 
  
  [Teknik Informatika](http://if.uinsgd.ac.id/) || [UIN Sunan Gunung Djati Bandung](https://uinsgd.ac.id/) 
  
</div>


## Member of The Group
1. Muhammad Firasy Sajidan (1207050071)
2. Muhammad Gilang Nur Haliz (1207050074)
3. Muhammad Ibnu Firdaus(1207050075)

## Application
<p align="justify">Pada aplikasi ini digunakan database CouchDB. CouchDB adalah basis data berorientasi dokumen sumber terbuka yang menggunakan peta nilai-kunci untuk menyimpan bidang dokumen. Format penyimpanan data dan pengaplikasiannya adalah format JSON. CouchDB menggunakan Javascript untuk bahasa mengakses datanya, karena menggunakan JSON. CouchDB menggunakan HTTP sebagai API pendukung karena berbasis Apache. Adapun library yang digunakan dalam program ini diantaranya adalah Express ,EJS , dan node-couchdb.</p>


### Link Youtube
<div align align="left"> <a href="https://www.youtube.com/watch?v=Mg_rz36h8wc" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/youtube.svg" alt="mgilangnurhlz" height="50" width="60" /></a> or https://www.youtube.com/watch?v=Mg_rz36h8wc </div> 


<h3 align="left">Languages and Tools:</h3>
<p align="left"> <a href="https://couchdb.apache.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/0d6c64dbbf311879f7d563bfc3ccf559f9ed111c/icons/couchdb/couchdb-original.svg" alt="couchdb" width="40" height="40"/> </a> <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a>  <a href="https://expressjs.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="40" height="40"/> </a> <a href="https://git-scm.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> <a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> </a> </p>

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

### Demo Program
https://user-images.githubusercontent.com/100754364/209163494-1190668f-1106-442e-a852-59acb28fb728.mp4

## References
* [Express](https://expressjs.com/en/4x/api.html#express)
* [node-couchdb](https://www.npmjs.com/package/node-couchdb?activeTab=readme)
* [EJS](https://ejs.co/#docs)

<h2 align= "center">Connect With Me</h2>
<p align="center">
<a href="https://twitter.com/mgilangnurhlz" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/twitter.svg" alt="mgilangnurhlz" height="30" width="40" /></a>
<a href="https://www.linkedin.com/in/muhammad-gilang-nur-haliz-33bb69254/" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="muhammad-gilang-nur-haliz" height="30" width="40" /></a>
<a href="https://instagram.com/mgilangnurhlz" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/instagram.svg" alt="mgilangnurhlz" height="30" width="40" /></a>
</p>

