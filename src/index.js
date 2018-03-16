import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Main from './components/main';
import RealtimeSearch from './components/realtime-search';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

function Project() {
    return (
        <Router>
            <div className="Project">
                <Route exact={true} path="/" component={Main} />
                <Route path="/realtime-search" component={RealtimeSearch} />
            </div>
        </Router>
    );
}

ReactDOM.render(<Project />, document.getElementById('root'));
registerServiceWorker();
