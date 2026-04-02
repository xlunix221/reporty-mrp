import './App.css';

function App() {
  // --- TUTAJ WKLEJ SWOJE LINKI ---
  const botInviteLink = "https://discord.com/oauth2/authorize?client_id=1486834168674652210";
  // ------------------------------

  return (
    <>
<nav className="navbar">
  <div className="navbar-content">
    <div className="logo" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} style={{cursor: 'pointer'}}>
      Reporty<span className="text-green">MRP</span>
    </div>
    
    <div className="nav-links">
      <a href="#features">Funkcje</a>
      <a href="#faq">FAQ</a>
      <a href="#status">Status</a>
    </div>

    {/* ZAMIAST SPACERA - PRZYCISK DISCORDA */}
    <div className="nav-actions">
      <a href="discord.com/b53KrZXm" target="_blank" rel="noreferrer" className="btn-discord">
        Dołącz do Discorda
      </a>
    </div>
  </div>
</nav>

      {/* SEKCJA 1: HERO */}
      <div className="hero-container">
        <div className="badge">Ostatnia Aktualizacja: Kartoteka 🚀</div>
        <h1 className="title">Wszystkie skargi pod ręką!</h1>
        <p className="subtitle">
          System monitorowania forum MajesticRP. Otrzymuj powiadomienia o skargach bezpośrednio w wiadomościach na Discordzie.
        </p>
        <div className="button-group">
          <button 
            className="btn-primary" 
            onClick={() => window.open(botInviteLink, '_blank')}
          >
            Dodaj do serwera
          </button>
          <button 
            className="btn-ghost"
            onClick={() => document.getElementById('features').scrollIntoView({behavior: 'smooth'})}
          >
            Pokaż Funkcje (SOON)
          </button>
        </div>
      </div>

      {/* SEKCJA 2: FUNKCJE */}
      <div id="features" className="features-grid">
        <div className="feature-card">
          <div className="feature-icon">🔍</div>
          <h3>Skanowanie 24/7</h3>
          <p>Nasz system nie śpi. Monitorujemy forum MajesticRP co sekundę, abyś Ty mógł spać spokojnie.</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">⚡</div>
          <h3>Błyskawiczne PW</h3>
          <p>Gdy tylko Twoje UID pojawi się w skardze, bot natychmiast wyśle Ci wiadomość na Discordzie.</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">📊</div>
          <h3>Pełna Historia</h3>
          <p>Przeglądaj wszystkie swoje przeszłe skargi w jednym, przejrzystym panelu użytkownika.</p>
        </div>
      </div>

      {/* SEKCJA 3: STATYSTYKI */}
      <div className="stats-container">
        <div className="stat-item">
          <h4>Beta</h4>
          <p>Status Systemu</p>
        </div>
        <div className="stat-item">
          <h4>+-9</h4>
          <p>Monitorowanych UID</p>
        </div>
        <div className="stat-item">
          <h4>&lt; 1s</h4>
          <p>Czas Reakcji</p>
        </div>
      </div>

      {/* SEKCJA 4: FAQ */}
      <div id="faq" className="faq-section">
        <h2 className="section-title">Często zadawane pytania</h2>
        <div className="faq-grid">
          <div className="faq-item">
            <h3>Czy to jest bezpieczne?</h3>
            <p>Tak. Bot korzysta jedynie z publicznie dostępnych danych na forum MajesticRP. Nigdy nie poprosimy Cię o hasło ani dane do logowania.</p>
          </div>
          <div className="faq-item">
            <h3>Czy mogę dostać za to bana?</h3>
            <p>Nie. Bot jedynie monitoruje forum i wysyła Ci powiadomienie. Nie ingeruje w pliki gry ani nie daje przewagi w samej rozgrywce.</p>
          </div>
          <div className="faq-item">
            <h3>Jak dodać swoje UID?</h3>
            <p>Po dodaniu bota na serwer, użyj komendy /panel, bot wtedy wyśle panel i każdy będzie mógł dodać swoje UID.</p>
          </div>
          <div className="faq-item">
            <h3>Ile to kosztuje?</h3>
            <p>Obecnie system jest w fazie Beta i wszystkie jego funkcje są całkowicie darmowe dla każdego użytkownika.</p>
          </div>
        </div>
      </div>

      {/* SEKCJA 5: STATUS SYSTEMU */}
      <div id="status" className="status-panel">
        <div className="status-header">
          <div className="status-dot"></div>
          <span>System Monitorowania Active</span>
        </div>
        <div className="status-logs">
          <div className="log-line"><span>[2:39:01]</span> Skanowanie forum MajesticRP...</div>
          <div className="log-line"><span>[2:39:15]</span> Sprawdzanie nowych wpisów w dziale Skargi...</div>
          <div className="log-line text-green"><span>[2:39:42]</span> Status: Brak nowych zgłoszeń dla monitorowanych UID.</div>
        </div>
      </div>

{/* SEKCJA 6: STOPKA - WYCZYSZCZONA */}
<footer className="footer">
  <div className="footer-content">
    <p>&copy; 2026 ReportyMRP. Wszystkie prawa zastrzeżone.</p>
    <p className="disclaimer">Projekt nie jest powiązana z firmą MajesticRP.</p>
  </div>
</footer>
    </>
  );
}

export default App;
