import { Outlet } from "react-router-dom";
import "./HomeLayout.css";
import "../i18n";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

function HomeLayout() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show");
          }
        });
      },
      { threshold: 0.3 } 
    );

    const elements = document.querySelectorAll(
      ".second_floor_details, .third_floor_details, .fourth_floor_details"
    );
    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const { t, i18n } = useTranslation();

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") || "en";
    i18n.changeLanguage(savedLanguage);
  }, []);

  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang);
  };

  return (
    <div onClick={(e) => changeLang(e.target.value)} className="csgo_root">
      <div className="app_csgo">
        <div className="beta_csgo">
          <div className="beta_csgo2">
            <div className="main_bg"></div>
            <div className="img_container">
              <img
                className="main_img"
                src="https:/cdn.akamai.steamstatic.com/apps/csgo/images/csgo_react//cs2/header_ctt.png"
                alt=""
              />
            </div>
            <div className="text_container">
              <div className="text_container2"></div>
              <div className="main_text">{t("home_text")}</div>

              <img
                className="text_img"
                src="https://cdn.akamai.steamstatic.com/apps/csgo/images/csgo_react//cs2/logo_cs2_header.svg"
                alt="CS2"
              />
            </div>
          </div>
          <div className="second_floor">
            <div className="second_floor_details">
              <div className="second_floor_details_title">
                <span className="minor">{t("secondFloorTitle")}</span>
              </div>
              <div className="second_floor_details_paragraph">
              {t("secondFloorDesc")}
              </div>
            </div>
          </div>
          <div className="third_floor">
            <div className="third_floor_details">
              <div className="third_floor_details_video">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/s6BNHro0vSg"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="third_floor_details_title">
                <span className="minor">{t("thirdFloorTitle")}</span>
              </div>
              <div className="third_floor_details_paragraph">
              {t("thirdFloorDesc")}
              </div>
            </div>
          </div>
          <div className="fourth_floor">
            <div className="fourth_floor_details">
              <div className="fourth_floor_details_title">
              {t("fourthFloorTitle")}
              </div>
              <div className="fourth_floor_details_paragraph">
              {t("fourthFloorDesc")}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <TriptList /> */}
      <Outlet />
    </div>
  );
}

export default HomeLayout;
