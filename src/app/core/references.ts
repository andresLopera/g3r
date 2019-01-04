
import { BlockComponent } from '../model/blockComponent';
import { HeadComponent } from '../components/head';
import { TextComponent } from '../components/text';
import PlaceholderComponent from '../components/placeholder';
import { DefaultPageComponent } from '../pages/defaultPage.component';

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
        let blockHead: BlockComponent = new BlockComponent('headId', 'head', HeadComponent)
        let blockText: BlockComponent = new BlockComponent('textId', 'text', TextComponent)

        this.components.push(blockHead)
        this.components.push(blockText)
    }

    private setPagesComponents() {
        let defaultPage: BlockComponent = new BlockComponent('defaultPageId', 'defaultPage', DefaultPageComponent)

        this.pagesComponents.push(defaultPage);

    }

    static getInstance() {
        if (!References._instance) {
            References._instance = new References();
            // ... any one time initialization goes here ...
        }
        return References._instance;
    }

    getComponentByName(_componentName: string) {
        let _COMPONENT = PlaceholderComponent;
        this.components.forEach(block => {
            if (block.name == _componentName) {
              _COMPONENT = block.component
            };
          })
          return _COMPONENT;
    }

    getPageById(_pageId: string) {
        let _page = DefaultPageComponent;
        this.pagesComponents.forEach(block => {
            if (block.id == _pageId) {
              _page = block.component
            };
          })
          return _page;
    }

}