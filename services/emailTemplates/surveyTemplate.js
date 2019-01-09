const keys = require("../../config/keys");

module.exports = survey => {
  return `
    <html>
        <body>
            <div style="text-align: center;">
                <h3>We here at iFeedback would love your input!</h3>
                <p>Please answer the following questions: </p>
                <p>${survey.body}</p>
                <div>
                    <a href="${keys.redirectDomain}/feedback/surveys">Yes</a>
                </div>
                <div>
                    <a href="${keys.redirectDomain}/feedback/surveys">No</a>
                </div>
            </div>
        </body>
    </html>`;
};
