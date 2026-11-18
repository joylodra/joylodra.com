import ContactCTA from "./contact-cta";
import { Header, Laptop, Timeline } from "./interactive";
import history from "./history.json";
const keyboard = [
  "esc · · · · · · · · · · · ·",
  "~ 1 2 3 4 5 6 7 8 9 0 - +",
  "⇥ Q W E R T Y U I O P [ ]",
  "⇪ A S D F G H J K L : ↵",
  "⇧ Z X C V B N M , . / ⇧",
  "fn ⌃ ⌥ ▁ ⌘ ◀ ▲ ▶",
];
export default function Page() {
  return (
    <>
      <Header />
      <main>
        <section className="hero" id="workspace">
          <div className="copy">
            <h1>I build stuff.</h1>
            <p className="intro">
              I co-founded Seefluencer to help brands and creators grow their
              social media through education, services, and SaaS.
            </p>
          </div>
          <div className="studio">
            <Laptop>
              <div className="under"></div>
              <div className="model">
                <div className="shell">
                  <div className="lid-back"></div>
                  <div className="lid">
                    <div className="display" aria-hidden="true">
                      <aside>
                        <strong>
                          Skala<span>+</span>
                        </strong>
                        <div>
                          <i>▦</i>Planning
                        </div>
                        <div>
                          <i>▧</i>Media Library
                        </div>
                        <div>
                          <i>▥</i>Analytics
                        </div>
                      </aside>
                      <div className="planner">
                        <div className="breadcrumb">
                          Seefluencer &nbsp; / &nbsp; Planning
                        </div>
                        <div className="plan-title">
                          <strong>Content calendar</strong>
                          <b>＋ New post</b>
                        </div>
                        <div className="month">
                          November <span>2026</span>
                          <small>‹ &nbsp; Today &nbsp; ›</small>
                        </div>
                        <div className="calendar">
                          <label>Sun</label>
                          <label>Mon</label>
                          <label>Tue</label>
                          <label>Wed</label>
                          <label>Thu</label>
                          <label>Fri</label>
                          <label>Sat</label>
                          <div className="day">1</div>
                          <div className="day">
                            2<i>Launch reel</i>
                          </div>
                          <div className="day">3</div>
                          <div className="day">
                            4<i>Creator Q&A</i>
                          </div>
                          <div className="day">5</div>
                          <div className="day">
                            6<i>Weekly recap</i>
                          </div>
                          <div className="day">7</div>
                          <div className="day">8</div>
                          <div className="day">9</div>
                          <div className="day">
                            10<i>Behind the scenes</i>
                          </div>
                          <div className="day">11</div>
                          <div className="day">12</div>
                          <div className="day">
                            13<i>Product notes</i>
                          </div>
                          <div className="day">14</div>
                          <div className="week">15</div>
                          <div className="week">
                            16<i>Studio tour</i>
                          </div>
                          <div className="week">17</div>
                          <div className="week">
                            <span className="today">18</span>
                            <i>Creator Q&A</i>
                          </div>
                          <div className="week">19</div>
                          <div className="week">
                            20<i>Weekly recap</i>
                          </div>
                          <div className="week">21</div>
                          <div className="day">22</div>
                          <div className="day">23</div>
                          <div className="day">
                            24<i>Field notes</i>
                          </div>
                          <div className="day">25</div>
                          <div className="day">26</div>
                          <div className="day">
                            27<i>Launch reel</i>
                          </div>
                          <div className="day">28</div>
                          <div className="day">29</div>
                          <div className="day">30</div>
                          <div className="day"></div>
                          <div className="day"></div>
                          <div className="day"></div>
                          <div className="day"></div>
                          <div className="day"></div>
                        </div>
                      </div>
                    </div>
                    <div className="notch"></div>
                  </div>
                </div>
                <div className="base">
                  <div className="grille"></div>
                  <div className="grille right"></div>
                  <div className="keys" aria-hidden="true">
                    {keyboard.map((line, index) => (
                      <div className="row" key={index}>
                        {line.split(" ").map((key, i) => (
                          <span className="key" key={i}>
                            {key}
                          </span>
                        ))}
                      </div>
                    ))}
                  </div>
                  <div className="track"></div>
                </div>
              </div>
            </Laptop>
          </div>
        </section>
        <section className="about" id="about">
          <img
            className="portrait"
            src="/joy-lodra.jpg"
            width="820"
            height="820"
            loading="lazy"
            alt="Joy Lodra smiling"
          />
          <div className="bio">
            <h2>Hey there, I’m Joy.</h2>
            <p>
              I studied computer science at UW, spent a year at Microsoft, then
              left to build something of my own.
            </p>
            <p>
              I'm co-founder and CEO of Seefluencer, an education, services, and
              SaaS company helping brands and creators grow on social media.
            </p>
          </div>
        </section>
        <Timeline
          id="experience"
          title="Experience"
          entries={history.experience}
        />
        <Timeline
          id="education"
          title="Education"
          entries={history.education}
        />
        <section className="socials" id="connect">
          <ContactCTA />
          <div className="links">
            <a
              href="https://www.linkedin.com/in/joylodra"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="social-icon"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  d="M4 2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Z"
                />
                <g fill="var(--paper)">
                  <circle cx="7" cy="7" r="1.45" />
                  <path d="M5.7 9.5h2.6V18H5.7zM10.2 9.5h2.5v1.15c.6-.9 1.4-1.45 2.7-1.45 2.1 0 3.3 1.25 3.3 3.9V18h-2.6v-4.6q0-2-1.55-2-1.75 0-1.75 2.15V18h-2.6z" />
                </g>
              </svg>
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com/joylodra"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="social-icon"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <g fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4.1" />
                </g>
                <circle fill="currentColor" cx="17.6" cy="6.7" r="1.15" />
              </svg>
              Instagram
            </a>
            <a
              href="https://www.tiktok.com/@thejoylodra"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="social-icon"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  d="M16.7 2c.3 2.5 1.7 4.4 4.7 4.7v3.4a9 9 0 0 1-4.7-1.5v7.2a6.7 6.7 0 1 1-6.7-6.7h1v3.5a3.2 3.2 0 1 0 2.2 3.1V2z"
                />
              </svg>
              TikTok
            </a>
            <a
              href="https://www.youtube.com/@thejoylodra"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="social-icon"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  d="M22.8 7.2a3 3 0 0 0-2.1-2.1C18.9 4.6 12 4.6 12 4.6s-6.9 0-8.7.5a3 3 0 0 0-2.1 2.1A30 30 0 0 0 .7 12a30 30 0 0 0 .5 4.8 3 3 0 0 0 2.1 2.1c1.8.5 8.7.5 8.7.5s6.9 0 8.7-.5a3 3 0 0 0 2.1-2.1 30 30 0 0 0 .5-4.8 30 30 0 0 0-.5-4.8Z"
                />
                <path fill="var(--paper)" d="m10 8.6 6 3.4-6 3.4z" />
              </svg>
              YouTube
            </a>
          </div>
        </section>
      </main>
      <footer>
        <span>© Copyright 2026 Joy Lodra</span>
        <a href="#top">Back to top ↑</a>
        <div className="footer-wordmark" aria-hidden="true">joy lodra</div>
      </footer>
    </>
  );
}
