import React, { Component } from 'react';

// Component Imports
import MobileContainer from './MobileContainer';
import TotalCard from '../../cards/TotalCard';
import NextBillCard from '../../cards/NextBillCard';

// Redux Imports
import { connect } from 'react-redux';
import { getBills } from '../../../actions/bills';

class MobileHome extends Component {
  
  componentDidMount() {
    this.props.getBills();
  }

  render() {
    return(
      <MobileContainer>
        <TotalCard />
        <NextBillCard />
      </MobileContainer>
    );
  }
}

const mapStateToProps = state => ({
  bills: state.bills.bills,
})

export default connect(mapStateToProps, { getBills })(MobileHome);