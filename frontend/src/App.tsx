import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import ollamaLogo from './assets/docker.svg';
import viteLogo from '/vite.svg';
import { FaLocationArrow } from 'react-icons/fa';
import { LuBrainCircuit } from "react-icons/lu";
import { MdFace2 } from "react-icons/md";
import Header from './componets/Header';
import Footer from './componets/Footer';

import './App.css';

function App() {
  const [text, setText] = useState('');
  const [conversation, setConversation] = useState([]);
  const apiUrl = import.meta.env.VITE_OLLAMA_API_URL;
  const initialContext = import.meta.env.VITE_OLLAMA_CONTEXT;
  const [models, setModels] = useState([]);
  const [selectedModel, setSelectedModel] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetch(`${apiUrl}/api/tags`)
      .then(response => response.json())
      .then(data => setModels(data.models));
  }, []);

  useEffect(() => {
    if (initialContext) {
      const initialMessage = { role: "system", content: initialContext };
      setConversation([initialMessage]);
    }
  }, [initialContext]);

  const handleSend = async () => {
    if (text.trim() === '') return;
    if (selectedModel === '') {
      alert('Por favor, selecciona un modelo antes de enviar un mensaje.');
      return;
    }

    const newMessage = { role: "user", content: text };
    setConversation((prev) => [...prev, newMessage]);
    setIsLoading(true);

    try {
      const response = await fetch(`${apiUrl}/api/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: selectedModel,
          messages: [...conversation, newMessage],
          stream: true,
          options: {
            num_predict: 100, // Limita la respuesta a 100 tokens
            temperature: 0.7, // Controla la creatividad de la respuesta
            top_p: 0.9, // Equilibra coherencia y diversidad
            repeat_penalty: 1.1, // Evita repeticiones
            stop: ["\n"], // Puede detener la generación al final de la oración
          },
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let done = false;
      let assistantMessage = { role: "assistant", content: "" };
      setConversation((prev) => [...prev, assistantMessage]);

      while (!done) {
        const { value, done: doneReading } = await reader.read();
        done = doneReading;
        const chunk = decoder.decode(value, { stream: true });

        const jsonChunks = chunk.split('\n').filter(line => line.trim() !== '');
        jsonChunks.forEach(jsonChunk => {
          const parsedChunk = JSON.parse(jsonChunk);
          if (parsedChunk.message && parsedChunk.message.content) {
            setConversation((prev) => prev.map((msg, i) => 
              i === prev.length - 1 ? { ...msg, content: msg.content + parsedChunk.message.content } : msg
            ));
          }
        });
      }
    } catch (error) {
      console.error('Error sending text to API:', error);
      setConversation((prev) => prev.map((msg, i) => 
        i === prev.length - 1 ? { ...msg, content: 'Error retrieving response' } : msg
      ));
    }

    setText('');
    setIsLoading(false);
  };

  return (
    <>
    <Header />
    <div className="chat__container">
      <div className='chat__container--header'>
        <a className="link" href="https://vite.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a className="link" href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a className="link" href="https://ollama.com" target="_blank" rel="noopener noreferrer">
          <img src={ollamaLogo} className="logo" alt="Ollama logo" />
        </a>
      </div>

      <h1>Neo Chat</h1>

      <div className="chat__container--conversation">
        
        {/* Conversation messages */}
        <div className='conversation__messages'>
          {conversation.map((msg, index) => (
            <div key={index} className="message">
              {msg.role === "user" && (
                <p className="question">
                  {msg.content} <MdFace2 />
                </p>
              )}
              {msg.role === "assistant" && (
                <p className="answer">
                  <LuBrainCircuit /> {msg.content}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Conversation Input */}
        <div className="conversation__input">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Haz una pregunta..."
          ></textarea>
          <button 
            onClick={handleSend} 
            className={isLoading ? 'pulsing' : ''}
          >
            <FaLocationArrow />
          </button>
        </div>

        {/* Select Model */}
        <div className='conversation__model'>
          <select 
            onChange={(e) => setSelectedModel(e.target.value)} 
            value={selectedModel}
          >
            <option key='' value=''>Selecciona el modelo</option>
            {models.map(model => (
              <option key={model.model} value={model.model}>
                {model.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>

    <Footer />
    </>
  );
}

export default App;
