import { AuthProvider } from "./context/Auth/AuthProvider";
import { RoutesAplicattion } from "./routes/Routes";
import { GlobalStyles } from "./styles/Global";

function App() {
  return (
    <>
      <AuthProvider>
        <RoutesAplicattion />
        <GlobalStyles />
      </AuthProvider>
    </>
  );
}

export default App;
