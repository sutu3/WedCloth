import { Grid } from "@mui/material";
import "./App.css";
import Nav from "./component/Nav/App.jsx";
function App() {
  return (
    // <div className="bg-blue-400 w-full h-full flex flex-row">
    //   <div className=" h-full w-[350px] bg-blue-500">
    //     <Nav />
    //   </div>
    //   <div className="flex-1 h-full bg-blue-700">
    //     <h1 className="text-white text-center p-6">This is the Dark Theme</h1>
    //   </div>
    // </div>
    <Grid container className="h-screen ">
      <Grid item xs={12} md={2} className="border-r-2 border-black">
        <Nav />
      </Grid>
      <Grid item xs={12} md={9}>
        <h1 className="text-center text-3xl font-bold text-white">
          This is the Dark Theme
        </h1>
      </Grid>
    </Grid>
  );
}

export default App;
