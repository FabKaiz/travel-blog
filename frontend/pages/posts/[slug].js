/* eslint-disable @next/next/no-img-element */
import groq from 'groq'
import Tag from '../../components/Tag/Tag'
import { PortableText } from '@portabletext/react'
import { urlFor } from '../../lib/sanity'
import { getClient } from '../../lib/sanity.server'
import styles from './post.module.css'
import Image from 'next/image'
import Map from '../../components/Map/Map'

const PostComponents = {
  types: {
    image: ({ value }) => {
      return (
        <div className={styles.post__image_container}>
          <img
            className={styles.post__image}
            alt={value.alt || 'post'}
            src={urlFor(value).url()}
          />
        </div>
      )
    },
  },
}

const Post = ({ post }) => {
  return (
    <>
      {post && (
        <div className={styles.post__container}>
          <article className={styles.post__content}>
            <h1>{post.title}</h1>
            <hr />
            <div className="tag__container">
              {post.categories?.map((category) => (
                <Tag
                  key={category?.title + '-' + post?.title}
                  title={category?.title}
                />
              ))}
            </div>
            <PortableText value={post?.body} components={PostComponents} />
            <hr />
            <div className={styles.post__info}>
              <div className={styles.author__container}>
                <Image
                  className="avatar"
                  src={urlFor(post?.authorImage).toString()}
                  alt={post?.username + ' avatar'}
                  width={50}
                  height={50}
                />
                <h3>
                  Author: <strong>{post?.username}</strong>
                </h3>
                <p>About the author:</p>
                <p>{post?.about}</p>
              </div>
              <div className={styles.map__container}>
                <Map longitude={post?.postedAt?.lng} latitude={post?.postedAt?.lat} />
              </div>
            </div>
          </article>
        </div>
      )}
    </>
  )
}

const query = groq`*[_type == "post" && slug.current == $slug][0] {
  title,
  "username": author->username,
  "about": author->bio,
  "categories": categories[]->{id, title},
  "authorImage": author->avatar,
  body,
  publishedAt,
  mainImage,
  postedAt
}`

export const getStaticPaths = async () => {
  const paths = await getClient().fetch(
    groq`*[_type == "post" && defined(slug.current)][].slug.current`
  )

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  }
}

export const getStaticProps = async ({ params, preview = false }) => {
  const post = await getClient(preview).fetch(query, { slug: params.slug })

  return {
    props: {
      post,
    },
  }
}
export default Post
