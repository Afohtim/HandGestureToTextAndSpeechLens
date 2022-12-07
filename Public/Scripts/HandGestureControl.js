// @input Component.ObjectTracking  handTracking
// @input Component.Text text

var descriptor = "open";
gestures = ["victory", "open", "index_finger", "horns", "close", "thumb"]
gestureText = {
    "victory" : "Victory sign",
    "open" : "Open sign",
    "index_finger" : "Index finger",
    "horns" : "Horns sign",
    "close" : "Closed sign",
    "thumb" : "Thumb up",
}

gestures.forEach(function(gesture) {
    script.handTracking.registerDescriptorStart(gesture, function () {
        script.text.text = gestureText[gesture]
});
})