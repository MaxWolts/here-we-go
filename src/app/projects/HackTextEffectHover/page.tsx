"use client";
import { useRef } from "react";
import { raleway } from "@/app/fonts";
import { GoBackHome } from "@/app/components/GoBackHome";
import styles from "./styles.module.css";
import gsap from "gsap";

interface Props {
  principal: string;
}

const HackTextEffectClick: React.FC<Props> = () => {
  const symbols = "!@#$%^&*()_+-=[]{};:,.<>?|ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const targetRef = useRef<HTMLHeadingElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  let interval: NodeJS.Timeout | null = null;

  const triggerEffect = () => {
    const targetElement = targetRef.current;
    const containerElement = containerRef.current;

    if (containerElement) {
      gsap.fromTo(
        containerElement,
        { width: "0rem", transformOrigin: "left" },
        { width: "15.625rem", duration: 1, ease: "power2.out" }
      );
    }

    if (targetElement) {
      let iteration = 0;
      clearInterval(interval as NodeJS.Timeout);
      interval = setInterval(() => {
        if (targetElement instanceof HTMLElement) {
          targetElement.innerText = targetElement.innerText
            .split("")
            .map((letter, index) => {
              if (index < iteration) {
                return targetElement.dataset.value?.[index] || "";
              }
              return symbols[Math.floor(Math.random() * symbols.length)];
            })
            .join("");

          if (iteration >= (targetElement.dataset.value?.length || 0)) {
            clearInterval(interval as NodeJS.Timeout);
          }

          iteration += 1 / 3;
        }
      }, 30);
    }
  };

  return (
    <div className={`${styles.hackTextPage} ${raleway.className}`}>
      <GoBackHome/>
      <div className={styles.hackTextContainer} ref={containerRef}>
        <h1 className={styles.title} data-value={"Hello world"} ref={targetRef}>
          Hello world
        </h1>
      </div>
      <button
        onClick={triggerEffect}
        className={`${styles.hackTextTriggerButton}`}
      >
        TRIGGER EFFECT
      </button>
    </div>
  );
};

export default HackTextEffectClick;
