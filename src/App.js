import React from 'react';
import Header from "./layout/Header"
import Footer from "./layout/Footer"
import Content from "./layout/Content/Content"
import Sidebar from "./layout/Content/Sidebar"
import Main from "./layout/Content/Main"
function App() {
  return (
    <>
      <Header />

      <Content>
        <div className="row my-3">
          <div className="col"><Main /></div>
          <div className="col col-md-auto"><Sidebar /></div>
        </div>
        
      </Content>
      <Footer />
    </>
  );
}

export default App;
