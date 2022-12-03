import './App.css';
import Problem from './bebin/R055_ReactstrapTab';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div>
      <h1>react 시작</h1>
      <p>html 적용</p>
      {/* <R008_LifecycleEx prop_value='FromApp.js' /> */}
      {/* <Problem 
        String="react"
        Number={200}
        Boolean={1==1}
        Array={[0, 1, 8]}
        ObjectJson={{react: "리액트", twohundred: "200"}}
        Function={console.log("FunctionProps: function!")}
      /> */}
      <Problem />
    </div>
  );
}

export default App;