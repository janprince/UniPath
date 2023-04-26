const {Configuration, OpenAIApi} = require("openai")// Make sure to import the required modules
const dotenv = require("dotenv").config()


async function apiCall(form) {
  const configuration = new Configuration({
    apiKey: "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",
  });
  const openai = new OpenAIApi(configuration);

  try {
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: `Suggest 3 University Programs based on the interests and academic performance provided. the university programs should be available in universities across ${form.country}`, // Provide the role and content for the system message
        },
        {
          role: "user",
          content: `I like ${form.fav_sub1}, ${form.fav_sub2} and ${form.fav_sub3}, I hope to become a ${form.dream_job1} or ${form.dream_job2}. My academic strength is ${form.performance}`, // Provide the role and content for the user message
        },
      ],
      temperature: 0.6,
    });
    return completion.data.choices[0].message.content; // Access the message content instead of text
  } catch (error) {
    if (error.response) {
      console.error(error.response.status, error.response.data);
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
    }
  }
}

apiCall().then((res) => console.log(res)); // Instead of setting a timeout, use a Promise and then() to handle the response


export default apiCall;