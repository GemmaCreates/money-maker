import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className="site-header">
        <div className="container logo">Uptempo Enterprises</div>
      </header>

      <main>
        {/* Hero Section */}
        <section id="hero" className="section hero">
          <div className="container">
            <h1>Uptempo Enterprises</h1>
            <p className="subhead">Digital Product Lab.</p>
            <p className="note">uptempoenterprises.com</p>
            <Image
              src="/assets/hero-placeholder.svg"
              alt="Abstract hero placeholder"
              width={1600}
              height={900}
              className="hero-image"
              priority
            />
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="section products">
          <div className="container">
            <article className="product">
              <div className="product-text">
                <h2>Growbie — Milestone Mapping app for children</h2>
                <p>Track milestone progress and celebrate growth with a clear, calming view.</p>
                <ul>
                  <li>Age‑appropriate milestones at a glance</li>
                  <li>Gentle reminders and progress snapshots</li>
                  <li>Private by default</li>
                </ul>
              </div>
              <div className="product-media">
                <Image
                  src="/assets/growbie-ui-mock.svg"
                  alt="Growbie milestone dashboard mock"
                  width={1200}
                  height={720}
                />
              </div>
            </article>

            <article className="product">
              <div className="product-text">
                <h2>GoTime — Potty training app</h2>
                <p>Build consistent habits with simple timers and playful positive cues.</p>
                <ul>
                  <li>Visual timers and routine streaks</li>
                  <li>Friendly nudges at the right times</li>
                  <li>Lightweight progress view</li>
                </ul>
              </div>
              <div className="product-media">
                <Image
                  src="/assets/gotime-ui-mock.svg"
                  alt="GoTime routine timeline mock"
                  width={1200}
                  height={720}
                />
              </div>
            </article>

            <article className="product">
              <div className="product-text">
                <h2>TheSavvyChefs.com — homegoods ecommerce store</h2>
                <p>Curated kitchen tools and home goods for everyday craft.</p>
                <ul>
                  <li>Small‑batch, practical picks</li>
                  <li>Clear specs, simple care notes</li>
                  <li>Seasonal drops</li>
                </ul>
              </div>
              <div className="product-media">
                <Image
                  src="/assets/savvychefs-grid.svg"
                  alt="SavvyChefs 3x2 product grid mock"
                  width={1200}
                  height={720}
                />
              </div>
            </article>
          </div>
        </section>

        {/* How We Build Section */}
        <section id="how" className="section how">
          <div className="container single-line">
            We make simple products that help people in their everyday lives.
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="section about">
          <div className="container">
            Uptempo Enterprises builds calm, practical tools for families and homes. We value clarity, gentle guidance, and steady progress.
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <div>Uptempo Enterprises</div>
          <div>uptempoenterprises.com</div>
          <div>
            <a href="mailto:uptempoenterprises@gmail.com">uptempoenterprises@gmail.com</a>
          </div>
        </div>
      </footer>
    </>
  );
}
