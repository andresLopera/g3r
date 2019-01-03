import { connect } from 'react-redux';
import { State } from '../../reducers';
import RendererComponent from './rendererComponent';
import { fetchStructuresAction } from './renderer.actions';

const mapStateToProps = (state: State) => ({
  structure: state.structure,
});

const mapDispatchToProps = (dispatch: any) => ({
  fetchStructures: () => dispatch(fetchStructuresAction()),
});

export const RendererContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(RendererComponent);
