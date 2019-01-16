import { combineReducers } from 'redux';
import { StructureEntity } from './core/structure/structure.entity';
import { structureReducer } from './core/structure/structure.reducer';
import { DataLinkEntity } from './core/dataLink/dataLink.entity';
import { DataLinkReducer } from './core/dataLink/dataLink.reducer';

export interface State {
    structure: StructureEntity,
    dataLink: DataLinkEntity
};

export const state = combineReducers<State>({
    structure : structureReducer,
    dataLink : DataLinkReducer
});
