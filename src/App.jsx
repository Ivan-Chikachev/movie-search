import React from 'react';
// import './App.css';
import 'antd/dist/antd.css';
import { Layout, Tabs } from 'antd';

import MoviesContainer from './components/Movies/MoviesContainer';
import GuestSessionMoviesContainer from './components/GuestSessionMovies/GuestSessionMoviesContainer';

const { TabPane } = Tabs;
const { Content } = Layout;

const App = () => (
    <Layout>
        <Content>
            <Tabs defaultActiveKey="1" centered>
                <TabPane tab="Search" key="1">
                    <MoviesContainer />
                </TabPane>
                <TabPane tab="Rated" key="2">
                    <GuestSessionMoviesContainer />
                </TabPane>
            </Tabs>
        </Content>
    </Layout>
);

export default App;
