import type {NextConfig} from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    loader: 'custom',
    loaderFile: './src/sanity/imageLoader.ts',
  },
}

export default nextConfig
