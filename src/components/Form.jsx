import React from 'react';


const Form = ({ inputText, setInputText, todos, setTodos }) => {

    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, {text: inputText, completed: false, id: Math.random() * 1000}
        ])
        setInputText('');
    }


    return(
        <>
           <form>
               <input value={inputText} onChange={inputTextHandler} type="text" placeholder="type something todo then hit enter..." hidefocus="true"></input>
               <button type="submit" onClick={submitHandler} hidden><i className="fa-solid fa-plus"></i></button>
           </form>
        </>
    )
}

export default Form;