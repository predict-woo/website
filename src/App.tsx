import Header from "components/Header";
import Home from "pages/Home";
import Welcome from "pages/Welcome";
import { Route } from "wouter";

function App() {
  return (
    <div>
      <Route path="/" component={Welcome} />
      <Header routes={[{ name: "Home", path: "/home" }]} />
      <div
        css={{
          position: "fixed",
          top: "60px",
          left: 0,
          right: 0,
          bottom: 0,
          overflow: "scroll",
          padding: "10px",
        }}
      >
        <Route path="/home" component={Home} />
      </div>
    </div>
  );
}

export default App;
