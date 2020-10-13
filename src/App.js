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
        <Sidebar />
        <Main />
      </Content>
      <Footer />
    </>
  );
}

export default App;
