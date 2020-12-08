import { connect } from 'react-redux';
import DashBoardContainer from './DashBoardContainer';

const DashBoardHandler = ({data}) => {
  return (
    <DashBoardContainer data={data} />
  )
}

DashBoardHandler.propTypes = {
  data: PropTypes.string
}

const mapStateToProps = (state) => {
   const { testData } = state;
   return {
     data: testData
   }
}

export default connect(mapStateToProps)(DashBoardHandler);
