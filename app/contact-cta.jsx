export default function ContactCTA() {
  return (
    <div className="contact-panel">
      <h2>Work with me.</h2>
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
