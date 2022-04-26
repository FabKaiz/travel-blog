import styles from './Tag.module.css'

const Tag = ({ title }) => {
  const getColor = () => {
    let color
    switch (title.toLowerCase()) {
      case 'travel':
        color = 'rgb(210, 138, 138)'
        break
      case 'food':
        color = 'rgb(169, 218, 138)'
        break
      case 'all year':
        color = 'rgb(138, 173, 138)'
        break
      case 'summer':
        color = 'rgb(129, 138, 218)'
        break
      default:
        color = 'rgb(78, 174, 201)'
        break
    }
    return color
  }

  return (
    <div style={{ backgroundColor: getColor(title) }} className={styles.tag}>
      {title}
    </div>
  )
}

export default Tag
