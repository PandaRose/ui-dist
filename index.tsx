import '@pandarose/core/load';
import '@pandarose/blueprint/load';
import '@pandarose/dom/load';
import '@pandarose/monaco/load';

import './index.scss';

(window as any).Foundation.App(
    require('react-dom'),
);
