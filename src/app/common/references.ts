
import { BlockComponent } from '../model/blockComponent';
import { HeadComponent } from '../components/head';
import { TextComponent } from '../components/text/text.component';
import PlaceholderComponent from '../components/placeholder';
import { DefaultPageComponent } from '../pages/defaultPage/defaultPage.component';
import { InputComponent } from '../components/input/input.component';
import { ButtonComponent } from '../components/button/button.component';
import { ListComponent } from '../components/list/list.component';

export class References {

    private components: BlockComponent[];
    private pagesComponents: BlockComponent[];
    private static _instance: References;


    private constructor() {
        this.components = [];
        this.pagesComponents = [];
        this.setComponents();
        this.setPagesComponents();
    }

    private setComponents() {
        let blockHead: BlockComponent = new BlockComponent('headId', HeadComponent)
        let blockText: BlockComponent = new BlockComponent('textId', TextComponent)
        let blockInput: BlockComponent = new BlockComponent('inputId', InputComponent)
        let blockButton: BlockComponent = new BlockComponent('buttonId', ButtonComponent)
        let blockList: BlockComponent = new BlockComponent('listId', ListComponent);

        this.components.push(blockHead)
        this.components.push(blockText)
        this.components.push(blockInput)
        this.components.push(blockButton)
        this.components.push(blockList)
    }

    private setPagesComponents() {
        let defaultPage: BlockComponent = new BlockComponent('defaultPageId', DefaultPageComponent)

        this.pagesComponents.push(defaultPage);

    }

    static getInstance() {
        if (!References._instance) {
            References._instance = new References();
            // ... any one time initialization goes here ...
        }
        return References._instance;
    }

    getComponentByTypeId(_typeId: string) {
        let _COMPONENT = PlaceholderComponent;
        this.components.forEach(block => {
            if (block.typeId == _typeId) {
              _COMPONENT = block.component
            };
          })
          return _COMPONENT;
    }

    getPageByTypeId(_typeId: string) {
        let _page = DefaultPageComponent;
        this.pagesComponents.forEach(block => {
            if (block.typeId == _typeId) {
              _page = block.component
            };
          })
          return _page;
    }

}