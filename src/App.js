import React, { Component } from 'react';
import Layout from './component/Layout/Layout';
import BurgerBuilder from './conatiner/BurgerBuilder/BurgerBuilder';


class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <p>It is workiing perfectly fine</p>
          <BurgerBuilder />
        </Layout>
      </div>
    );
  };

}

export default App;
