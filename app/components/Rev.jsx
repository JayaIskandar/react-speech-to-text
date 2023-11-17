
import { apiclient } from 'rev_ai'; // Import Rev.ai SDK

export default async function handler(req, res) {
  try {
    const token = "028O4feXQuz3oi7PxtVCAmImzqoydVwhyNRuIlAB0FUqYxR2jO6Ac2PWiFrE6RXhF5hKbTwccklQcQx_uXNk95p9q1QGs";
    const filePath = "indo_voice_rec_sample.mp4"; // Replace this string with your actual file path when using the code

    // Create your Rev.ai client
    const client = apiclient.RevAiAPIClient(token);

    // Send a local file for transcription
    const job = await client.submit_job_local_file(filePath);

    // Retrieve job ID for checking status or fetching transcript later
    const jobId = job.id;

    // You can handle job status checks, retrieve transcript text/JSON/object, etc.
    // For example:
    const jobDetails = await client.get_job_details(jobId);
    const transcriptText = await client.get_transcript_text(jobId);
    const transcriptJson = await client.get_transcript_json(jobId);
    const transcriptObject = await client.get_transcript_object(jobId);

    // Send back appropriate data in the API response
    res.status(200).json({
      jobId,
      jobDetails,
      transcriptText,
      transcriptJson,
      transcriptObject,
    });
  } catch (error) {
    // Handle errors
    console.error('Error:', error);
    res.status(500).json({ error: 'An error occurred while processing the request.' });
  }
  
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
}
