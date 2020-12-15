import { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getVolume } from '../../redux/actions';
import VolumeContainer from './VolumeContainer';

const VolumeHandler = (props) => {
  const { fetching, volume, fetchVolume, match: {params: { id } }} = props;

  useEffect(() => {
    fetchVolume(id)
  }, [id])
  return (
    <div>
    { !fetching && volume.volumeInfo && <VolumeContainer volume={ volume } /> || <p>Loading the book...</p>}
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchVolume: getVolume }, dispatch);
}
const mapStateToProps = (state) => {
   const { bookStore: { fetching, volume}} = state;
   return {
     fetching,
     volume
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(VolumeHandler)
