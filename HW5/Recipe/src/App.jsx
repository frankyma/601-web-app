import { useState } from "react";

import Edit from "./Edit";
import View from "./View";

function App() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [steps, setSteps] = useState([""]);
  const [isEdit, setIsEdit] = useState(true);
  const [imgSrc, setImgSrc] = useState("");

  return isEdit ? (
    <Edit
      name={name}
      description={description}
      steps={steps}
      setName={setName}
      setDescription={setDescription}
      setSteps={setSteps}
      imgSrc={imgSrc}
      setImgSrc={setImgSrc}
      setIsEdit={setIsEdit}
    ></Edit>
  ) : (
    <View
      name={name}
      description={description}
      steps={steps}
      imgSrc={imgSrc}
      setIsEdit={setIsEdit}
    />
  );
}

export default App;
