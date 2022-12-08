# HandGestureToTextAndSpeechLens

This is an implementation of convering hand signs to text and speach using Lens Studio.

# Hand Gesture detection

Lens studio has tools for differect object tracking and hand tracking in particular.
In this case default hand signes were used which are detected as events in object tracking component.
To create custom hand sign detection we can use 3D hand tracking which returns bone positions of 3d model of the hand detected by the camera.
This way we can calculate position of each finger and add possible threshold for hand gesture be detected as custom hand sign

# Hand signs

6 hand signes are detected by this lens:

1. Victory sign
2. Open sign
3. Index finger
4. Horns sign
5. Closed sign
6. Thumb up

These hand hand signes are being detected as events.

When the gesture is detected on screen text is modified corresponding to current hand gesture

# Text to speech

To create text to speech TTS module is being used.
With the change of the hand sign and after text changes speech being synthesized from new text and played after.
There is a delay for the text to be synthesized and spoken so different voice lines don't overlap.

Trying out the lens:


![Snapcode](https://snapcodes.storage.googleapis.com/png/7b871dc0-3d9a-3926-bf20-6dedd7751e71_320_5fb4941b-3702-4791-864a-bed6a4a1668a.png)
