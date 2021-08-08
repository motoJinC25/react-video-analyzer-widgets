import React, { useEffect } from 'react';

const isEmpty = (str) => {
  return (!str || str.length === 0);
};

const AVAPlayer = (props) => {
  const AVA_PLAYER_ID = 'ava-player-widget';
  const AVA_PLAYER_TAG = 'ava-player';

  const setVideo = () => {
    if(!isEmpty(props.token) && !isEmpty(props.clientApiEndpointUrl) && !isEmpty(props.videoName)) {
      const avaPlayer = document.querySelector(AVA_PLAYER_TAG);
      avaPlayer.addEventListener('TOKEN_EXPIRED', () => {
        console.log('Token Expired');
      });
      avaPlayer.addEventListener('PLAYER_ERROR', (error) => {
        console.log('Player Error', error);
      });
      avaPlayer.configure({
        token: props.token,
        clientApiEndpointUrl: props.clientApiEndpointUrl,
        videoName: props.videoName,
      });
      avaPlayer.load();
    }
  };

  useEffect(() => {
    const widgetRoot = document.getElementById(AVA_PLAYER_ID);
    const avaPlayerTag = document.createElement(AVA_PLAYER_TAG);
    widgetRoot.appendChild(avaPlayerTag);
    setVideo();

    return () => {
      widgetRoot.removeChild(avaPlayerTag);
    };
  }, [props.videoName]);

  useEffect(() => {
    const existingScript = document.getElementById('avaPlayer');
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/@azure/video-analyzer-widgets@latest/dist/global.min.js';
    script.async = true;
    script.id = 'avaPlayer';

    if (!existingScript) {
      document.body.appendChild(script);
    }

    return () => {
      if (!existingScript) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div id={AVA_PLAYER_ID}></div>
  );
};

export { AVAPlayer };
