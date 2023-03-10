import dotenv from 'dotenv'
import aws from 'aws-sdk'
import crypto from 'crypto'
import { promisify } from "util"
const randomBytes = promisify(crypto.randomBytes)

// dotenv.config()

const region = "us-east-1"
const bucketName = "stylex-store"
const accessKeyId = "AKIAW2M3IQTH3XGMJBWM"
const secretAccessKey = "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"

const s3 = new aws.S3({
  region,
  accessKeyId,
  secretAccessKey,
  signatureVersion: 'v4'
})

export async function generateUploadURL() {
  const rawBytes = await randomBytes(16)
  const imageName = rawBytes.toString('hex')

  const params = ({
    Bucket: bucketName,
    Key: imageName,
  })
  
  const uploadURL = await s3.getSignedUrlPromise('putObject', params)
  return uploadURL
}