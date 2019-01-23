import React from 'react';
import { DefaultProps } from '../../common/default.props';
import { DataLinkService } from '../../core/dataLink/dataLink.service';

export class InputComponent extends React.Component<DefaultProps,{}> {

  public dataLinkService = DataLinkService.getInstance()

  handleChange = (e: any) => {
    e.preventDefault();
    this.dataLinkService.changeValueOfChannel({id: 'id-1', name: 'name_person', value: e.target.value })
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.handleChange}></input>
      </div>
    );
  }
}

export default InputComponent;