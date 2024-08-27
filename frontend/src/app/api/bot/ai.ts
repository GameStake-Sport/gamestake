import OpenAI from 'openai'

// Types
import type { NextApiRequest, NextApiResponse } from 'next'

const openai = new OpenAI({
  apiKey: process.env.NEXT_OPENAI
})

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Only POST requests are allowed' });
    return;
  }

  const { prompt } = req.body;

  if (!prompt) {
    res.status(400).json({ message: 'Prompt is required' })
    return
  }

  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 100,
      temperature: 0.7,
    })

    res.status(200).json({ result: response.choices[0].message.content });
  } catch (error) {
    console.error('Error connecting to OpenAI API:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}