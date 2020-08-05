import { type as findResultsType } from '../actions/resultsAction';

const initialState = {
    resultados: []
}

export default function(state = initialState, { type, payload }) {
    switch (type) {
        case findResultsType:
            return {
                ...state,
                resultados: payload
            }    

        default: return state;
    }
}