"use client";
import React from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const Text = ({}) => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser does not support speech recognition.</span>;
  }

  return (
    <div className="text-section">
      <h1 className="lg:text-5xl font-bold text-2xl position-top-left">
        Speech to Text | PRESIDENT UNIVERSITY
      </h1>
      <div className="rest-of-content">
        <div className="transcript-box mt-6 pb-32 mb-4 rounded-md bg-base-100 lg:w-96 lg:h-48 w-64 h-64">
          <span className="ml-2 font-bold text-xl bg-base-100">generated text:</span>
          {transcript}
        </div>
        <p className="microphone-status mb-2 text-xl font-bold">
          Microphone: {listening ? 'Listening to your voice..' : 'off'}
        </p>
        <div className="flex gap-3">
          <button className="btn btn-primary btn-sm" onClick={SpeechRecognition.startListening}>Start</button>
          <button className="btn btn-secondary btn-sm" onClick={SpeechRecognition.stopListening}>Stop</button>
          <button className="btn btn-accent btn-sm" onClick={resetTranscript}>Reset</button>
        </div>
      </div>
    </div>
  );
};

export default Text;
