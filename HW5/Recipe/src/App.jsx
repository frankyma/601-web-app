import { useState } from "react";

import Edit from "./Edit";

function App() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [steps, setSteps] = useState([""]);
  const [isEdit, setIsEdit] = useState(true);

  return isEdit ? (
    <Edit
      name={name}
      description={description}
      steps={steps}
      setName={setName}
      setDescription={setDescription}
      setSteps={setSteps}
      setIsEdit={setIsEdit}
    ></Edit>
  ) : (
    <div>View</div>
  );
}

export default App;
