import React, { Component } from 'react';

// Component Imports
import MobileContainer from './MobileContainer';
import CategoryCard from '../../cards/CategoryCard';

// Redux Imports
import { connect } from 'react-redux';
import { getBills } from '../../../actions/bills';


class MobileCategories extends Component {

  componentDidMount() {
    this.props.getBills();
  }

  render() {
    return(
      <MobileContainer>
        <CategoryCard 
          bills={this.props.bills}
        />
      </MobileContainer>
    );
  }
}

const mapStateToProps = state => ({
  bills: state.bills.bills,
})

export default connect(mapStateToProps, { getBills })(MobileCategories);