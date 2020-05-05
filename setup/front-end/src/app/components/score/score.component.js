import { parseUrl} from '../../utils/utils';
import {Component} from '../../utils/component';
import template from './score.component.html';
import './score.component.scss';

    export class ScoreComponent  extends Component {
        constructor()
        {
        super('score');
        var params = parseUrl();
        this.name = params.name;
        this.size = parseInt(params.size);
        this.time = parseInt(params.time);


        }

        async init() {
            document.getElementById('name').innerText = this.name;
            document.getElementById('size').innerText = this.size;
            document.getElementById('time').innerText = this.time;
            

        }

        getTemplate() { return template; }
    
    }

    


