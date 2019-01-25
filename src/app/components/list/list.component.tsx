import React from 'react';
import { DefaultProps } from '../../common/default.props';
import { DataLinkService } from '../../core/dataLink/dataLink.service';

export class ListComponent extends React.Component<DefaultProps,{}> {

  public dataLinkService = DataLinkService.getInstance()
  state = {
      data: ['andres', 'felipe']
  }

  constructor(props: DefaultProps) {
      super(props)
      this.state.data = props.channel.value
  }


  render() {
      if (this.props.channel.id == '-1') {
          return (null);
      } else {
        return (
            <ul>
              {
               this.props.channel.value.map((item: any) =>
                  <li key={item.id}>{ item.value} </li>
                )
              }
            </ul>
          );
      }
  }
}

export default ListComponent;