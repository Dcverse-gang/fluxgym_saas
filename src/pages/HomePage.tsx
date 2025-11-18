import { useMemo } from "react";
import type React from "react";
import { useNavigate } from "react-router-dom";
import LandingNav from "../components/LandingNav";
import FeatureGrid from "../components/FeatureGrid";

const HomePage = () => {
  const navigate = useNavigate();

  const particles = useMemo(
    () =>
      Array.from({ length: 30 }, () => ({
        left: `${Math.random() * 100}%`,
        duration: `${Math.random() * 10 + 10}s`,
        delay: `${Math.random() * 5}s`,
      })),
    []
  );

  const handleAnchorClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    const href = event.currentTarget.getAttribute("href");
    if (href && href.startsWith("#")) {
      event.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const scrollToDemo = () => {
    const target = document.getElementById("demo");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="landing-page" id="landingPage">
      <div className="bg-animation">
        {particles.map((particle, index) => (
          <div
            key={index}
            className="particle"
            style={{
              left: particle.left,
              animationDuration: particle.duration,
              animationDelay: particle.delay,
            }}
          />
        ))}
      </div>

      <LandingNav onAnchorClick={handleAnchorClick} />

      <section className="hero">
        <div className="hero-badge">
          <span className="pulse-dot" />
          <span>Professional AI Training Platform</span>
        </div>

        <h1>
          Train Custom AI Models
          <br />
          In Minutes
        </h1>

        <p className="subtitle">
          Professional LoRA training platform powered by cutting-edge
          technology.
          <br />
          Create custom AI models without any technical expertise.
        </p>

        <div className="cta-container">
          <button
            className="btn btn-primary"
            type="button"
            onClick={() => navigate("/launch")}
          >
            Launch Session
          </button>
          <button
            className="btn btn-secondary"
            type="button"
            onClick={scrollToDemo}
          >
            Watch Demo
          </button>
        </div>
      </section>

      {/* Features section below hero */}
      <section className="flex justify-center px-6 py-16">
        <FeatureGrid />
      </section>

      {/* About section: image/text split with mission & vision cards */}
      <section
        id="about"
        className="border-t border-slate-800/60 py-16 px-6 flex justify-center"
      >
        <div className="max-w-6xl w-full flex flex-col gap-10 lg:flex-row lg:items-center">
          <div className="w-full max-w-xl overflow-hidden rounded-3xl border border-slate-700/60 shadow-2xl shadow-slate-950/80">
            <img
              src="https://picsum.photos/720/540?grayscale&random=3"
              alt="CloneX studio environment"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-col gap-6 lg:max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 text-center lg:text-left">
              About
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold bg-gradient-to-r from-slate-50 via-indigo-300 to-violet-300 bg-clip-text text-transparent text-center lg:text-left">
              Mission &amp; Vision
            </h2>
            <p className="text-sm md:text-base text-slate-200/90 text-center lg:text-left">
              CloneX is designed for creators, teams, and studios that need reliable LoRA
              training without wrestling with infrastructure. We focus on predictable
              performance, clean UX, and secure data handling.
            </p>

            <div className="mt-2 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-700/60 bg-slate-900/70 p-5 shadow-xl shadow-slate-950/70 backdrop-blur">
                <h3 className="mb-1 text-base font-semibold text-slate-50">Mission</h3>
                <p className="text-sm text-slate-200/90">
                  Help anyone train high‑quality, custom AI models in minutes — not hours —
                  with an interface that feels as polished as the models it powers.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-700/60 bg-slate-900/70 p-5 shadow-xl shadow-slate-950/70 backdrop-blur">
                <h3 className="mb-1 text-base font-semibold text-slate-50">Vision</h3>
                <p className="text-sm text-slate-200/90">
                  Become the default training cockpit for visual AI, connecting workflows,
                  teams, and infrastructure into a single, glass‑smooth experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing section */}
      <section
        id="pricing"
        className="section-block border-t border-slate-800/60 py-20 px-6"
      >
        <h2 className="section-heading text-center">Pricing</h2>
        <p className="mt-2 text-sm text-indigo-200/80 max-w-xl mx-auto text-center">
          Start small, experiment quickly, and scale to production workloads when you&apos;re
          ready.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
          {/* Starter */}
          <article className="flex flex-col rounded-2xl border border-slate-700/60 bg-slate-950/80 p-6 shadow-xl shadow-slate-950/70">
            <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-300">
              Starter
            </h3>
            <p className="mt-3 text-3xl font-semibold text-slate-50">
              $19
              <span className="text-sm font-normal text-slate-400 ml-1">/month</span>
            </p>
            <ul className="mt-3 space-y-1 text-sm text-slate-200/90">
              <li>Up to 3 active training sessions</li>
              <li>Optimized defaults for fast experiments</li>
              <li>Email support during business hours</li>
            </ul>
            <button className="btn btn-primary mt-5 w-full justify-center" type="button">
              Get Starter
            </button>
          </article>

          {/* Pro */}
          <article className="flex flex-col rounded-2xl border border-indigo-400/80 bg-slate-950/90 p-6 shadow-2xl shadow-indigo-900/80">
            <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-indigo-200">
              Pro
            </h3>
            <p className="mt-3 text-3xl font-semibold text-slate-50">
              $59
              <span className="text-sm font-normal text-slate-400 ml-1">/month</span>
            </p>
            <ul className="mt-3 space-y-1 text-sm text-slate-200/90">
              <li>Unlimited training runs</li>
              <li>Priority compute queues</li>
              <li>Team workspaces &amp; shared presets</li>
              <li>Priority support with Slack channel</li>
            </ul>
            <button className="btn btn-primary mt-5 w-full justify-center" type="button">
              Go Pro
            </button>
          </article>

          {/* Enterprise */}
          <article className="flex flex-col rounded-2xl border border-slate-700/60 bg-slate-950/80 p-6 shadow-xl shadow-slate-950/70">
            <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-300">
              Enterprise
            </h3>
            <p className="mt-3 text-3xl font-semibold text-slate-50">
              Custom
              <span className="text-sm font-normal text-slate-400 ml-1">/month</span>
            </p>
            <ul className="mt-3 space-y-1 text-sm text-slate-200/90">
              <li>Dedicated clusters &amp; on‑prem options</li>
              <li>Custom SSO, audit logs, and compliance</li>
              <li>Technical account manager</li>
            </ul>
            <button className="btn btn-secondary mt-5 w-full justify-center" type="button">
              Talk to Sales
            </button>
          </article>
        </div>
      </section>

      {/* Demo walkthrough section with full‑width video */}
      <section
        id="demo"
        className="section-block border-t border-slate-800/60 py-20 px-6 mb-16"
      >
        <h2 className="section-heading text-center">Demo Walkthrough</h2>
        <p className="mt-2 text-sm text-indigo-200/80 max-w-xl mx-auto text-center">
          Watch a full training session from dataset upload to ready‑to‑use model inside
          the FluxGym interface.
        </p>
        <div className="mt-10 flex justify-center">
          <div className="w-full max-w-6xl aspect-video overflow-hidden rounded-3xl border border-slate-700/60 shadow-2xl shadow-slate-950/90">
            <iframe
              src="https://www.youtube.com/embed/WYhfJEfsz7Q"
              title="FluxGym Demo Walkthrough"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
