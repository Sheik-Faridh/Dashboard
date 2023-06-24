import nodemailer from 'nodemailer'
import ejs from 'ejs'
import path from 'path'
import config from '@/config'
import logger from './logger'

const { MAIL_PASSWORD, MAIL_USERNAME, EMAIL_ID, MAIL_HOST, MAIL_PORT } = config

type SendMailArg = {
  templateName: string
  recipient: string | string[]
  subject: string
  context: Record<string, string>
}

const transporter = nodemailer.createTransport({
  host: MAIL_HOST,
  port: MAIL_PORT,
  auth: {
    user: MAIL_USERNAME,
    pass: MAIL_PASSWORD,
  },
})

export const verifyTransporter = () => {
  return new Promise((resolve, reject) => {
    transporter.verify(function (error) {
      if (error) {
        logger.error(error)
        reject(error)
      } else {
        logger.info('Mail Connection verified')
        resolve(null)
      }
    })
  })
}

export const sendMail = ({
  templateName,
  recipient,
  subject,
  context,
}: SendMailArg) => {
  return new Promise((resolve, reject) => {
    ejs.renderFile(
      path.resolve(__dirname, `../templates/${templateName}.ejs`),
      context,
      (err, data) => {
        if (err) return reject(err)

        const mailOptions = {
          from: EMAIL_ID,
          to: recipient,
          subject: subject,
          html: data,
        }

        transporter.sendMail(mailOptions, (error) => {
          if (error) return reject(error)
          return resolve(null)
        })
      },
    )
  })
}
