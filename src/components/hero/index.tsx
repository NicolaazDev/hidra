"use client";

import React, { useEffect, useRef, useState } from "react";
import Header from "../header";
import ReactPlayer from "react-player";

const Hero: React.FC = () => {
  const videoRef = useRef<any>();

  // const setPlayBack = () => {
  //   if (videoRef.current) {
  //     videoRef.current.playbackRate = 2.5;
  //     videoRef.current.currentTime = 16;
  //     videoRef.current.play();
  //   }
  // };

  // const onReady = React.useCallback(() => {
  //   if (!videoRef.current) return;

  //   videoRef.current.currentTime = 16;
  // }, [videoRef.current]);

  const handleReady = () => {
    if (videoRef.current) {
      const player = videoRef.current.getInternalPlayer();

      player.seekTo(16, "seconds");
    }
  };

  return (
    <section
      id="inicio"
      className="center min-h-[900px] h-[100vh] bg-[#000000] relative overflow-hidden"
    >
      <Header />
      {/* <video ref={videoRef} autoPlay muted loop >
        <source src="https://files.catbox.moe/nnl506.mp4" type="video/mp4" />
      </video> */}
      <ReactPlayer
        loop
        ref={videoRef}
        playing
        playbackRate={1.5}
        muted
        url="https://files.catbox.moe/nnl506.mp4#t=16"
        config={{ file: { forceVideo: true } }}
        style={{ width: "100vw", height: "100vh", objectFit: "cover" }}
        width={"100%"}
        height={"100%"}
      />
    </section>
  );
};

export default Hero;
