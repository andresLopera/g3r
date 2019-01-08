import { connect } from 'react-redux';
import { State } from '../../state';
import RendererComponent from './renderer.component';
import { fetchStructureByIdAction } from '../structure/structure.actions';

const mapStateToProps = (state: State) => ({
  structure: state.structure
});

const mapDispatchToProps = (dispatch: any) => ({
  fetchStructureById: (structureId: string) => dispatch(fetchStructureByIdAction(structureId)),
});

export const RendererContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(RendererComponent);
