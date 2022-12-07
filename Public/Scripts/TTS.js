// @input Asset.TextToSpeechModule ttsModule
// @input Component.Text text

var currentText = script.text.text

var onTTSComplete = function(audioTrackAsset, wordInfos) {
    var audioComponent = script.getSceneObject().createComponent('Component.AudioComponent');
    audioComponent.audioTrack = audioTrackAsset;
    audioComponent.play(1);
}

var onTTSError = function(error, description) {
    print("Synthesis error!");
}

var options = TextToSpeech.Options.create(); 
options.voiceName = TextToSpeech.VoiceNames.Sam;

var enableUpd = script.createEvent("DelayedCallbackEvent");
var upd = script.createEvent("UpdateEvent");
upd.bind(function() { 
    if(script.text.text != currentText) {
        currentText = script.text.text;
        script.ttsModule.synthesize(currentText, options, onTTSComplete, onTTSError);
    }
    enableUpd.reset(0.5);
    upd.enabled = false;
})
enableUpd.bind(function() {
    upd.enabled = true;
})