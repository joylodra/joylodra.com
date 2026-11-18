export default function ContactCTA() {
  return (
    <div className="contact-panel">
      <h2>Work with me.</h2>
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
      <a
        className="contact-button"
        href="https://wa.me/6285174259955"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg className="social-icon" viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            d="M4 17.8 2.7 22l4.5-1.2A9.5 9.5 0 1 0 4 17.8Z"
          />
          <path
            fill="currentColor"
            d="m8 6.3 1.5.1 1.1 2.8-1 1.3q1.4 2.7 4.1 3.8l1.3-1.5 2.7 1.3q.4 2.7-2.3 3c-3.8.3-9.7-5.3-9.1-8.8Q6.5 7 8 6.3Z"
          />
        </svg>
        Message me on WhatsApp
      </a>
    </div>
  );
}
