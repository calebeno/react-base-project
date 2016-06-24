'use strict';

import React from 'react';
import Counter from '../counter/counter.jsx';

class Hello extends React.Component {
    render() {
        return (
            <div className="hello">
                Hello World!
                <Counter />
            </div>
        );
    }
}

export default Hello;
