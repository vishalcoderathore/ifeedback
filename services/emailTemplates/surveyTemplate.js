const keys = require('../../config/keys');

module.exports = survey => {
  return `
    <html>
        <body>
            <div style="text-align: center;">
                <h3>We would love to hear back from you!</h3>
                <p>Please answer the following questions: </p>
                <p>${survey.body}</p>
                <div>
                    <a href="${keys.redirectDomain}/api/surveys/${
    survey.id
  }/yes">Yes</a>
                </div>
                <div>
                    <a href="${keys.redirectDomain}/api/surveys/${
    survey.id
  }/no">No</a>
                </div>
            </div>
        </body>
    </html>`;
};
