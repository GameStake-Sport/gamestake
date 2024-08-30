import { run, HandlerContext } from '@xmtp/message-kit';

export async function POST (req: Request, res: any) {
  // Run the XMTP handler
  run(async (context: HandlerContext) => {
    const { content, sender } = context.message
    console.log(`Received message: ${content} from ${sender}`)

    // Respond with "gm"
    await context.reply('gm')
  }).then(() => {
    res.status(200).send('XMTP handler running')
  }).catch(err => {
    console.error(err)
    res.status(500).send('Error initializing XMTP handler')
  })
}