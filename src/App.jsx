import { ToastContainer } from "react-toastify"
import { RouterMain } from "./routes/RouterMain"
import { GlobalReset } from "./styles/GlobalReset"
import { GlobalStyles } from "./styles/GlobalStyle"
import 'react-toastify/dist/ReactToastify.css';
import { UserProvider } from "./providers/UserContext";
import { TechProvider } from "./providers/TechContext";


function App() {


  return (
    <UserProvider>
      <div className='App'>
        <GlobalReset />
        <GlobalStyles />
        <TechProvider>
          <RouterMain />
        </TechProvider>
        <ToastContainer
          position='top-right'
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme='dark' />
      </div>
    </UserProvider>
  )
}

export default App
