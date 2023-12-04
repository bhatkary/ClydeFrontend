// apiCalls.js

const API_BASE_URL = 'http://127.0.0.1:8000';

// Function to detect language
export const detectLanguage = (code) => {
  const apiUrl = `${API_BASE_URL}/detect-language/`;
  
  // Make an API call using fetch or axios
  return fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ code }),  // Sending as { code }
  })
    .then(response => response.json())
    .catch(error => {
      console.error('Error detecting language:', error);
      throw error;
    });
};

// Function to convert code
export const convertCode = (code, targetLanguage) => {
  const apiUrl = `${API_BASE_URL}/convert-code/`;

  // Make an API call using fetch or axios
  return fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ code, targetLanguage }),
  })
    .then(response => response.json())
    .catch(error => {
      console.error('Error converting code:', error);
      throw error;
    });
};

// Combined function
export const handleRegularButtonClick = async (inputValue, selectedOption) => {
  try {
    // Detect language
    const detectedLanguage = await detectLanguage(inputValue);
    console.log('Detected language:', detectedLanguage);

    // Convert code
    const convertedCode = await convertCode(inputValue, selectedOption);
    console.log('Converted code:', convertedCode);

    // Add your logic here
  } catch (error) {
    // Handle errors
    console.error('Error:', error);
  }
};
