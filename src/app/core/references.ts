
import { BlockComponent } from '../model/blockComponent';
import { HeadComponent } from '../components/head';
import { TextComponent } from '../components/text';
import PlaceholderComponent from '../components/placeholder';

export class References {

    private components: BlockComponent[];
    private static _instance: References;


    private constructor() {
        this.components = [];
        let blockHead: BlockComponent = new BlockComponent('head', HeadComponent)
        let blockText: BlockComponent = new BlockComponent('text', TextComponent)

        this.components.push(blockHead)
        this.components.push(blockText)
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

}