import React from 'react';
// import './App.css';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import Movies from './components/Movies';

function App() {
  const { Content } = Layout;

  return (
      <Layout className="container">
          <Content>
              <Movies />
          </Content>
      </Layout>
  );
}

export default App;
