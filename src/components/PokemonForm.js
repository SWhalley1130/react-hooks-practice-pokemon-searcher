import React, {useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({submittedForm}) {

  const [formData, setFormData]=useState(
  {
    name:"",
    hp:0,
    frontUrl:"",
    backUrl:""
  })

  function handleChange(e)
  {
    setFormData({
      ...formData, 
      [e.target.name]:e.target.value
    })
  }

  function handleSubmit()
  {
    const formatted=
    {
      name:formData.name,
      hp:parseInt(formData.hp),
      sprites:
      {
        front:formData.frontUrl,
        back:formData.backUrl
      }
    };
    fetch(`http://localhost:3001/pokemon`,
    {
      method:'POST',
      headers:
      {
        "Content-Type":"application/json",
        "Accepts":"application/json"
      },
      body:JSON.stringify(formatted)
    })
    .then(res=>res.json())
    .then(newlyAdded=>submittedForm(newlyAdded))
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={() => {
          handleSubmit(formData);
        }}
      >
        <Form.Group widths="equal">
          <Form.Input onChange={handleChange} fluid label="Name" placeholder="Name" name="name" />
          <Form.Input onChange={handleChange} fluid label="hp" placeholder="hp" name="hp" />
          <Form.Input
            onChange={handleChange} 
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
          />
          <Form.Input
            onChange={handleChange} 
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
