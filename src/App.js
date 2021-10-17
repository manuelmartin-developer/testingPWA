import React, { useState, useEffect } from 'react';
import Camera, { FACING_MODES, IMAGE_TYPES } from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
import ImagePreview from './components/ImagePreview'

function App (props) {

  const [photo, setPhoto] = useState('');

  function handleTakePhoto (dataUri) {
    // Do stuff with the photo...
    sessionStorage.setItem('photo', dataUri);
    setPhoto(dataUri);
  }

  function handleTakePhotoAnimationDone (dataUri) {
    // Do stuff with the photo...
    console.log('takePhoto');
  }

  function handleCameraError (error) {
    console.log('handleCameraError', error);
  }

  function handleCameraStart (stream) {
    console.log('handleCameraStart');
  }

  function handleCameraStop () {
    console.log('handleCameraStop');
  }

  useEffect(()=> {
    console.log(photo);
  }, [photo]);
  

  const isFullscreen = false;
  return (
    <>
    {
      (photo)
        ? <ImagePreview dataUri={photo}
          isFullscreen={isFullscreen}
        />
        : <Camera
        onTakePhoto = { (dataUri) => { handleTakePhoto(dataUri); } }
        onTakePhotoAnimationDone = { (dataUri) => { handleTakePhotoAnimationDone(dataUri); } }
        onCameraError = { (error) => { handleCameraError(error); } }
        idealFacingMode = {FACING_MODES.ENVIRONMENT}
        idealResolution = {{width: 640, height: 480}}
        imageType = {IMAGE_TYPES.JPG}
        imageCompression = {0.97}
        isMaxResolution = {true}
        isImageMirror = {true}
        isSilentMode = {false}
        isDisplayStartCameraError = {true}
        isFullscreen = {isFullscreen}
        sizeFactor = {1}
        onCameraStart = { (stream) => { handleCameraStart(stream); } }
        onCameraStop = { () => { handleCameraStop(); } }
      />
    }
    </>

  );
}

export default App;