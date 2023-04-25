import React from 'react';

export default function YouTubeVideo({children, id, title}) {
  return (
    <div className="youtube-video" style={{aspectRatio: '16 / 9'}}>
      <iframe width="100%"
              height="100%"
              src={'https://www.youtube.com/embed/' + id}
              title={title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen>
      </iframe>
    </div>
  );
}
