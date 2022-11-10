import React from "react";

const videos = [
  {
    title: "COUNTERFEST FEB 2022",
    src: "https://www.youtube.com/embed/wL_mqxh5qhE?start=2546",
    description: `Red Morrow's first appearance at CounterFest`,
  },
  {
    title: "Red Morrow gone ACOUSTIC?",
    src: "https://www.youtube.com/embed/_mrUeevMVBk",
    description: `Red Morrow's first acoustic show at the Che Cafe in USD`,
  },
  {
    title: "Mourn the Living",
    src: "https://www.youtube.com/embed/H8Cgbmc5vVo",
    description:
      "First Mourn the Living release with live performance from FTG",
  },
  {
    title: "Poles Asunder live at FTG",
    src: "https://www.youtube.com/embed/GyNrD-c4j68",
    description: "Poles Asunder live at FTG during counterfest FEB 2022",
  },
  {
    title: "Out Loud live at the Melrose Night Market",
    src: "https://www.youtube.com/embed/af_qRXgJhA8",
    description: "Out Loud live at the Melrose Night Market 28.01.22",
  },
  {
    title: "Red Morrow Full Set at FTG June 2022",
    src: "https://www.youtube.com/embed/xOgD81t52Fg",
    description: "Red Morrow Full Set at FTG June 2022",
  },
  {
    title: "",
    src: "",
    description: "",
  },
  {
    title: "",
    src: "",
    description: "",
  },
  {
    title: "",
    src: "",
    description: "",
  },
  {
    title: "",
    src: "",
    description: "",
  },
];

function VideoGallery() {
  return (
    <div className="video-gallery-container">
      {videos.map((video) => {
        return (
          <div className="video-gallery-item">
            <h2 className="video-gallery-video-title">{video.title}</h2>
            <iframe
              className="video-gallery-video"
              src={video.src}
              title={video.title}
              allowFullScreen
            ></iframe>
            <p className="video-gallery-video-description">
              {video.description}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default VideoGallery;
