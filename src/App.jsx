import React from 'react';
// import './App.css';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import Movies from './components/Movies';

const { Content } = Layout;

function App() {
  return (
      <Layout>
          <Content>
              <Movies />
          </Content>
      </Layout>
  );
}

export default App;
