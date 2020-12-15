import { Link } from 'react-router-dom';

function VolumeContainer({ volume }) {
  return (
    <div>      
       <Link to="/book-store">Go back</Link>
      <h1>{volume.volumeInfo.title}</h1>
      <h2>{volume.volumeInfo.authors[0]}</h2>
    </div>
  )
}

export default VolumeContainer
