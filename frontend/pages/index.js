import { getClient } from '../lib/sanity.server'
import groq from 'groq'
import Head from 'next/head'
import Link from 'next/link'
import Card from '../components/Card/Card'

const Home = ({ posts }) => {
  return (
    <div className="dashboard">
      <Head>
        <title>Travel Blog</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="posts__container">
        {posts?.map((post) => (
          <Link
            href={`/posts/${post.slug.current}`}
            key={post._id.toString()}
            passHref
          >
            <a>
              <Card post={post} />
            </a>
          </Link>
        ))}
      </div>
    </div>
  )
}

export const getStaticProps = async ({ preview = false }) => {
  const posts = await getClient(preview).fetch(groq`
    *[_type == "post" && publishedAt < now()] | order(publishedAt desc) {
      _id,
      title,
      "username": author->username,
      "categories": categories[]->{id, title},
      "authorImage": author->avatar,
      body,
      mainImage,
      slug,
      publishedAt
    }
  `)
  return {
    props: {
      posts,
    },
  }
}

export default Home
