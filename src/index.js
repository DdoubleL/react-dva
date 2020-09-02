import dva from 'dva';
import './index.css';

// 1. Initialize

 const app = dva({
   initialState: {
     products: [
       { name: 'dva', id: 1 },
       { name: 'antd', id: 2 },
     ],
   },
});
const app2 = dva({
  initialState: {
    users: [
      { name: 'dva', id: 1 },
      { name: 'antd', id: 2 },
    ],
  },
});
// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example').default);

// 3. Model
app.model(require('./models/products').default);
app2.model(require('./models/users').default);
// 4. Router
app.router(require('./router').default);
app2.router(require('./router').default);

// 5. Start
app.start('#root');
app2.start('#root');
