import './App.css';
import {BrowserRouter ,Routes,Route,Navigate} from 'react-router-dom';
import Login from './Login/Login';
import Home from './Admin/Home/Home';
import Header from './Components/Header/Header';
import Navigation from './Components/Navigation/Navigation';
import Members from './Admin/Members/Members';
import Ledger from './Admin/Ledger/Ledger';
import Loan from './Admin/Loan/Loan';
import FixedDeposit from './Admin/FixedDeposit/FixedDeposit';
import Demand from './Admin/Demand/Demand';

const isAuth=false;

function App() {
  return (
    <>
    <BrowserRouter>
    <Header />
    {false&&<Navigation/>}
    <Routes>
    
    {/* <Route exact path='/' element={<GuestRoute>
       <Home/>
    </GuestRoute>} /> */}
   
    <Route exact path='/' element={<Login/>} /> 

    <Route exact path='/home' element={<ProtectedRoute>
       <Home/>
    </ProtectedRoute>} />
    <Route exact path='/member' element={<ProtectedRoute>
       <Members></Members>
    </ProtectedRoute>} />
    <Route exact path='/ledger' element={<ProtectedRoute>
       <Ledger></Ledger>
    </ProtectedRoute>} />
    <Route exact path='/loan' element={<ProtectedRoute>
       <Loan/>
    </ProtectedRoute>} />
    <Route exact path='/fixed-deposit' element={<ProtectedRoute>
       <FixedDeposit></FixedDeposit>
    </ProtectedRoute>} />
    <Route exact path='/demand' element={<ProtectedRoute>
       <Demand/>
    </ProtectedRoute>} />

    </Routes>
    </BrowserRouter>
    </>
  );
}



const ProtectedRoute=(Props)=>{
 
  return (
    false?<Navigate to="/"/>:Props.children
  )
}


export default App;