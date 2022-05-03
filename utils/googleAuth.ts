import { google } from 'googleapis'
import googleUtilsType from '../types'

const oauth2Client = new google.auth.OAuth2(
  '798176065537-4knj1d7b14rk1okgsnbqov54ld5hl4ji.apps.googleusercontent.com',
  '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',
  'http://localhost:5000/v1/user/google'
)

const getUrl = (): string => {
  const url = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: 'https://www.googleapis.com/auth/userinfo.email'
  })
  return url
}

const getUser = async (code: string) : Promise<{}> => {
  const { tokens } = await oauth2Client.getToken(code)
  const oauth2NewClient = new google.auth.OAuth2()

  oauth2NewClient.setCredentials({ access_token: tokens.access_token })
  const oauth2 = google.oauth2({
    auth: oauth2NewClient,
    version: 'v2'
  })
  return (await oauth2.userinfo.get()).data
}

export const googleUtils: googleUtilsType = { getUrl, getUser }
