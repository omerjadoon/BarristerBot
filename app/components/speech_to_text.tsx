import { useState, useEffect } from 'react';

const SpeechToText: React.FC<{ onTranscript: (text: string) => void }> = ({ onTranscript }) => {
    const [isListening, setIsListening] = useState(false);
    const [transcript, setTranscript] = useState('');

    useEffect(() => {

        const recognition = new ((window as any).SpeechRecognition || (window as any).webkitSpeechRecognition)();

        recognition.continuous = true;
        recognition.interimResults = true;
        recognition.lang = 'en-US';

        recognition.onresult = (event: any) => { 
            let finalTranscript = ''; 
            let interimTranscript = ''; 
            for (let i = event.resultIndex; i < event.results.length; i++) 
                { const transcriptPart = event.results[i][0].transcript; 
                    if (event.results[i].isFinal) { finalTranscript += transcriptPart; } 
                    else { interimTranscript += transcriptPart; } } 
            
            setTranscript(prev => prev + finalTranscript); onTranscript(transcript + finalTranscript + interimTranscript); };  


        // recognition.onresult = async function(event:any) {
        //     const transcript = event.results[0][0].transcript;
        //     console.log('transcript', transcript);
        //     setTranscript(transcript)
        //   }

        if (isListening) {
            recognition.start();
        } else {
            recognition.stop();
        }

        return () => {
            recognition.stop();
        };
    }, [isListening]);

    return (
        <div>
            <button onClick={() => setIsListening(prev => !prev)}>
                {isListening ? 'Stop Listening' : 'Start Listening'}
            </button>
            <div>
                <h2>Transcript</h2>
                <p>{transcript}</p>
            </div>
        </div>
    );
};

export default SpeechToText;