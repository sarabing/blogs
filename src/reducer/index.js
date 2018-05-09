import { combineReducers } from 'redux'
import {countData} from './count/reducer';

const rootReducer = combineReducers({
    countData
});
module.exports = {
    rootReducer
}