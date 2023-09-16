import React from "react";
import Header from "../components/Header";
import Footer from "../components/footer";
const ApiDocumentation = () => {
  return (
    <div>
    <div>
      <Header/>
    </div>
    <div className="container mt-5">
      <header className="p-4 rounded-lg shadow">
        <h1 className="display-4">API Documentation</h1>
        <p className="lead">
          Welcome to the API documentation for the Question Management API. This
          API allows you to manage questions, retrieve information about
          questions, and perform various actions related to question management.
        </p>
      </header>

      <section className="base-url mt-5">
        <h2>Base URL</h2>
        <code>https://api-stpn.onrender.com</code>
      </section>

      <section className="endpoints mt-5">
        <h2>Endpoints</h2>

        <div className="endpoint bg-light p-4 rounded-lg shadow">
          <h3>Get All Questions</h3>
          <p>Retrieve a list of all questions.</p>
          <p>
            <strong>URL:</strong> <code>/questions</code>
          </p>
          <p>
            <strong>Method:</strong> <code>GET</code>
          </p>
          <p>
            <strong>Response:</strong>
            <br />
            <code>Status Code: 200 (OK)</code>
            <br />
            <code>
              Body:
              <pre>
                {`
                    [
                    {
                        "question": "Sample question",
                        "option1": "Option 1",
                        // ... other properties
                    },
                    // ... other questions
                    ]
                `}
              </pre>
            </code>
          </p>
        </div>

        {/* Other endpoints */}
        {/* Add New Question */}
        <div className="endpoint bg-light p-4 mb-4 rounded-lg shadow mt-4">
          <h3>Add New Question</h3>
          <p>Add a new question to the system.</p>
          <p>
            <strong>URL:</strong> <code>/questions</code>
          </p>
          <p>
            <strong>Method:</strong> <code>POST</code>
          </p>
          <p>
            <strong>Request Body:</strong>
            <pre>
              {`
                {
                "question": "Sample question",
                "option1": "Option 1",
                // ... other properties
                }
              `}
            </pre>
          </p>
          <p>
            <strong>Response:</strong>
            <br />
            <code>Status Code: 201 (Created)</code>
            <br />
            <code>
              Body:
              <pre>
                {`
                    {
                    "message": "Question added successfully"
                    }
                `}
              </pre>
            </code>
          </p>
        </div>
      </section>
    </div>
    <Footer/>
    </div>
  );
};

export default ApiDocumentation;
