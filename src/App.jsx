import { ToastContainer } from "react-toastify"
import { RouterMain } from "./routes/RouterMain"
import { GlobalReset } from "./styles/GlobalReset"
import { GlobalStyles } from "./styles/GlobalStyle"
import 'react-toastify/dist/ReactToastify.css';

function App() {


  return (
    <>
      <GlobalReset />
      <GlobalStyles />
      <RouterMain/>
      <ToastContainer 
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"/>
    </>
  )
}

export default App
