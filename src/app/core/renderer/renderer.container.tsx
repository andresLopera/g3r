import { connect } from 'react-redux';
import { State } from '../../state';
import RendererComponent from './renderer.component';
import { fetchStructureByIdAction } from '../structure/structure.actions';
import { fetchDataLinkByIdAction } from '../dataLink/dataLink.actions';

const mapStateToProps = (state: State) => ({
  structure: state.structure,
  dataLink: state.dataLink
});

const mapDispatchToProps = (dispatch: any) => ({
  fetchStructureById: (structureId: string) => dispatch(fetchStructureByIdAction(structureId)),
  fetchDataLinkById: (dataLinkId: string) => dispatch(fetchDataLinkByIdAction(dataLinkId))
});


export const RendererContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(RendererComponent);
