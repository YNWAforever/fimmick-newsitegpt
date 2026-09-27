"use client";

import { useEffect, useRef, useState } from "react";
import type { Agent } from "@/app/data";

export function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduced.matches) {
      video.pause();
      return;
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) video.play().catch(() => undefined);
      else video.pause();
    }, { threshold: 0.08 });
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      className="hero-video"
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      poster="/media/ai-workforce-poster.jpg"
      aria-hidden="true"
    >
      <source src="/media/ai-workforce-loop.webm" type="video/webm; codecs=av01.0.05M.08" />
      <source src="/media/ai-workforce-loop.mp4" type="video/mp4" />
    </video>
  );
}

export function PlatformVideo({ variant }: { variant: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const video=ref.current;if(!video)return;
    if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){video.pause();return;}
    const observer=new IntersectionObserver(([entry])=>entry.isIntersecting?video.play().catch(()=>undefined):video.pause(),{threshold:.08});
    observer.observe(video);return()=>observer.disconnect();
  },[]);
  return <video ref={ref} className={`platform-video platform-video-${variant}`} autoPlay muted loop playsInline preload="metadata" poster="/media/ai-workforce-poster.jpg" aria-label={`Abstract moving visualization for ${variant.replaceAll("-"," ")}`}>
    <source src="/media/ai-workforce-loop.webm" type="video/webm; codecs=av01.0.05M.08"/><source src="/media/ai-workforce-loop.mp4" type="video/mp4"/>
  </video>;
}

export function Counter({ value, suffix = "", label }: { value: number; suffix?: string; label: string }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      if (reduced) {
        setDisplay(value);
        return;
      }
      const start = performance.now();
      const duration = 1100;
      const tick = (now: number) => {
        const progress = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - progress, 3);
        setDisplay(Math.round(value * eased));
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.55 });
    observer.observe(node);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div className="counter" ref={ref}>
      <strong>{display.toLocaleString()}{suffix}</strong>
      <span>{label}</span>
    </div>
  );
}

export function AgentConstellation({ agents }: { agents: Agent[] }) {
  const [activeId, setActiveId] = useState(agents[0]?.id ?? "");
  const active = agents.find((agent) => agent.id === activeId) ?? agents[0];

  return (
    <div className="constellation-layout">
      <div className="constellation-map" aria-label="Interactive AI agent operations map">
        <div className="constellation-orbit orbit-one" aria-hidden="true" />
        <div className="constellation-orbit orbit-two" aria-hidden="true" />
        <div className="constellation-core" aria-hidden="true"><span>Human<br />control</span></div>
        {agents.map((agent, index) => (
          <button
            type="button"
            className={`agent-node agent-node-${index + 1} ${agent.id === activeId ? "is-active" : ""}`}
            key={agent.id}
            onClick={() => setActiveId(agent.id)}
            aria-pressed={agent.id === activeId}
          >
            <span className="node-index">0{index + 1}</span>
            <span>{agent.title.replace(" Agent", "")}</span>
          </button>
        ))}
      </div>
      <div className="agent-detail" aria-live="polite">
        <p className="kicker">Active role / {active.id}</p>
        <h3>{active.title}</h3>
        <p className="agent-mission">{active.mission}</p>
        <dl>
          <div><dt>Inputs</dt><dd>{active.inputs}</dd></div>
          <div><dt>Executes</dt><dd>{active.tasks}</dd></div>
          <div><dt>Delivers</dt><dd>{active.output}</dd></div>
          <div className="approval-row"><dt>Human review</dt><dd>{active.approval}</dd></div>
        </dl>
      </div>
    </div>
  );
}

export function ContactIntent() {
  const [selected, setSelected] = useState("Benchmark");
  const options = ["Benchmark", "AI workshop", "Platform demo", "Transformation programme"];
  const subject = encodeURIComponent(`FIMMICK ${selected} request`);
  const body = encodeURIComponent(`Hello FIMMICK,\n\nI would like to discuss a ${selected.toLowerCase()}.\n\nCompany:\nRole:\nPriority workflow:\nMarkets:\n`);

  return (
    <div className="contact-intent">
      <p className="kicker">Choose a starting point</p>
      <div className="intent-options" role="group" aria-label="Conversation type">
        {options.map((option) => (
          <button key={option} className={selected === option ? "is-selected" : ""} type="button" onClick={() => setSelected(option)}>
            {option}<span aria-hidden="true">{selected === option ? "●" : "○"}</span>
          </button>
        ))}
      </div>
      <a className="button button-primary button-full" href={`mailto:info@fimmick.com?subject=${subject}&body=${body}`}>
        Request {selected} <span aria-hidden="true">↗</span>
      </a>
      <p className="microcopy">This opens your email client with a structured request. Prefer to talk? <a href="tel:+85236225388">+852 3622 5388</a></p>
    </div>
  );
}
