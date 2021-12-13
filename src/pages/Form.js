import {useState} from "react";
import {useNavigate} from "react-router-dom"

const Form = ({initialSqs, handleSubmit, buttonLabel}) => {

  const navigate = useNavigate()

  // The Form State
  const [formData, setFormData] = useState(initialSqs)

  // Handle Change to Update State when Input changes
  const handleChange = (event) => {
    setFormData({...formData, [event.target.name]: event.target.value})
  }

  // HandleSubmit for when the form submited
  const handleSubmission = (event) => {
    // prevent the page from refresh
    event.preventDefault()
    // pass the formData to the handleSubmit function passes as props
    handleSubmit(formData)
    //push user back to main page
    navigate("/")

  }

  return <form onSubmit={handleSubmission}>
    <input
      type="text"
      placeholder="borough"
      onChange={handleChange}
      value={formData.borough}
      name="borough"
      />
    <input
    type="text"
    placeholder="name"
    onChange={handleChange}
    value={formData.name}
    name="name"
    />
    <input
    type="text"
    placeholder="section"
    onChange={handleChange}
    value={formData.section}
    name="section"
    />
    <input
    type="text"
    placeholder="description"
    onChange={handleChange}
    value={formData.description}
    name="description"
    />
    <input
    type="text"
    placeholder="address"
    onChange={handleChange}
    value={formData.address}
    name="address"
    />
    <input
    type="text"
    placeholder="image url"
    onChange={handleChange}
    value={formData.image}
    name="image"
    /> 

    <input type="submit" value={buttonLabel} />
  </form>
};

export default Form;