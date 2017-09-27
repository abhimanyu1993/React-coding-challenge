import { 
	EDIT_NAME,
	EDIT_ADDRESS,
	ADD_TEAM,
} from './actions'

const initialState = {
  name: 'Qurban Ali',
  street_address: '123 Bowl Lane',
  address: 'New York, NY 10021',
  team_one: '1 NY Knicks',
  team_two: '2 Brooklyn',
  team_three: '3 NY Giants',
}

const reducers = (state = initialState, action) => {
	switch (action.type){

		case EDIT_NAME:
			return {...state, name: action.name}

		case EDIT_ADDRESS:
			return {
				...state,
				street_address: action.street_address,
				address: action.address
			}

		case ADD_TEAM:
			return {
				...state,
				team_one: action.team_one,
				team_two: action.team_two,
				team_three: action.team_three
			}

		default:
  			return state;
	}
}

export default reducers;