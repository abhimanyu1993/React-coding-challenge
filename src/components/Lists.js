import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';
import Dialogbox from './Popup';
import { editName, editAddress, addTeam } from '../redux/actions';


class Lists extends Component {

	constructor(props) {
	    super(props);
	    this.state = {
	      inputName: '',
	      inputStreetAdd: '',
	      inputAdd: '',
	      teamOne: '',
	      teamTwo: '',
	      teamThree: '',
	    };
	}

	handleNameInput (event) {
		this.setState({inputName: event.target.value});
	}
	
	handleStreetAdd (event) {
		this.setState({inputStreetAdd: event.target.value});
	}

	handleAdd (event) {
		this.setState({inputAdd: event.target.value});
	}
	
	handleInput1 (event) {
		this.setState({teamOne: event.target.value});
	}
	
	handleInput2 (event) {
		this.setState({teamTwo: event.target.value});
	}
	
	handleInput3 (event) {
		this.setState({teamThree: event.target.value});
	}
	
	saveTeams(){

		axios.post('http://localhost:8080/save-info', {
			value: [
				this.state.teamOne,
				this.state.teamTwo,
				this.state.teamThree,
			],
			key: [
				'team1',
				'team2',
				'team3',
			]
		})
		.then(function (response) {
			console.log(response);
		})
		.catch(function (error) {
			console.log(error);
		});
		
		this.setState({teamOne: ''});
		this.setState({teamTwo: ''});
		this.setState({teamThree: ''});
	}

	saveName(){
		this.props.callEditName(this.state.inputName);
		
		axios.post('http://localhost:8080/save-info', {
			value: this.state.inputName,
			key: 'name'
		})
		.then(function (response) {
			console.log(response);
		})
		.catch(function (error) {
			console.log(error);
		});
		
		this.setState({inputName: ''});
	}
	
	saveAddress(){
		let st_address = this.state.inputStreetAdd;
		let address = this.state.inputAdd;
		this.props.callEditAddress(st_address, address);

		axios.post('http://localhost:8080/save-info', {
			value: [this.state.inputStreetAdd, this.state.inputAdd],
			key: ['street_address', 'address'],
		})
		.then(function (response) {
			console.log(response);
		})
		.catch(function (error) {
			console.log(error);
		});
		
		this.setState({inputStreetAdd: ''});
		this.setState({inputAdd: ''});
	}


  render() {
    return (
    	<div className="wrapper">
			<div className="magazine__header">
				<div className="container">
					<div className="row">
						<div className="col-md-10">
					      	<div className="main__heading">
					        	<h2>Sports Magazine</h2>
					      	</div>
						</div>
					</div>
				</div>
			</div>
			<div className="magazine__lists">
				<div className="container">
					<div className="row">
						<div className="col-md-10">
					      	<div className="sub__heading">
					        	<h3>Sports Magazine Settings</h3>
					      	</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-10">

							<div className="list__item">
								<div className="row">
									<div className="col-md-4">
							        	<h4>Name</h4>
							        	<p>{this.props.name}</p>
									</div>
									<div className="col-md-8">
										<div style={{marginTop: '10px'}}>
											<Dialogbox name="Edit Name" function={() => this.saveName()}>
												<div>
													<label className="label">Name</label>
													<input type="text"
														value={this.state.inputName}
														className="form-control custom__inputs"
														onChange={ e => this.handleNameInput(e) }
													/>
												</div>
											</Dialogbox>
										</div>
									</div>
								</div>
							</div>

							<div className="list__item">
								<div className="row">
									<div className="col-md-4">
							        	<h4>Address</h4>
							        	<p>{this.props.street_address}</p>
							        	<p>{this.props.address}</p>
									</div>
									<div className="col-md-8">
										<div style={{marginTop: '10px'}}>
											<Dialogbox name="Edit Address" function={() => this.saveAddress()}>
												<div>
													<label className="label">Address</label>
													<input type="text"
														value={this.state.inputStreetAdd}
														className="form-control custom__inputs"
														onChange={ e => this.handleStreetAdd(e) }
													/>
												</div>
												<div>
													<label className="label"></label>
													<input type="text"
														value={this.state.inputAdd}
														className="form-control custom__inputs"
														onChange={ e => this.handleAdd(e) }
													/>
												</div>
											</Dialogbox>
										</div>
									</div>
								</div>
							</div>

							<div className="list__item">
								<div className="row">
									<div className="col-md-4">
							        	<h4>Favorite Teams</h4>
							        	<p>{this.props.team_one || 'None Added'}</p>
							        	<p>{this.props.team_two}</p>
							        	<p>{this.props.team_three}</p>
									</div>
									<div className="col-md-8">
										<div style={{marginTop: '10px'}}>
											<Dialogbox name="Add Teams" function={() => this.saveTeams()}>
												<div>
													<label className="label">Team 1</label>
													<input type="text"
														value={this.state.teamOne}
														className="form-control custom__inputs"
														onChange={ e => this.handleInput1(e) }

													/>
												</div>
												<div>
													<label className="label">Team 2</label>
													<input type="text" 
														value={this.state.teamTwo}
														onChange={ e => this.handleInput2(e) }
														className="form-control custom__inputs"/>
												</div>
												<div>
													<label className="label">Team 3</label>
													<input type="text"
														value={this.state.teamThree}
														onChange={ e => this.handleInput3(e) }
														className="form-control custom__inputs"/>
												</div>
											</Dialogbox>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
    	</div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
	return {
		name: state.name,
		street_address: state.street_address,
		address: state.address,
		team_one: state.team_one,
		team_two: state.team_two,
		team_three: state.team_three,
	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
		callEditName: editName,
		callEditAddress: editAddress,
		callAddTeam: addTeam,
	}, dispatch);
};

export default connect(mapStateToProps,mapDispatchToProps)(Lists);