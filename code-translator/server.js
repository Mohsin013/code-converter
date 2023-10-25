const express = require('express');
const app = express();
const PORT = 5000; // or any other port you prefer
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors())
app.use(bodyParser.json());
app.use(express.json());
app.use(express.static('client')); // Assuming your client files are in a 'client' directory
const axios = require('axios');
require('dotenv').config();


app.post('/convert', async (req, res) => {
  
  const { code, language } = req.body;
  // console.log(code ,language)
  // Call the ChatGPT API to convert the code
  try {
    const response = await axios.post('https://api.openai.com/v1/chat/completions', {
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: `You are a code converter that converts code into ${language}.` },
        { role: 'user', content: code },
      ],
      max_tokens: 500,
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
      },
    });

    const convertedCode = response.data.choices[0].message.content;
    console.log(convertedCode)

    res.json({ convertedCode });
  } catch (error) {
    // console.error(error);
    res.status(500).send('An error occurred during code conversion.');
  }
});


app.post('/debug', async (req, res) => {
  
  const { code, language } = req.body;
  console.log(code ,language)
  // Call the ChatGPT API to convert the code
  try {
    const response = await axios.post('https://api.openai.com/v1/chat/completions', {
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: `Help me to solve the issue and write updated code. Also explain what the issue was and what you did to fix it.` },
        { role: 'user', content: code },
      ],
      max_tokens: 500,
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
    });

    const convertedCode = response.data.choices[0].message.content;

    res.json({ convertedCode });
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred during code conversion.');
  }
});

app.post('/check', async (req, res) => {
  
  const { code, language } = req.body;
  console.log(code ,language)
  // Call the ChatGPT API to convert the code
  try {
    const response = await axios.post('https://api.openai.com/v1/chat/completions', {
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: `Please provide a code quality assessment for the given code. Consider the following parameters:

        1. Code Consistency: Evaluate the code for consistent coding style, naming conventions, and formatting.
        2. Code Performance: Assess the code for efficient algorithms, optimized data structures, and overall performance considerations.
        3. Code Documentation: Review the code for appropriate comments, inline documentation, and clear explanations of complex logic.
        4. Error Handling: Examine the code for proper error handling and graceful error recovery mechanisms.
        5. Code Testability: Evaluate the code for ease of unit testing, mocking, and overall testability.
        6. Code Modularity: Assess the code for modular design, separation of concerns, and reusability of components.
        7. Code Complexity: Analyze the code for excessive complexity, convoluted logic, and potential code smells.
        8. Code Duplication: Identify any code duplication and assess its impact on maintainability and readability.
        9. Code Readability: Evaluate the code for readability, clarity, and adherence to coding best practices.
        
        Please provide a summary of the code quality assessment and a report showing the percentage-wise evaluation for each parameter mentioned above.
        ` },
        { role: 'user', content: code },
      ],
      max_tokens: 1000,
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
      },
    });

    const convertedCode = response.data.choices[0].message.content;

    res.json({ convertedCode });
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred during code conversion.');
  }
});
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
