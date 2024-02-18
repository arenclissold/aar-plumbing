const isVercelPreview = process.env.VERCEL_ENV === 'preview'
const publicHost = isVercelPreview ? process.env.VERCEL_URL : process.env.HOST

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_URL: `${process.env.PROTOCOL}://${publicHost}`,
  },
}

module.exports = nextConfig
