
import './App.css';
import { EffectCleanUp } from './bases/02-useEffect/EffectCleanUp';
import { Counter } from './bases/hooks/Counter';
import { Form } from './bases/hooks/Form';
import { MultipleCounter } from './bases/hooks/MultipleCounter';
import { MultipleInputForm } from './bases/hooks/MultipleInputForm';
import { ReactBootcamp } from './componets/ReactBootcamp';
import { Calis } from './componets/calis';
import { PostPage } from './page/PostPage';


function App() {
  return (
    <div className="App">
      
        {/* <Calis title="amonosssssssssssss"/>   */}

        {/* <Counter start={5} /> */}

        {/* <MultipleCounter /> */}

        {/* <Form/> */}

        {/* <MultipleInputForm/> */}
    
        {/* <EffectCleanUp /> */}

        {/* <ReactBootcamp/> */}

        <PostPage />

    </div>
  );
}

export default App;
