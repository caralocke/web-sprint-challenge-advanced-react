// write your custom hook here to control your checkout form
import { useState } from 'react' //Import needed dependencies

const useForm = (initialValue) => { //Create a useForm hook and bring in all stateful logic
    
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [values, setValues] = useState(initialValue);
      
    const handleChanges = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };
      
    const handleSubmit = (e) => {
        e.preventDefault();
        setShowSuccessMessage(true);
    };

    return [handleChanges, handleSubmit, values, showSuccessMessage]
     
}

export default useForm