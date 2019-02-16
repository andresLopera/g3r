import React from 'react';
import { DataLinkService } from '../../core/dataLink/dataLink.service';
import { DefaultComponentRenderer } from '../../model/defaultComponentRenderer';

export class FormComponent extends DefaultComponentRenderer {

  public dataLinkService = DataLinkService.getInstance()
  handleSubmit = (e: any) => {
    e.preventDefault();
    alert('on submit')
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      {
        this.props.block.children.map((blockElement: any) =>
            this.rendererComponent(blockElement)
        )
        }
      </form>
    );

  }
}

export default FormComponent;