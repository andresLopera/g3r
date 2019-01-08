import { combineReducers } from 'redux';
import { StructureEntity } from './core/structure/structure.entity';
import { structureReducer } from './core/structure/structure.reducer';
import { LinkDataEntity } from './core/linkData/linkedData.entity';
import { linkDataReducer } from './core/linkData/linkedData.reducer';

export interface State {
    structure: StructureEntity,
    linkData: LinkDataEntity
};

export const state = combineReducers<State>({
    structure : structureReducer,
    linkData : linkDataReducer
});
