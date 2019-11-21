import React from 'react'
import ButtonComponent from '../button/buttonComponent';
import { HeaderComponent } from '../header/headerComponent';

export default class MainComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            showHeader: false
        }
    }

    toggleHeader = () => {
        this.setState ({ showHeader: !this.state.showHeader});
    }

    render (){
        if (this.state.showHeader) {
            return null;
        }
        return(
            <ButtonComponent methodToRun={} name="show/hide"
            this.state.showHeader?<HeaderComponent title="Header"><</HeaderComponent>

        )
    }

}