import { combineReducers } from 'redux';
import { StructureEntity } from './model/structure.entity';
import { structureReducer } from './reducers/structure.reducer';

export interface State {
    structure: StructureEntity
};

export const state = combineReducers<State>({
    structure : structureReducer
});
