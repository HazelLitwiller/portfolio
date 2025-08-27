import "./App.scss";
import MainTabs from "./components/MainTabs/MainTabs";

function App() {
  return (
    <>
      <h1
        style={{
          fontFamily: "monospace",
          fontSize: "50px",
          backgroundImage: "linear-gradient(#f3969a,#78c2ad)",
          color: "transparent",
          backgroundClip: "text",
          margin: "20px"
        }}
      >
        Hazel.dev()
      </h1>
      <MainTabs />
    </>
  );
}

export default App;
