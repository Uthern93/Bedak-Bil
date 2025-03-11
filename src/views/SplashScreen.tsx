import React from "react";
import RotatingText from "../ui-component/rotatingText/RotatingText";

const SplashScreen = () => {
  return (
    <div
      className="splash-bg flex items-center justify-center h-screen w-full bg-cover bg-center"
    >
      <h1 className="text-white font-extrabold flex items-center gap-2 text-4xl tracking-wide drop-shadow-xl">
        Bedak
        <div className="inline-block bg-white text-white rounded-xl shadow-md w-32 h-14 flex items-center justify-center">
          <RotatingText
            texts={["Bills", "Group", "Travel"]}
            mainClassName="font-bold block text-[#465efd]"
            staggerFrom="last"
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-120%", opacity: 0 }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={1500}
          />
        </div>
      </h1>
    </div>
  );
};

export default SplashScreen;
