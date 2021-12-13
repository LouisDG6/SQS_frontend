import logo from './logo.svg';
import './App.css';
// Import Our Components
import AllBoroughs from "./pages/AllBoroughs"
import SingleSpace from "./pages/SingleSpace";
import SingleBorough from "./pages/SingleBorough"
import Header from './components/Header'
import Footer from './components/Footer';
import Form from "./pages/Form";
// Import Hooks from React
import {useState, useEffect} from "react"
// Import Router 6 Component (Route -> Route, Switch -> Routes)
import { Route, Routes, Link, useNavigate } from "react-router-dom";

/////////////////////////
// Style Object
/////////////////////////
const h1 = {
  textAlign: "center",
  margin: "10px",
};

const button = {
  backgroundColor: "navy",
  display: "block",
  margin: "auto"
}

function App() {

  ///////////////////////////
  // State and Other Variables
  ///////////////////////////

  const navigate = useNavigate()

  const url = "https://lgsqs.herokuapp.com/sqs/"

 // state to hold list of sqss
 const [spaces, setSpaces] = useState([])

   // an empty sqs for initializing the create form
  const nullSqs = {
    borough: "",
    name: "",
    section: "",
    description: "",
    address: "",
    image: ""
  }

  const [targetSqs, setTargetSqs] = useState(nullSqs)

  //////////////
  // Functions
  //////////////

 // function to get list of sqss from API
 const getSqss = async () => {
  const response = await fetch(url);
  const data = await response.json();
  setSpaces(data);
};

 // function to add sqss
  const addSqss = async (newSqs) => {
    await fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newSqs),
    });
     //update the list of todos
     getSqss()
    }
      // to select a todo to edit
  const getTargetSqs = (sqs) => {
    setTargetSqs(sqs);
    navigate("/edit");
  };

  // update sqs for our handlesubmit prop
  const updateSqs = async (sqs) => {
    await fetch(url + sqs.id, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sqs),
    });

    //update our sqss
    getSqss();
  };
  
  const deleteSqs = async (sqs) => {
    await fetch(url + sqs.id, {
      method: "delete"
    })

    getSqss()
    navigate("/")
  }

  //////////////
  // useEffects
  //////////////
 useEffect(() => {
    getSqss()
  }, [])
   //////////////////////////
  // Returned JSX
  //////////////////////////

  return (
    <div className="App">
      <Header/>
      <Link to="/new"><button style={button}>Create New Space</button></Link>
      <Routes>
        <Route path="/" element={<AllBoroughs borough ={spaces}/>}/>
        <Route path="/borough/:borough" element={<SingleBorough spaces={spaces}/> }/>
        <Route path="/space/:id" element={<SingleSpace 
        spaces={spaces} 
        edit={getTargetSqs}
        deleteSqs={deleteSqs}
        />} />
        <Route path="/new" element={<Form 
          initialSqs={nullSqs}
          handleSubmit={addSqss}
          buttonLabel="Create Sqs"
        />} />
        <Route path="/edit" element={<Form
          initialSqs={targetSqs}
          handleSubmit={updateSqs}
          buttonLabel="Update Sqs"
        />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
