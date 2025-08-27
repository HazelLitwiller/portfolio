import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import CardGrid from "../CardGrid/CardGrid";
import './MainTabs.scss';

function MainTabs() {
  return (
    <Tabs
      defaultActiveKey="compsci"
      id="main-tabs"
      className="mb-3"
      style={{ width: "fit-content", marginLeft: "20px" }}
    >
      <Tab eventKey="compsci" title="Comp Sci">
        <CardGrid type="compsci" title="Computer Science"/>
      </Tab>
      <Tab eventKey="gamedev" title="Game Dev">
        <CardGrid type="gamedev" title="Game Development"/>
      </Tab>
      <Tab eventKey="music" title="Music">
        <CardGrid type="music" title="Music" />
      </Tab>
    </Tabs>
  );
}

export default MainTabs;