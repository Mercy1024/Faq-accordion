import PropTypes from "prop-types";
import { useState } from "react";

const faqArray = [
  {
    question: "What is Frontend Mentor, and how will it help me?",
    answer:
      "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
  },
  {
    question: "Is Frontend Mentor free?",
    answer:
      "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.",
  },
  {
    question: "Can I use Frontend Mentor projects in my portfolio?",
    answer:
      "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
  },
  {
    question:
      " How can I get help if I'm stuck on a Frontend Mentor challenge?",
    answer:
      "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
  },
];

export default function App() {
  return (
    <div className="container">
      <div className="mobile_background">
        <img src="../public/assets/images/background-pattern-mobile.svg" />
      </div>
      <div className="desktop_background">
        <img src="../public/assets/images/background-pattern-desktop.svg" />
      </div>

      <Main />
    </div>
  );
}

function Header() {
  return (
    <header>
      <img src="../public/assets/images/icon-star.svg" />
      <h1>FAQs</h1>
    </header>
  );
}

function Button({ children }) {
  return <span className="btn">{children}</span>;
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
};

function Faq({ question, answer }) {
  const [active, setActive] = useState(true);
  function handleClick() {
    setActive(!active);
    console.log(active);
  }
  return (
    <div className="faq-container">
      <div className="question" onClick={() => handleClick()}>
        <p>{question}</p>
        {active ? (
          <Button>
            <img src="../assets/images/icon-plus.svg" />
          </Button>
        ) : (
          <Button>
            <img src="../assets/images/icon-minus.svg" />
          </Button>
        )}
      </div>
      <div className="Answer">{active ? "" : answer}</div>
    </div>
  );
}

Faq.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
};

function Main() {
  return (
    <main>
      <Header />
      {faqArray.map((element, index) => (
        <Faq question={element.question} answer={element.answer} key={index} />
      ))}
    </main>
  );
}
