import createMDX from '@next/mdx'

const withMDX = createMDX({
    extension: /\.mdx?$/,
    // options: {
    //     remarkPlugins: [remarkGfm],
    //     rehypePlugins: [rehypePrism],
    // },
})

/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
}


export default withMDX(nextConfig);