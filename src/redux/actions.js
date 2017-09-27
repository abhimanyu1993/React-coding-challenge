// import {dispatch} from 'redux';

export const EDIT_NAME = 'EDIT_NAME'
export const EDIT_ADDRESS = 'EDIT_ADDRESS'
export const ADD_TEAM = 'ADD_TEAM'

export function editName(name) {
	return{
		type: EDIT_NAME,
		name,
	}
}

export function editAddress(street_address,address) {
	return{
		type: EDIT_ADDRESS,
		street_address,
		address,
	}
}

export function addTeam(team1, team2, team3) {
	return{
		type: EDIT_ADDRESS,
		team1,
		team2,
		team3,
	}
}


// export const callEditName = name => dispatch(editName(name))