# React Azure Video Analyzer widgets

React wrapper for [Azure Video Analyzer widgets](https://www.npmjs.com/package/@azure/video-analyzer-widgets)

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
      <AVAPlayer videoName={videoName} clientApiEndpointUrl={clientApiEndpointUrl} token={token} />
    </>
  );
};
```
