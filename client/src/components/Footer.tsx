import type { FC } from "react";
import "../assets/styles/footer.css";

type SocialLink = {
  id: string;
  site: string;
  url: string;
  imgSrc: string;
  alt: string;
};

type NavLink = {
  id: string;
  title: string;
  url: string;
};

type NavSection = {
  id: string;
  title: string;
  links: NavLink[];
};

type LegalLink = {
  id: string;
  title: string;
  url: string;
};

const Footer: FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks: SocialLink[] = [
    {
      id: "twitter-link",
      site: "twitter",
      url: "#",
      imgSrc:
        "https://upload.wikimedia.org/wikipedia/commons/5/57/X_logo_2023_%28white%29.png",
      alt: "Twitter Icon",
    },
    {
      id: "instagram-link",
      site: "instagram",
      url: "#",
      imgSrc: "https://img.icons8.com/win10/512/FFFFFF/instagram-new.png",
      alt: "Instagram Icon",
    },
    {
      id: "youtube-link",
      site: "youtube",
      url: "#",
      imgSrc: "https://i.imgur.com/vo0fWR1.png",
      alt: "YouTube Link",
    },
    {
      id: "linkedin-link",
      site: "linkedin",
      url: "#",
      imgSrc: "https://i.imgur.com/WVyuUeY.png",
      alt: "LinkedIn Icon",
    },
  ];

  const navSections: NavSection[] = [
    {
      id: "programming-section",
      title: "Programmation",
      links: [
        { id: "films-link", title: "Films à l'affiche", url: "#" },
        { id: "premiers-link", title: "Avant-premières", url: "#" },
        { id: "events-link", title: "Événements spéciaux", url: "#" },
      ],
    },
    {
      id: "discover-section",
      title: "Découvrir",
      links: [
        { id: "news-link", title: "Actualités", url: "#" },
        { id: "festivals-link", title: "Festivals", url: "#" },
        { id: "retro-link", title: "Rétrospectives", url: "#" },
      ],
    },
    {
      id: "info-section",
      title: "Informations",
      links: [
        { id: "prices-link", title: "Tarifs", url: "#" },
        { id: "cinemas-link", title: "Nos cinémas", url: "#" },
        { id: "contact-link", title: "Contact", url: "#" },
      ],
    },
  ];

  const legalLinks: LegalLink[] = [
    { id: "legal-mentions", title: "Mentions légales", url: "#" },
    { id: "privacy-policy", title: "Politique de confidentialité", url: "#" },
    { id: "terms-of-use", title: "CGU", url: "#" },
    { id: "cookies-policy", title: "Cookies", url: "#" },
  ];

  // Footer Container

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <div className="logo-container">
              <img
                src="https://i.imgur.com/yLygqOZ.png"
                alt="Cinésphère Logo"
                className="logo"
              />
            </div>
            <div className="social-links">
              {socialLinks.map((link) => (
                <a key={link.id} href={link.url} className="social-link">
                  <img
                    src={link.imgSrc}
                    alt={link.alt}
                    className="social-icon"
                  />
                </a>
              ))}
            </div>
          </div>

          {navSections.map((section) => (
            <div key={section.id} className="footer-nav">
              <h3 className="nav-title">{section.title}</h3>
              <ul className="nav-list">
                {section.links.map((link) => (
                  <li key={link.id}>
                    <a href={link.url} className="nav-link">
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            © {currentYear} Cinésphère. Tous droits réservés.
          </p>
          <div className="legal-links">
            {legalLinks.map((link) => (
              <a key={link.id} href={link.url} className="legal-link">
                {link.title}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
