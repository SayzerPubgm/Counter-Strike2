import { NavLink, Outlet } from "react-router-dom"
import "../i18n"; // Import i18n configuration
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
function ContactLayout() {
  
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
    <div className="support_container">
      <div className="support_main_img">
      <img src="/items/images/terror.png" alt="terror" />

        
      </div>
      <div className="support_main2_img"></div>
      
    <div className="header_texts">
    <h1>{t("help")}</h1>
    </div>

    <div className="support_footer_img"></div>



    <nav className="form-faq_container">
        <NavLink to="faq">{t("faq")}</NavLink>
        <NavLink to="form">{t("form")}</NavLink>
      </nav>

      <Outlet/>
  </div>
  
  )
}

export default ContactLayout