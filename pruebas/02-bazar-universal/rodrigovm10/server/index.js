import { app } from './app.js'

async function main () {
  const PORT = process.env.PORT ?? 1234

  try {
    app.listen(PORT)
    console.log(`Listening on port http://localhost:${PORT}`)
  } catch (error) {
    console.error(error)
  }
}

main()
