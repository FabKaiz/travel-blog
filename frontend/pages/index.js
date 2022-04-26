import { getClient } from "../lib/sanity.server";
import groq from 'groq';
import Head from "next/head";
import Link from "next/link";

const Home = ({ posts }) => {
  console.log(posts);
  return (
    <div>
      <Head>
        <title>Travel Blog</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="posts-container">
        
      </div>
    </div>
  )
};

export async function getStaticProps({ preview = false }) {
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
  `);
  return {
    props: {
      posts,
    }
  }
}

export default Home;
