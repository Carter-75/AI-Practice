import React, { useState } from 'react';
import { Play, RotateCcw, CheckCircle, Eye, EyeOff } from 'lucide-react';
import Editor from '@monaco-editor/react';

interface CodePlaygroundProps {
  title: string;
  code: string;
  language: string;
  readOnly?: boolean;
  solution?: string;
  onComplete?: () => void;
  isCompleted?: boolean;
}

const CodePlayground: React.FC<CodePlaygroundProps> = ({
  title,
  code: initialCode,
  language,
  readOnly = false,
  solution,
  onComplete,
  isCompleted = false
}) => {
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState('');
  const [showSolution, setShowSolution] = useState(false);
  const [isRunning, setIsRunning] = useState(false);

  const handleCodeChange = (value: string | undefined) => {
    setCode(value || '');
  };

  const executeCode = async () => {
    setIsRunning(true);
    setOutput('');

    try {
      if (language === 'javascript') {
        executeJavaScript(code);
      } else if (language === 'python') {
        executePython(code);
      } else if (language === 'html') {
        executeHTML(code);
      } else {
        setOutput(`Execution for ${language} not yet supported in this playground.`);
      }
    } catch (error) {
      setOutput(`Error: ${error}`);
    }

    setIsRunning(false);
  };

  const executeJavaScript = (jsCode: string) => {
    // Create a safe console mock
    const logs: string[] = [];
    const mockConsole = {
      log: (...args: any[]) => logs.push(args.map(arg => String(arg)).join(' ')),
      error: (...args: any[]) => logs.push(`ERROR: ${args.map(arg => String(arg)).join(' ')}`),
      warn: (...args: any[]) => logs.push(`WARNING: ${args.map(arg => String(arg)).join(' ')}`),
    };

    try {
      // Create a function with the code and execute it
      const func = new Function('console', jsCode);
      func(mockConsole);
      setOutput(logs.length > 0 ? logs.join('\n') : 'Code executed successfully (no output)');
    } catch (error) {
      setOutput(`JavaScript Error: ${error}`);
    }
  };

  const executePython = (pythonCode: string) => {
    // Note: This is a placeholder. In a real implementation, you'd use a Python interpreter
    // like Pyodide or send the code to a backend service
    setOutput(`Python execution coming soon! Code to execute:\n${pythonCode}`);
  };

  const executeHTML = (htmlCode: string) => {
    // For HTML, we'll show a preview
    try {
      const blob = new Blob([htmlCode], { type: 'text/html' });
      const url = URL.createObjectURL(blob);
      setOutput(`HTML Preview available. Code length: ${htmlCode.length} characters`);
      
      // In a real implementation, you might show the HTML in an iframe
      setTimeout(() => URL.revokeObjectURL(url), 1000);
    } catch (error) {
      setOutput(`HTML Error: ${error}`);
    }
  };

  const resetCode = () => {
    setCode(initialCode);
    setOutput('');
    setShowSolution(false);
  };

  const toggleSolution = () => {
    if (showSolution) {
      setCode(initialCode);
      setShowSolution(false);
    } else {
      setCode(solution || '');
      setShowSolution(true);
    }
  };

  const handleMarkComplete = () => {
    if (onComplete) {
      onComplete();
    }
  };

  const getLanguageDisplayName = (lang: string) => {
    const langMap: { [key: string]: string } = {
      'javascript': 'JavaScript',
      'typescript': 'TypeScript',
      'python': 'Python',
      'html': 'HTML',
      'css': 'CSS',
      'json': 'JSON'
    };
    return langMap[lang] || lang.toUpperCase();
  };

  return (
    <div className="code-playground">
      <div className="playground-header">
        <div className="playground-title">
          {title} - {getLanguageDisplayName(language)}
          {isCompleted && (
            <span className="ml-2 text-success">
              <CheckCircle size={16} style={{ display: 'inline' }} /> Completed
            </span>
          )}
        </div>
        
        <div className="playground-actions">
          {!readOnly && (
            <>
              <button 
                onClick={executeCode}
                className="btn btn-primary btn-sm"
                disabled={isRunning}
              >
                <Play size={14} />
                {isRunning ? 'Running...' : 'Run'}
              </button>
              
              <button 
                onClick={resetCode}
                className="btn btn-secondary btn-sm"
              >
                <RotateCcw size={14} />
                Reset
              </button>
              
              {solution && (
                <button 
                  onClick={toggleSolution}
                  className="btn btn-secondary btn-sm"
                >
                  {showSolution ? <EyeOff size={14} /> : <Eye size={14} />}
                  {showSolution ? 'Hide' : 'Show'} Solution
                </button>
              )}
              
              {onComplete && !isCompleted && (
                <button 
                  onClick={handleMarkComplete}
                  className="btn btn-success btn-sm"
                >
                  <CheckCircle size={14} />
                  Complete
                </button>
              )}
            </>
          )}
        </div>
      </div>
      
      <div className="playground-content">
        <div className="code-editor">
          <Editor
            height="300px"
            language={language}
            value={code}
            onChange={handleCodeChange}
            options={{
              readOnly: readOnly,
              minimap: { enabled: false },
              fontSize: 14,
              lineNumbers: 'on',
              roundedSelection: false,
              scrollBeyondLastLine: false,
              automaticLayout: true,
              theme: 'vs-dark'
            }}
          />
        </div>
        
        {output && (
          <div className="playground-output">
            <div className="output-header">
              <span className="font-medium">Output:</span>
            </div>
            <pre className="output-content">{output}</pre>
          </div>
        )}
        
        {showSolution && solution && (
          <div className="solution-notice">
            <span className="text-sm text-warning">
              💡 Solution is now shown in the editor above
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default CodePlayground;