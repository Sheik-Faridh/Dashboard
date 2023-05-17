import express from 'express'
import config from '@/config'

const app = express()

const { PORT } = config

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
