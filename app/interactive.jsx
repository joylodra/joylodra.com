"use client";
import { useEffect, useRef, useState } from "react";

const sections = ["About", "Experience", "Education", "Connect"];

export function Header() {
  const [theme, setTheme] = useState("light");
  const [current, setCurrent] = useState("");
  useEffect(() => {
    const system = matchMedia("(prefers-color-scheme: dark)");
    function syncTheme() {
      let saved;
      try {
        saved = localStorage.getItem("studio-theme");
      } catch {}
      const value = saved || (system.matches ? "dark" : "light");
      document.documentElement.dataset.theme = value;
      setTheme(value);
    }
    function mark() {
      const visible = sections.filter(
        (name) =>
          document.getElementById(name.toLowerCase()).getBoundingClientRect()
            .top <
          innerHeight * 0.4,
      );
      setCurrent(
        scrollY + innerHeight >= document.documentElement.scrollHeight - 2
          ? "Connect"
          : visible.at(-1),
      );
    }
    syncTheme();
    mark();
    const controller = new AbortController();
    const options = { signal: controller.signal, passive: true };
    system.addEventListener("change", syncTheme, options);
    window.addEventListener("scroll", mark, options);
    window.addEventListener("resize", mark, options);
    return () => controller.abort();
  }, []);
  const next = theme === "dark" ? "light" : "dark";
  function toggle() {
    try {
      localStorage.setItem("studio-theme", next);
    } catch {}
    document.documentElement.dataset.theme = next;
    setTheme(next);
  }
  return (
    <header>
      <a className="brand" href="#top">
        Joy Lodra
      </a>
      <nav aria-label="Main navigation">
        {sections.map((name) => (
          <a
            key={name}
            href={"#" + name.toLowerCase()}
            aria-current={current === name ? "location" : undefined}
          >
            {name}
          </a>
        ))}
        <button
          type="button"
          id="theme"
          onClick={toggle}
          aria-label={"Use " + next + " theme"}
          title={"Use " + next + " theme"}
        >
          {next === "light" ? "☼" : "◐"}
        </button>
      </nav>
    </header>
  );
}

export function Laptop({ children }) {
  const ref = useRef(null);
  const drag = useRef({ angle: 0, start: null, initial: 0 });
  useEffect(() => {
    const scene = ref.current;
    const reduced = matchMedia("(prefers-reduced-motion: reduce)");
    const compact = matchMedia("(max-width:650px)");
    let frame = 0;
    function draw() {
      frame = 0;
      const hinge =
        scene.getBoundingClientRect().top + scrollY + scene.offsetHeight * 0.8;
      const distance = Math.max(
        1,
        Math.min(innerHeight * 0.6, hinge - innerHeight * 0.19),
      );
      const t = reduced.matches
        ? 0
        : Math.min(1, Math.max(0, scrollY / distance));
      const progress = t * t * (3 - 2 * t);
      scene.style.setProperty(
        "--turn",
        (compact.matches ? 0 : -9 * (1 - progress)) + "deg",
      );
      scene.style.setProperty("--tilt", -11 - 6 * progress + "deg");
      scene.style.setProperty("--hinge-angle", -4 - 88.5 * progress + "deg");
      scene.style.setProperty("--screen-light", String(1 - 0.58 * progress));
    }
    function queue() {
      if (!frame) frame = requestAnimationFrame(draw);
    }
    const controller = new AbortController();
    const options = { signal: controller.signal, passive: true };
    window.addEventListener("scroll", queue, options);
    window.addEventListener("resize", queue, options);
    reduced.addEventListener("change", queue, options);
    draw();
    return () => {
      controller.abort();
      cancelAnimationFrame(frame);
    };
  }, []);
  function down(e) {
    drag.current.start = e.clientX;
    drag.current.initial = drag.current.angle;
    e.currentTarget.setPointerCapture(e.pointerId);
  }
  function move(e) {
    const d = drag.current;
    if (d.start === null) return;
    d.angle = Math.max(
      -55,
      Math.min(55, d.initial + (e.clientX - d.start) * 0.32),
    );
    ref.current.style.setProperty("--angle", d.angle + "deg");
  }
  function end() {
    drag.current.start = null;
  }
  return (
    <div
      className="scene"
      ref={ref}
      role="img"
      aria-label="MacBook Pro displaying a sample Skala+ content planning calendar"
      onPointerDown={down}
      onPointerMove={move}
      onPointerUp={end}
      onPointerCancel={end}
    >
      {children}
    </div>
  );
}

const manualQuery = "(prefers-reduced-motion: reduce), (max-height:540px)";
function scrollStep() {
  return Math.min(215, Math.max(135, innerHeight * 0.24));
}
export function Timeline({ id, title, entries }) {
  const root = useRef(null),
    stage = useRef(null),
    track = useRef(null);
  const [selected, setSelected] = useState(0);
  function paint(position) {
    track.current.style.transform = "translateX(" + -100 * position + "%)";
    setSelected(Math.round(position));
  }
  function pin() {
    return parseFloat(getComputedStyle(stage.current).top) || 0;
  }
  useEffect(() => {
    const manual = matchMedia(manualQuery);
    function sync() {
      if (!manual.matches)
        paint(
          Math.max(
            0,
            Math.min(
              entries.length - 1,
              (pin() - root.current.getBoundingClientRect().top) / scrollStep(),
            ),
          ),
        );
    }
    function layout() {
      root.current.style.setProperty(
        "--travel",
        (manual.matches ? 0 : scrollStep() * (entries.length - 1)) + "px",
      );
      if (manual.matches) paint(Number(track.current.dataset.selected));
      else sync();
    }
    layout();
    const controller = new AbortController(),
      options = { passive: true, signal: controller.signal };
    window.addEventListener("scroll", sync, options);
    window.addEventListener("resize", layout, options);
    manual.addEventListener("change", layout, options);
    return () => controller.abort();
  }, [entries.length]);
  function select(i) {
    if (!matchMedia(manualQuery).matches)
      window.scrollTo({
        top:
          scrollY +
          root.current.getBoundingClientRect().top -
          pin() +
          i * scrollStep(),
        behavior: "instant",
      });
    paint(i);
  }
  function key(e, i) {
    const next = {
      ArrowRight: (i + 1) % entries.length,
      ArrowLeft: (i + entries.length - 1) % entries.length,
      Home: 0,
      End: entries.length - 1,
    }[e.key];
    if (next === undefined) return;
    e.preventDefault();
    select(next);
    document
      .getElementById(id + "-date-" + next)
      .focus({ preventScroll: true });
  }
  return (
    <section className="experience slides" id={id} ref={root}>
      <div className="slide-stage" ref={stage}>
        <h2>{title}</h2>
        <div className="timeline" role="tablist" aria-label={title}>
          {entries.map((entry, i) => (
            <button
              type="button"
              key={entry.name}
              id={id + "-date-" + i}
              role="tab"
              aria-controls={id + "-entry-" + i}
              aria-selected={selected === i}
              aria-label={entry.name + ", " + entry.dates}
              tabIndex={selected === i ? 0 : -1}
              onClick={() => select(i)}
              onKeyDown={(e) => key(e, i)}
            >
              {entry.dates.split(" – ")[0]}
              {entry.dates.endsWith(" – Present") && (
                <span className="timeline-present">Present</span>
              )}
            </button>
          ))}
        </div>
        <div className="slide-window">
          <div className="slide-track" ref={track} data-selected={selected}>
            {entries.map((entry, i) => (
              <article
                className="role"
                key={entry.name}
                id={id + "-entry-" + i}
                role="tabpanel"
                aria-labelledby={id + "-date-" + i}
                aria-hidden={i !== selected}
                inert={i !== selected}
                tabIndex={0}
              >
                <img
                  className="org-logo"
                  src={entry.logo}
                  width="56"
                  height="56"
                  alt=""
                />
                <div className="dates">{entry.dates}</div>
                <h3>{entry.name}</h3>
                <div className="role-title">{entry.role}</div>
                {entry.summary && <p>{entry.summary}</p>}
                {entry.place && <small>{entry.place}</small>}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
