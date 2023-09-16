import React, { useState } from "react";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";

const QuestionForm = () => {
  const { user } = useAuth0();

  const [question, setQuestion] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");
  const [option4, setOption4] = useState("");
  const [correctOption, setCorrectOption] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      question: question,
      option1: option1,
      option2: option2,
      option3: option3,
      option4: option4,
      correctOption: correctOption,
      likesnumber: 0,
      answered: 0,
      correct: 0,
      username: user.name,
    };
    await axios.post("https://api-stpn.onrender.com/questions", data);
    showAlert("Question added successfully", "success");
    resetForm();
  };
  const showAlert = (message, type) => {
    const alertDiv = document.createElement("div");
    alertDiv.className = `alert alert-${type} mt-3 fixed-top mx-auto d-flex justify-content-between align-items-center bg-light`;
    alertDiv.style.maxWidth = "400px";
    alertDiv.innerHTML = `
      <span>${message}</span>
      <button class="btn btn-sm bg-primary text-white">OK</button>
    `;

    const okButton = alertDiv.querySelector("button");
    okButton.addEventListener("click", () => {
      alertDiv.remove();
    });

    document.body.appendChild(alertDiv);

    setTimeout(() => {
      alertDiv.remove();
    }, 5000);
  };
  const resetForm = () => {
    setQuestion("");
    setOption1("");
    setOption2("");
    setOption3("");
    setOption4("");
    setCorrectOption("");
  };

  const cardGradient = "linear-gradient(to right, #FFD700, #FFA500)"; // Gradient color for card
const cardShadow = "0px 5px 15px rgba(255, 165, 0, 0.3)"; //
  const transparentIndigo = "rgba(75, 0, 130, 0.5)";
  return (
    <div className="card mt-5 mb-5"  style={{
      maxWidth: "800px",
      margin: "0 auto",
      background: cardGradient,
      boxShadow: cardShadow,
      borderRadius: "10px",
    }}>
      <div className=" blue-grey lighten-5 card-body d-flex flex-column align-items-center">
        <h3 className="card-title fw-bold" style={{ fontSize: "1.25rem", color: transparentIndigo, }}>
        Add Question
        </h3>
        <form onSubmit={handleSubmit} className="w-100">
          <div className="mb-3 fw-bold ">
            <label htmlFor="questionInput" className="form-label">
              Question
            </label>
            <input
              type="text"
              id="questionInput"
              className="form-control"
              placeholder="Enter your question here"
              value={question}
              onChange={(event) => setQuestion(event.target.value)}
              required
            />
          </div>
          <div className="mb-3 fw-bold">
            <label htmlFor="option1Input" className="form-label">
              Option 1
            </label>
            <input
              type="text"
              id="option1Input"
              className="form-control"
              placeholder="Enter option 1"
              value={option1}
              onChange={(event) => setOption1(event.target.value)}
              required
            />
          </div>
          <div className="mb-3 fw-bold">
            <label htmlFor="option2Input" className="form-label">
              Option 2
            </label>
            <input
              type="text"
              id="option2Input"
              className="form-control"
              placeholder="Enter option 2"
              value={option2}
              onChange={(event) => setOption2(event.target.value)}
              required
            />
          </div>
          <div className="mb-3 fw-bold">
            <label htmlFor="option3Input" className="form-label">
              Option 3
            </label>
            <input
              type="text"
              id="option3Input"
              className="form-control"
              placeholder="Enter option 3"
              value={option3}
              onChange={(event) => setOption3(event.target.value)}
              required
            />
          </div>
          <div className="mb-3 fw-bold">
            <label htmlFor="option4Input" className="form-label">
              Option 4
            </label>
            <input
              type="text"
              id="option4Input"
              className="form-control"
              placeholder="Enter option 4"
              value={option4}
              onChange={(event) => setOption4(event.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="correctOptionInput" className="form-label">
              Correct Option
            </label>
            <input
              type="text"
              id="correctOptionInput"
              className="form-control"
              placeholder="Enter correct option"
              value={correctOption}
              onChange={(event) => setCorrectOption(event.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Publish
          </button>
        </form>
      </div>
    </div>
  );
};

export default QuestionForm;
