import {makeStyles} from "@material-ui/core";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Navbar/>
      <div>
        <AboutMe title="About Me" id="about" dark={false }/>
        <Portfolio title="Portfolio" id="portfolio" dark={true }/>
        <Contact title="Get in touch" id="contact" dark={false }/>
        <Resume title="Resume" id="resume" dark={true } />
      </div>
      <Footer />
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {

  }
}))

export default App;
