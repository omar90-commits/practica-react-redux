import { type as detailsType } from '../actions/detailsAction';

const stateInitial = {
	elementoInfo: {}
}

export default function(state = stateInitial, {type, payload}) {
	switch (type) {
		case detailsType:
			return {
				...state,
				elementoInfo: payload
			}

		default: return state; 
	}
}