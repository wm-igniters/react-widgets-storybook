# Methods

The Audio component does not expose any specific methods in the current implementation.

To access the component programmatically, you can use:
```javascript
Page.Widgets.audioComponentName
```

And then modify its properties, for example:
```javascript
// Mute the audio
Page.Widgets.myAudio.muted = true;

// Change the source
Page.Widgets.myAudio.mp3format = "path/to/new/audio.mp3";
```