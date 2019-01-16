import { connect } from 'react-redux';
import { State } from '../../state';
import TextComponent from './text.component';


const mapStateToProps = (state: State) => ({
  dataLink: state.dataLink
});

const mapDispatchToProps = (dispatch: any) => ({
});


export const TextContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TextComponent);
