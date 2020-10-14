import React from 'react';
import Header from "./layout/Header"
import Footer from "./layout/Footer"
import Content from "./layout/Content/Content"
import Sidebar from "./layout/Content/Sidebar"
import Main from "./layout/Content/Main"
import { getDemoData } from './dataProvider'
import { PurrContextProvider } from './Context/PurrContext'

export const DataContext = React.createContext();
DataContext.displayName = "DataContext";



class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      fetchedData: [],
    }
  }

  async fetchData () {
    const data = await getDemoData();
    return data
  }

  async componentDidMount() {
    // The only way to deal with fetch() so far
    this.setState( { fetchedData: await this.fetchData() } )
  }

  getPurrsFromLs() {
    let value = parseInt(localStorage.getItem('Purrs'))
    if (isNaN(value))
      value = 0

    return value
  }

  render() {
    return (
      <>
        {/* init props (optional) */}
        <PurrContextProvider value={{ username: "John", purrDeposit: this.getPurrsFromLs() }}>
          <Header />
          <Content>
            <DataContext.Provider value={ this.state.fetchedData }>
              <div className="row my-3">
                <div className="col"><Main /></div>
                <div className="col-12 col-lg-auto"><Sidebar /></div>
              </div>
            </DataContext.Provider>
          </Content>
          <Footer />
        </PurrContextProvider>
      </>
    );
  }
}

export default App;
