import React, { Component } from "react";
import { connect } from "react-redux";
//import { Route } from 'react-router-dom';
import styled from "styled-components";
import DataDetails from "../Components/DataDetails";
import ModalForm from './Components/Modals/Modal'
import DataTable from './Components/Tables/DataTable'
import { CSVLink } from "react-csv"
import 'bootstrap/dist/css/bootstrap.min.css';
import { fetchArticleDetails } from "../actions";

const StyledApp = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;

  aside {
    min-width: 35vh;
    display: flex;
    justify-content: flex-end;
  }
  main {
    flex: 1 0 350px;
    ${"" /* not responsive */} padding: 0 5rem;
  }
`;

class AppOther extends Component {
  state = {};
  componentDidMount() {
    this.props.fetchArticleDetails();
  }
  render() {
    const { places } = this.props.data;
   // var _dat = this.props.info;
	//console.log(_dat);
    console.log(places);
    return (
      <StyledApp>
       
        <main>
          {this.props.isLoadingData ? (
            "Loading . . ."
          ) : (
            <DataDetails
              places={places}
            />
			
          )}
		  
        </main>
		
		
      </StyledApp>
	  
    );
  }
}

const mapStateToProps = ({ data = {}, isLoadingData = false }) => ({
  data,
  isLoadingData
});
export default connect(
  mapStateToProps,
  {
    fetchArticleDetails
  }
)(AppOther);
