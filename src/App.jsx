import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import logo from "./assets/logo.png";
import profil from "./assets/faqih.jpg";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header>
        <div className="logo-container">
          <img src={logo} alt="Logo" />
          <h1>AF Tech</h1>
        </div>
        <nav>
          <a href="#about">Tentang</a>
          <a href="#skills">Keahlian</a>
          <a href="#projects">Proyek</a>
          <a href="#contact">Kontak</a>
        </nav>
      </header>

      <section className="intro" id="about">
        <img src={profil} alt="Foto Profil" />
        <div className="bio">
          <h2>Ahmad Faqih</h2>
          <p>
            <strong>NIM:</strong> 24EP10001
          </p>
          <p>
            <strong>Prodi:</strong> Sistem Informasi
          </p>

          <div className="about">
            <h2>Tentang Saya</h2>
            <p>
              Saya adalah mahasiswa Sistem Informasi yang fokus pada
              pengembangan aplikasi web modern. Saya senang mempelajari
              teknologi baru dan membangun solusi digital yang berdampak bagi
              masyarakat.
            </p>
          </div>
        </div>
      </section>

      <section id="skills" className="skills">
        <h2>Keahlian</h2>
        <ul>
          <li>HTML & CSS (Proses)</li>
          <li>JavaScript (Proses)</li>
          <li>React.js (Proses)</li>
          <li>PHP & MySQL (Proses)</li>
          <li>Laravel (Proses)</li>
          <li>Python (Proses)</li>
          <li>Git & GitHub (Proses)</li>
        </ul>
      </section>

      <section id="projects" className="projects">
        <h2>Proyek Saya</h2>

        <div className="project">
          <h3>Aplikasi Absensi Santri</h3>
          <p>
           
          </p>
        </div>

        <div className="project">
          <h3>Portofolio Pribadi</h3>
          <p>
            Situs pribadi untuk menampilkan keahlian, riwayat proyek, dan kontak
            profesional.
          </p>
        </div>
      </section>

      <section id="contact" className="contact">
        <h2>Kontak</h2>
        <p>Hubungi saya lewat WhatsApp:</p>
        <a
          href="https://wa.me/6289513997672"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-whatsapp"></i> Hubungi saya
        </a>
      </section>

      <footer>&copy; 2025 AF-Tech.</footer>
    </>
  );
}

export default App;
