// import { Map} from 'immutable';
// const defaultState = Map({
//     num:0
// });

export const countData = (state=0,action) =>{
    switch (action.type){
        case 'ADD_COUNT':
            return state+action.data;
            // return state.set('num',action.num);
        default:
            return state;
    }
}