import React from 'react';
import Comp9UseMemo from "./Components/Comp9UseMemo";
import Comp10UseCallback from './Components/Comp10UseCallback';
import Com12CustomHook from './Components/Com12CustomHook';
import Comp13CustomHook from './Components/Comp13CustomHook';
import Comp14CustomHook from './Components/Com14CustomHook'

const App = () => {
  return (
    <div>
     <Comp9UseMemo/>
     <hr/>
     <Comp10UseCallback/>
     <hr/>
     <Com12CustomHook/>
     <Comp13CustomHook/>
     <hr/>
<Comp14CustomHook/>
    </div>
  )
}

export default App
