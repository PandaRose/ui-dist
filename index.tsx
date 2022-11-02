import '@pandarose/core/load';
import '@pandarose/blueprint/lib/autoload';
import '@pandarose/dom/load';

import './index.scss';

(window as any).Foundation.App(
    require('react-dom'),
);
