import { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import questions from "../task2questions"
import WritingTask from "./WritingTask";

//Function Read questions
const getRandomQuestion = () => {
  return questions[Math.floor(Math.random() * questions.length)].question;
};

const App = () => {

  const [text, setText] = useState("");
  const [wordCount, setWordCount] = useState(0);
  const [timeLeft, setTimeLeft] = useState(26);
  const [isRunning, setIsRunning] = useState(false);
  const [question, setQuestion] = useState("");


  useEffect(() => {
    // Set a random question when the component loads
    setQuestion(getRandomQuestion());
  }, []);

  // Function to count words
  const countWords = (inputText) => {
    const words = inputText.trim().split(/\s+/);
    return inputText.trim() === "" ? 0 : words.length;
  };

  // Handle text input change
  const handleChange = (event) => {
    const newText = event.target.value;
    setText(newText);
    setWordCount(countWords(newText));

    if (!isRunning) {
      setIsRunning(true); // Start timer when typing begins
    }
  };

  // Timer effect
  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 60000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0) {
      setIsRunning(false);
    }
  }, [isRunning, timeLeft]);

  return (
    <div className="container">
      <Header />
      <WritingTask
        question={question}
        text={text}
        handleChange={handleChange}
        wordCount={wordCount}
        timeLeft={timeLeft}
      />
      <Footer />
    </div>
  );
};

export default App;