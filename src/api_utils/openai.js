import { Configuration, OpenAIApi } from 'openai'

async function apiCall(form) {
  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

  try {
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: `Based on the academic performance and interests provided, suggest three degree programs that are available in universities across ${form.country}.`, // Provide the role and content for the system message
        },
        {
          role: "user",
          content: `I like ${form.fav_sub1}, ${form.fav_sub2} and ${form.fav_sub3}, I hope to become a ${form.dream_job1} or ${form.dream_job2}. My academic strength is ${form.performance}`, // Provide the role and content for the user message
        },
        {
          role: "user",
          content: `Add universities offering the programs you suggested.`, // Provide the role and content for the user message
        }
      ],
      temperature: 0.6,
    });
    return completion.data.choices[0].message.content; // Access the message content instead of text
  } catch (error) {
    if (error.response) {
      console.error(error.response.status, error.response.data);
      return "Processing rate limit exceeded, Try again in 21 seconds. 😑"
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
      return "Error Processing Your Request, Try again later 😑"
    }
  }
}

// apiCall({fav_sub1: "Social Studies", fav_sub2:"science", fav_sub3:"Religion", dream_job1: "", dream_job2:"", performance: "bad", country: "Togo"}).then((res) => console.log(res)); // Instead of setting a timeout, use a Promise and then() to handle the response


export default apiCall;