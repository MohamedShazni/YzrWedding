const venueSearch = encodeURIComponent("Hotel Sea Green Kalpitiya, Sri Lanka");

function FlowerMark() {
  return (
    <svg
      aria-hidden="true"
      className="flower-mark"
      viewBox="0 0 52 52"
      fill="none"
    >
      <path
        d="M26 5.5c4.2 5.1 5.2 9.2 0 14.1-5.2-4.9-4.2-9 0-14.1Zm20.5 20.5c-5.1 4.2-9.2 5.2-14.1 0 4.9-5.2 9-4.2 14.1 0ZM26 46.5c-4.2-5.1-5.2-9.2 0-14.1 5.2 4.9 4.2 9 0 14.1ZM5.5 26c5.1-4.2 9.2-5.2 14.1 0-4.9 5.2-9 4.2-14.1 0Z"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <circle cx="26" cy="26" r="4.2" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="26" cy="26" r="18.5" stroke="currentColor" strokeWidth=".8" />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="invitation">
      <header className="site-header">
        <a className="monogram" href="#home" aria-label="Aaysha and Yazar">
          A <span>&</span> Y
        </a>
        <p className="header-note">A celebration of love</p>
        <a className="header-link" href="#celebration">
          The celebration <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="hero" id="home" aria-labelledby="invitation-title">
        <div className="hero-copy">
          <p className="eyebrow">
            <span /> With joyful hearts <span />
          </p>
          <p className="invitation-intro">
            Together with their families,
            <br />
            we invite you to celebrate
          </p>

          <p className="text-lg italic font-serif">
            “In the name of Allah, the Most Gracious, the Most Merciful”
          </p>

          <div className="names" id="invitation-title">
            <div className="family-lines">
              <p>
                Mr and Mrs <strong>Cader Ali</strong> request the presence and
                blessings of
              </p>
              <div className="text-3xl italic font-serif text-green-950 mt-3 mb-3">
                <p>Sinduja</p>
              </div>
              <p>At the waleema of their beloved son</p>
            </div>
            <h1>Yazar</h1>
            <FlowerMark />
            <h1>Aaysha</h1>
            <p className="text-xs mt-6 text-[#7a7d70]">
              Daughter of{" "}
              <span className="font-semibold text-black">Mr. Niyas</span> &{" "}
              <span className="font-semibold text-black">Mrs. Niyas</span>
            </p>
          </div>

          <div className="hero-rule" />
          <p className="ceremony-label">The Waleema Ceremony</p>
          <p className="hero-message">
            We would be honoured to have you with us
            <br className="desktop-break" /> as we celebrate this beautiful
            beginning.
          </p>

          <a className="primary-link" href="#celebration">
            Join us in celebration <span aria-hidden="true">↓</span>
          </a>
        </div>

        <div
          className="hero-image"
          role="img"
          aria-label="An intimate wedding celebration surrounded by flowers"
        >
          <div className="image-wash" />
          <div className="image-caption">
            <span className="text-lg text-black">A day to remember</span>
            <span className="caption-names">
              Aaysha <i>&</i> Yazar
            </span>
            <span className="caption-date">26 · 12 · 2026</span>
          </div>
          <span className="image-index">01 / 01</span>
        </div>
      </section>

      <section
        className="celebration"
        id="celebration"
        aria-labelledby="celebration-title"
      >
        <div className="celebration-heading">
          <p className="eyebrow">
            <span /> Save the date, enjoy the celebration <span />
          </p>
          <h2 id="celebration-title">The celebration</h2>
        </div>

        <div className="event-details">
          <article className="detail">
            <span className="detail-number">01</span>
            <div>
              <h3>When</h3>
              <p className="detail-main">Saturday, 26 December 2026</p>
              <p className="detail-sub">At 7:30 p.m</p>
            </div>
          </article>

          <article className="detail">
            <span className="detail-number">02</span>
            <div>
              <h3>Where</h3>
              <p className="detail-main">
                Hotel Sea Green Kalpitiya, Sri Lanka
              </p>
              <p className="detail-sub">We look forward to welcoming you</p>
            </div>
          </article>

          <a
            className="directions-link"
            href={`https://www.google.com/maps/search/?api=1&query=${venueSearch}`}
            target="_blank"
            rel="noreferrer"
            aria-label="Find Hotel Sea Green on Google Maps"
          >
            <span className="directions-icon" aria-hidden="true">
              ↗
            </span>
            <span>Find the venue</span>
          </a>
        </div>
      </section>

      <footer className="site-footer">
        <FlowerMark />
        <p>
          With love, Yazar Mohomed <span>&</span> Aaysha Shimasha
        </p>
        <span className="footer-date">26 · 12 · 2026</span>
      </footer>
    </main>
  );
}
