import { NavLink, Outlet, useLocation } from "react-router-dom";
import "../i18n"; // Import i18n configuration
import { useTranslation } from "react-i18next";
import { useEffect, useState, useRef } from "react";

function RootLayout() {
    // TANSALTE
  const { t, i18n } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") || "en";
    i18n.changeLanguage(savedLanguage);
  }, []);

  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang);
  };

  // MUSIC
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5); // Default volume level

  const audioRef = useRef(new Audio());

  useEffect(() => {
    audioRef.current.loop = true; // Enable looping
  }, []);

  const tracks = [
    {
      id: 1,
      image: <img className="disc" src="\items\images\disc2.png" alt="disc"/>,
      src: "/items/music/weoneomyujigkoria_warner_music_korea_seogmaetyu_zerobaseone_bagg.m4a",
    },
    {
      id: 2,
      image: <img className="disc" src="\items\images\disc.png" alt="disc"/>,
      src: "/items/music/MIC Drop (Steve Aoki Remix)   BTS (방탄소년단).mp3",
    },
    {
      id: 3,
      image: <img className="disc" src="\items\images\disc3.png" alt="disc"/>,
      src: "/items/music/Hood.mp3",
    },
  ];

  const playMusic = (track) => {
    if (currentTrack?.id === track.id && !audioRef.current.paused) return;

    audioRef.current.src = track.src;
    audioRef.current.load();
    audioRef.current.volume = volume;
    audioRef.current.play();
    setCurrentTrack(track);
    setIsPlaying(true);
  };

  const togglePlayPause = () => {
    if (!currentTrack) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (event) => {
    const newVolume = parseFloat(event.target.value);
    setVolume(newVolume);
    audioRef.current.volume = newVolume;
  };

  const hideNavbar = location.pathname.startsWith("/readmore/");

  return (
    <div className="nav_container">
{!hideNavbar && (
  <header>
    <nav>
      <a className="nav_icon" href="/"></a>
      <button id="start_game">
        <img src="/items/images/steam.png" alt="steam icon" />
        <a
          id="start_game_link"
          href="https://store.steampowered.com/agecheck/app/730/"
        >
          {t("play")}
        </a>
      </button>

      <NavLink to="/">{t("game")}</NavLink>
      <NavLink to="/about">{t("news")}</NavLink>
      <NavLink to="/contact">{t("support")}</NavLink>

      {/* MUSIC */}
      <div className="music-player">
        <button 
          className="music-button universal-btn"
          onClick={() => setIsModalOpen(true)}>{t("music")}
        </button>

        {isModalOpen && (
          <div className="overlay" onClick={() => setIsModalOpen(false)}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
              <div className="modal-content">
                <button
                  className="close-button"  
                  onClick={() => setIsModalOpen(false)}
                > <img src="/items/images/close.png" alt="close" />
                </button> 

                <ul className="track-list">
                  {tracks.map((track) => (
                    <li
                      key={track.id}
                      className="track-item"
                      onClick={() => playMusic(track)}
                    >
                      {track.image}
                    </li>
                  ))}
                </ul>
                <button
                  className="play-pause-button"
                  onClick={togglePlayPause}
                >
                  {isPlaying ? <img src="/items/images/pause.png" alt="pause" /> : <img src="/items/images/play.png" alt="play"></img>}
                </button>
                <div className="volume-control">
                  <label>Volume:</label>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={volume}
                    onChange={handleVolumeChange}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* DROPMENU */}
      <div className="wrapper">
        <div>
          <img
            className="logo"
            src="/items/images/globe.png"
            alt="globe img"
          />
        </div>
        <div className="right-menu">
          <button className="menu-button universal-btn">{t("language")}</button>
          <div className="dropdown-menu">
            <div onClick={(e) => changeLang(e.target.value)}>
              <option value="en">ENGLISH</option>
              <option value="kr">KOREAN</option>
              <option value="ru">RUSSIAN</option>
              <option value="uz">UZBEK</option>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
)}


      <main>
        <Outlet />
      </main>

      <footer> 
        <div className="footer_container">
          <div className="footer_text">{t("footer")}</div>
          <div className="social-links">
          <a href="https://t.me/s/newcsgo?utm_source=chatgpt.com">
            <img src="https://cdn-icons-png.flaticon.com/512/2111/2111646.png" alt="Telegram" />
          </a>
          <a href="https://www.instagram.com/csgo_dev/">
            <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" />
          </a>
          <a href="https://www.youtube.com/@Valve">
            <img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" alt="YouTube" />
          </a>
          <a href="https://github.com/kus/cs2-modded-server?utm_source=chatgpt.com">
            <img src="https://cdn-icons-png.flaticon.com/512/733/733553.png" alt="GitHub" />
          </a>
        </div>
        </div>
      </footer>
    </div>
  );
}

export default RootLayout;
