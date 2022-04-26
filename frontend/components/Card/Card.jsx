import Tag from '../Tag/Tag'
import styles from './Card.module.css'
import { urlFor } from '../../lib/sanity'
import Image from 'next/image';

const Card = ({ post }) => {
  return (
    <div className={styles.card__container}>
      <h2>{post.title}</h2>
      <p>Published on: {new Date(post.publishedAt).toDateString()} </p>

      <Image
        src={urlFor(post.mainImage).toString()}
        alt={post.title + " image"}
        className={styles.main__image}
        layout="responsive"
        width={700}
        height={475}
      />

      <hr />

      <div className={styles.card__info}>
        <p>Posted by: {post.username}</p>
        <Image
          src={urlFor(post.authorImage).toString()}
          alt={post.username + " avatar"}
          className={styles.avatar}
          width={50}
          height={50}

        />
      </div>

      <div className={styles.tag__container}>
        {post.categories.map((category) => (
            <Tag key={category?.title + '-' + post.title} title={category?.title} />
        ))}
      </div>
      
    </div>
  );
};

export default Card;
