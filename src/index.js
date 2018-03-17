import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Main from './components/main';
import RealtimeSearch from './components/realtime-search';
import MultiSearch from './components/multi-search';

function Project() {
    return (
        <Router>
            <div className="Project">
                <Route exact={true} path="/" component={Main} />
                <Route path="/realtime-search" component={RealtimeSearch} />
                <Route path="/multi-search" component={MultiSearch} />
            </div>
        </Router>
    );
}

ReactDOM.render(<Project />, document.getElementById('root'));
registerServiceWorker();
