# React Azure Video Analyzer widgets

React wrapper for [Azure Video Analyzer widgets](https://www.npmjs.com/package/@azure/video-analyzer-widgets)

![demo image](https://raw.githubusercontent.com/motoJinC25/react-video-analyzer-widgets/main/images/demo.png)

## Install

```bash
yarn add react-video-analyzer-widgets
```

## Usage

```jsx
import React from 'react';
import { AVAPlayer } from 'react-video-analyzer-widgets';

const Example = () => {
  return (
    <>
      <AVAPlayer videoName={videoName} clientApiEndpointUrl={clientApiEndpointUrl} token={token} maxWidth={'700px'} width={'100%'} />
    </>
  );
};
```
