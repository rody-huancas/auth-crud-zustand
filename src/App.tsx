import { Toaster } from "sonner";
import { AppRouter } from "./routes/AppRouter";

const App = () => {
  return (
    <>
      <AppRouter />
      {/* toast */}
      <Toaster position="top-right" richColors closeButton />
    </>
  );
};

export default App;
