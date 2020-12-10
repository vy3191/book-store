

const Card = ({imgAlt, imgSrc, title}) => {
  return (
    <article className="components-card">
      <img src={imgSrc} alt={imgAlt} />
      <p>{title}</p>
    </article>
  )
}

Card.defaultProps ={
  imgAlt: ""
}

Card.propTypes = {
  imgAlt: PropTypes.string,
  imgSrc: PropTypes.string,
  title: PropTypes.string
}

export default Card
