"use client"
import { useRive } from "@rive-app/react-canvas";
import styles from "./styles.module.css";

const HelpRobot = () => {
  const { rive, RiveComponent } = useRive({
    src: "/cat.riv",
    stateMachines: "State Machine 1",
    artboard: "robot",
    autoplay: true,
  });

  const handleHover = () => {
    if (rive && rive.stateMachineInputs("State Machine 1")) {
      const inputs = rive.stateMachineInputs("State Machine 1");
      const firstInput = inputs[0];
      firstInput.value = !firstInput.value;
    }
  };

  return (
    <section className={styles.robotContainerSection}>
      <div
        className={styles.buttonHelp}
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
      >
        <RiveComponent className={styles.robotContainer} />
      </div>
    </section>
  );
};

export default HelpRobot;
