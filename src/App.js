import './App.scss'
import GlobalStyle from "./globalStyles";
import { ThemeProvider } from 'styled-components';
import { lightTheme } from "./components/Themes";
import { Route, Switch } from "react-router-dom";

// components
import Main from './components/Main';
import Photography from './components/Photography'
import Profile from './components/Profile';
import Architecture from './components/Architecture';
import ModernRestrooms from './components/projects/modernrestrooms';
import ChildsRoom from './components/projects/childsroom';
import CollectiveHabitat from './components/projects/collectivehabitat';
import LoftLiving from './components/projects/loftliving';
import CommunityCenter from './components/projects/communitycenter';
import SilvanElve from './components/projects/silvanelve';
import TheGrot from './components/projects/thegrot';
import LearningCommons from './components/projects/learningcommons';
import TennisClub from './components/projects/tennisclub';




function App() {
  return <>
    <GlobalStyle />
    <ThemeProvider theme={lightTheme}>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/photography" component={Photography} />
        <Route exact path="/architecture" component={Architecture} />
        <Route exact path="/architecture/darkbath" component={ModernRestrooms} />
        <Route exact path="/architecture/childsroom" component={ChildsRoom} />
        <Route exact path="/architecture/collectivehabitat" component={CollectiveHabitat} />
        <Route exact path="/architecture/loftliving" component={LoftLiving} />
        <Route exact path="/architecture/communitycenter" component={CommunityCenter} />
        <Route exact path="/architecture/silvanelve" component={SilvanElve} />
        <Route exact path="/architecture/thegrot" component={TheGrot} />
        <Route exact path="/architecture/learningcommon" component={LearningCommons} />
        <Route exact path="/architecture/tennisclub" component={TennisClub} />
        <Route exact path="/profile" component={Profile} />
      </Switch>
    </ThemeProvider>
    </>
    
}

export default App

