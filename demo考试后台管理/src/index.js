import dva from 'dva';
import './index.css';
import 'antd/dist/antd.css';
// import RouterViews from "./router-luyou/router";

// 1. Initialize
export const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/example').default);

// 4. Router
app.router(require('./router-luyou/router').default);
// 5. Start
app.start('#root');


