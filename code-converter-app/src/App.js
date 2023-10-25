import { useState, useRef } from 'react'
import './App.css'; // Assuming the CSS code is in a file named "App.css"
import ReactMarkdown from 'react-markdown';
import Editor from "@monaco-editor/react"


const files = {
  "script.py": {
    name: "script.py",
    language: "javascript",
    value: "Enter your code here"
  },

}



function App() {
  const [fileName, setFileName] = useState("script.py"); // change to "index.html"
  const editorRef = useRef(null);
  const file = files[fileName];
  const [code, setCode] = useState('');
  const [convertedCode, setConvertedCode] = useState('Your Output Will Be Shown Here');
  const [language, setLanguage] = useState('');

  
  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
  }

  const handleConvert = async () => {
    setConvertedCode("Converting your incredible code... Wait a bit, this is going to be legendary!")
    setCode(editorRef.current.getValue())
    // console.log(code,editorRef.current.getValue())
    try {
      const response = await fetch('http://localhost:5000/convert', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code, language }), 
      });

      const data = await response.json();
      setConvertedCode(data.convertedCode);
      console.log(convertedCode)
    } catch (error) {
      console.error('Error converting code:', error);
    }
  };


  const handleDebug = async () => {
    setConvertedCode("Oh, don't worry, I'll do your work, debugging this flawless code... Not like I have better things to do!");
    setCode(editorRef.current.getValue())
    try {
      const response = await fetch('http://localhost:5000/debug', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code, language }),
      });

      const data = await response.json();
      setConvertedCode(data.convertedCode);
    } catch (error) {
      console.error('Error converting code:', error);
    }
  };

  const handleCheck = async () => {
    setCode(editorRef.current.getValue())
    setConvertedCode( "Checking the code quality... I'm sure it's already top-notch, but I'll still have a look for the fun of it!")
    try {
      const response = await fetch('http://localhost:5000/check', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code, language }),
      });

      const data = await response.json();
      setConvertedCode(data.convertedCode);
    } catch (error) {
      console.error('Error converting code:', error);
    }
  };
  
  return (
    <div className="container">
      <nav className="navbar">
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value="">SELECT LANGUAGE</option>
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
          <option value="java">Java</option>
          <option value="typescript">Typescript</option>
          <option value="C++">C++</option>
          {/* Add more options for different languages */}
        </select>
        <button onClick={handleConvert}>CONVERT</button>
        <button onClick={handleDebug}>DEBUG</button>
        <button onClick={handleCheck}>QUALITY CHECK</button>
      </nav>
      <div className='rootDiv'>      
      <div className="left-section">
        <Editor
        theme="vs-dark"
        onMount={handleEditorDidMount}
        path={file.name}
        defaultLanguage={file.language}
        defaultValue={file.value}
        />
        {/* <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Enter code..."
        /> */}
      </div>
      
      <div className="right-section">
      <h3>Output</h3>
      <ReactMarkdown className='markdown'>{convertedCode}</ReactMarkdown>
    
      </div>
      </div>
      </div>
  );
}

export default App;
