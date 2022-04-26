import Tag from '../Tag/Tag'
import styles from './Card.module.css'
import { urlFor } from '../../lib/sanity'
import Image from 'next/image'
import { forwardRef } from 'react'

const Card = forwardRef(({ onClick, href, post }, ref) => {
  const { publishedAt, mainImage, title, username, authorImage, categories } =
    post
  return (
    <div
      className={styles.card__container}
      href={href}
      onClick={onClick}
      ref={ref}
    >
      <h2>{title}</h2>
      <p>Published on: {new Date(publishedAt).toDateString()} </p>

      <Image
        src={urlFor(mainImage).toString()}
        alt={title + ' image'}
        className={styles.main__image}
        layout="responsive"
        width={700}
        height={475}
        priority
      />

      <hr />

      <div className={styles.card__info}>
        <p>Posted by: {username}</p>
        <Image
          src={urlFor(authorImage).toString()}
          alt={username + ' avatar'}
          className="avatar"
          width={50}
          height={50}
        />
      </div>

      <div className="tag__container">
        {categories.map((category) => (
          <Tag key={category?.title + '-' + title} title={category?.title} />
        ))}
      </div>
    </div>
  )
})

Card.displayName = 'Card'

export default Card
