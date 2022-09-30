import Home from "./routes/home/home.component";
import { Route ,Routes } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import SignIn from "./routes/sign-in/signin.component";
const Shop=()=>{
  return (<h1>Shop</h1>)
}

const App =()=>{

  
  return(
    <Routes>
      <Route path="/" element={<Navigation></Navigation>}>
        <Route index element={<Home></Home>} />
          <Route path="shop" element={<Shop></Shop>} />
          <Route path="signin" element={<SignIn></SignIn>}></Route>
      </Route>
    </Routes>
   
  )
  
}

export default App;