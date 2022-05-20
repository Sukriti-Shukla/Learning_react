import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/functionalComp";
import Welcome from "./components/classComp";
import Hello from "./components/jsx_createElement";
import Props from "./components/Props";
import State from "./components/State";
import SetState from "./components/SetState";
import Destructur from "./components/destructur";
import EventHandeling from "./components/EventHandeling";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";
import ConditionalRender from "./components/ConditionalRender";
import ListRender from "./components/ListRender";
import Stylesheet from "./components/Stylesheet";
import Inline from "./components/Inline";
import "./components/appStyle.css";
import styles from "./components/appStyle.module.css";
import Form from "./components/Form";
import LifecycleMount from "./components/LifecycleMount";
import FragmentDemo from "./components/FragmentDemo";
import Table from "./components/Table";
import PureComp from "./components/PureComp";
import ParentComp from "./components/ParentComp";
import RefsDemo from "./components/RefsDemo";
import PortalDemo from "./components/PortalDemo";
import ErrorHandling from "./components/ErrorHandling";
import ErrorBoundary from "./components/ErrorBoundary";
import HigherOrder from "./components/HigherOrder";
import HoverCounter from "./components/HoverCounter";
import RenderProp from "./components/RenderProp";
import ClickCounterTwo from "./components/ClickCounterTwo";
import { UserProvider } from "./components/userContext";
import ComponentC from "./components/ComponentC";

function App() {
  return (
    <div className="App">
      <h1 className="error">Error</h1>
      <h1 className={styles.success}>Success</h1>
      {/* <PureComp /> */}
      {/* <ParentComp /> */}

      <UserProvider value="Sukriti">
        <ComponentC />
      </UserProvider>

      <RenderProp
        render={(count, incrementCount) => (
          <ClickCounterTwo count={count} incrementCount={incrementCount} />
        )}
      />
      <RenderProp
        render={(count, incrementCount) => (
          <HoverCounter count={count} incrementCount={incrementCount} />
        )}
      />
      <HigherOrder />
      <ErrorBoundary>
        <ErrorHandling heroName="batman" />
        <ErrorHandling heroName="superman" />
        <ErrorHandling heroName="Joker" />
      </ErrorBoundary>
      <HoverCounter />
      <PortalDemo />
      <RefsDemo />
      <FragmentDemo />
      <Table />
      <LifecycleMount />
      <Form />
      <Inline />
      <Stylesheet primary="false" />
      <ListRender />
      <ConditionalRender />
      <ParentComponent />
      <Greet></Greet>
      <EventBind />
      <EventHandeling />
      <Props name="Diana" />
      <State />
      <Destructur name="diana" heroName="wonderwoman" />
      <Props name="bruce">
        <p>this is children props</p>
      </Props>
      <Welcome />
      <Hello />
      <SetState />
    </div>
  );
}

export default App;
