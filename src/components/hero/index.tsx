"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactTyped } from "react-typed";
import LoginForm from "../form";
import Header from "../header";
import RegisterForm from "../form/registerForm";
import { useFormContext } from "@/context/formContext";
import { AnimatePresence, motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const Hero: React.FC = () => {
  const { isRegister } = useFormContext();
  const bgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    gsap.to(bgRef.current, {
      yPercent: 50,
      ease: "none",
      scrollTrigger: {
        trigger: bgRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  return (
    <section className="center min-h-[900px] h-[100vh] bg-[#000000] relative overflow-hidden">
      <Header />
      <video src="https://files.catbox.moe/nnl506.mp4" autoPlay muted loop />
    </section>
  );
};

export default Hero;
