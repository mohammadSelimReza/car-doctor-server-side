import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes";

function App() {
  return (
    <div data-theme="cupcake">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
