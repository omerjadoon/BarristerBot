import { useState, useEffect } from 'react';

interface TextToSpeechProps {
    initialText?: string;
}

const TextToSpeech: React.FC<TextToSpeechProps> = ({ initialText = '' }) => {
    const [text, setText] = useState<string>(initialText);

    useEffect(() => {
        setText(initialText);
    }, [initialText]);

    const handleSpeak = () => {
        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(text);
            window.speechSynthesis.speak(utterance);
        } else {
            console.error('Sorry, your browser does not support speech synthesis.');
        }
    };

    return (
        <div>
            <h1>Text to Speech Example</h1>
            <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                rows={10}
                cols={50}
                placeholder="Enter text here..."
            />
            <br />
            <button onClick={handleSpeak}>Speak</button>
        </div>
    );
};

export default TextToSpeech;
