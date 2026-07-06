// Enter all your detials in this file
// Logo images
import logogradient from "./assets/logo.svg";
import logo from "./assets/logo2.svg";
// Profile Image
import profile from "./assets/profile1.jpeg";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import sass from "./assets/techstack/sass.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";
// Porject Images
import projectImage1 from "./assets/projects/project1.png";
import projectImage2 from "./assets/projects/project2.png";
import projectImage3 from "./assets/projects/project3.png";
import projectImage4 from "./assets/projects/project4.png";
import projectImage5 from "./assets/projects/project5.png";

// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "Aldin Mubarok",
  tagline: "I build things for web",
  img: profile,
  about: `Saya adalah Full-Stack Web Developer dengan 4+ tahun pengalaman aktif di PT. Fajar Baizuri Group(FBG) industri perkebunan kelapa sawit. Fokus utama saya adalah modernisasi sistem internal perusahaan guna memangkas birokrasi operasional melalui aplikasi berbasis web.`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/",
  github: "https://www.github.com/aldinmbrk",
  twitter: "https://twitter.com/",
  instagram: "https://www.instagram.com/aldinmbrk",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "Supervisor IT Development",
    Company: `PT. Fajar Baizuri`,
    Description: [
      "Memimpin tim developer dalam merancang, mengembangkan, dan memodernisasi arsitektur sistem web internal perusahaan.",
      "Mengoptimalkan performa database server untuk mempercepat laporan operasional perusahaan.",
      "Berdiskusi dengan manajemen untuk menerjemahkan kebutuhan bisnis menjadi modul aplikasi."
    ],
    Location: "Jakarta Selatan",
    Type: "Full Time",
    Duration: "Jun 2023 - Sekarang",
  },
  {
    Position: "Web Developer (Remote)",
    Company: `PT. Pertamina Lubricants`,
    Description: [
      "Berkontribusi dalam pengembangan dan pemeliharaan modul sistem informasi internal perusahaan PT. Pertamina Lubricants.",
      "Membangun RESTful API yang andal menggunakan Laravel/CodeIgniter serta mengintegrasikannya dengan komponen frontend interaktif.",
      "Menjamin kualitas performa kode melalui standardisasi struktur kode, optimasi MySQL, serta penanganan bug secara berkala."
    ],
    Location: "Remote",
    Type: "Part Time / Freelance",
    Duration: "Mei 2024 - Sekarang",
  },
  {
    Position: "Junior Programmer",
    Company: `PT. Fajar Baizuri`,
    Description: [
      "Mengembangkan fitur baru, memelihara fungsionalitas sistem, dan memperbaiki bug pada aplikasi web internal perusahaan.",
      "Menulis kode backend yang bersih dan terstruktur menggunakan framework CodeIgniter 4.",
      "Membangun tampilan antarmuka (frontend) web internal yang responsif dan user-friendly untuk staf operasional lapangan.",
      "Mendapat promosi menjadi Supervisor IT Development atas pencapaian performa kerja, inisiatif problem-solving, dan penguasaan tech stack."
    ],
    Location: "Jakarta Selatan",
    Type: "Full Time",
    Duration: "Jan 2021 - Feb 2023",
  },
];

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "Sarjana Teknik Informatika (S1)",
    Company: "Universitas Indraprasta",
    Location: "Jakarta Timur",
    Type: "Full Time",
    Duration: "2016 - Agu 2020",
  },
  {
    Position: "Juara 2 - Live Coding Competition",
    Company: `Universitas Indraprasta(UNINDRA)`,
    Location: "Jakarta, Indonesia",
    Type: "Competition",
    Duration: "Agu 2019",
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  redux: redux,
  sass: sass,
  tailwind: tailwind,
  bootstrap: bootstrap,
  vscode: vscode,
  postman: postman,
  npm: npm,
  git: git,
  github: github,
  figma: figma,
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "OWL Plantation",
    image: projectImage1,
    description: `Sistem Perkebunan Kelapa Sawit Internal PT. Fajar Baizuri disebut dengan Sistem OWL. Sistem ini berisi modul Pengadaan, Pabrik, Traksi, Keuangan, SDM, Pemasaran, Budget Control, HelpDesk dll. Fokus utamanya adalah pengembangan fitur dan pengoptimalan performa database server.`,
    techstack: "HTML/CSS, JavaScript, PHP, MySQL",
    previewLink: "#",
    githubLink: "#",
  },
  {
    title: "Karir FBG",
    image: projectImage2,
    description: `Sistem Internal PT. Fajar Baizuri Group untuk pengelolaan rekrutment karyawan. Database kumpulan para pelamar, data kandidat ter-organisir dengan baik dikelompokan berdasarkan divisi lowongan pekerjaannya.`,
    techstack: "HTML/CSS, JavaScript, PHP, MySQL",
    previewLink: "#",
    githubLink: "#",
  },
  {
    title: "InspecPro PT. Pertamina Lubricants",
    image: projectImage3,
    description: `Keberhasilan dalam membangun dan mengembangkan sistem Q1 dan Q6 InspecPro PT. Pertamina Lubricants. Sistem ini masih terus berlanjut di kembangkan dengan menyesuaikan kebutuhan operasional perusahaan.`,
    techstack: "HTML/CSS, JavaScript, PHP, MySQL",
    previewLink: "#",
    githubLink: "#",
  },
  {
    title: "Expense Tracker",
    image: projectImage4,
    description: `Mini project membuat sistem pencatatan pengeluaran personal, menyimpan pemasukan dan pengeluaran serta menampilkan total selisih antara keduanya.`,
    techstack: "HTML/CSS, JavaScript, Firebase",
    previewLink: "https://dons-expense-tracker.web.app/",
    githubLink: "https://github.com/aldinmbrk/dons-expense-tracker",
  },
  {
    title: "Movie Database",
    image: projectImage5,
    description: `Mini project membuat sistem untuk menampilkan daftar film terpopuler dari setiap tahun dengan mengambil data API dari <a class="text-blue-500 underline" href="https://www.themoviedb.org">TMDB (themoviedb.org)</a>. Film dapat di filter berdasarkan tahun release dan genre.`,
    techstack: "HTML/CSS, JavaScript, Firebase",
    previewLink: "https://dons-movie-database.web.app/",
    githubLink: "https://github.com/aldinmbrk/dons-movie-database",
  },
];

// Enter your Contact Details here
export const contactDetails = {
  email: "aldinmubarok.am@gmail.com",
  phone: "+62 821-2233-2296",
};
