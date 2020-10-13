import React from "react";
import Toolbar from "./components/Toolbar/Toolbar";
import SlideDrawer from "./components/SlideDrawer/SlideDrawer";
import Backdrop from "./components/Backdrop/Backdrop";
import Dashboard from "./components/Dashboard/Dashboard";
import Loading from "./components/Loading/Loading";
import "./App.css";
class App extends React.Component {
  state = {
    sideDrawerOpem: false,
    loading: true,
  };

  drawerToggleClickHadle = () => {
    this.setState((prevState) => {
      return { sideDrawerOpem: !prevState.sideDrawerOpem };
    });
  };

  backdropClickHandler = () => {
    this.setState({
      sideDrawerOpem: false,
    });
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loading: false,
      });
    }, 2000);
  }

  render() {
    if (this.state.loading === true) return <Loading />;

    return (
      <div style={{ height: "100%" }}>
        <Toolbar drawerClickHadler={this.drawerToggleClickHadle} />
        <main style={{ marginTop: "64px" }}>
          <Dashboard />
        </main>
      </div>
    );
  }
}

export default App;
