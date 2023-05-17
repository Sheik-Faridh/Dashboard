import dotenv from 'dotenv'
import path from 'path'

// Load environment-specific variables based on the NODE_ENV value
if (process.env.NODE_ENV === 'production')
  dotenv.config({
    path: path.resolve(__dirname, '../secrets/.env.production'),
  })
else
  dotenv.config({
    path: path.resolve(__dirname, '../secrets/.env.development'),
  })

export default {
  PORT: Number(process.env.PORT),
}
