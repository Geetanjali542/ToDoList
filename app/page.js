"use client";
import React, { useState } from "react";
import { render } from "react-dom";

const page = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [mainTask, setMainTask] = useState([]);


  const submitHandler = (e) => {
    // submitHandler is executed as soon as we click on add task
    e.preventDefault();      //used to prevent reloading of the data entered

    console.log(title);
    console.log(desc);
    // the above two console prints the data on console and after that

    setMainTask([...mainTask, { title, desc }]);  //all the input will be stored here as the input has been copied in mainTask

    // and after that below we again have set the title and desc to empty for another input to take
    settitle("");
    setdesc("");

    console.log(mainTask);
  };

  const deleteHandler = (i) => {
    let copytask = [...mainTask];

    copytask.splice(i, 1);  //splice is like cutting the unwanted part from the array
    // so after cutting the  input which is deleting we have passed the copytask in
    // to the setMainTask , in which now the deleted input will not be contained in setMainTask

    setMainTask(copytask);
  };

  // the below has been made to show the output of the input on the frontend
  let renderTask = <h2 className="text-center text-4xl">No Task Available</h2>;

  if (mainTask.length > 0) { //it is a check 
    renderTask = mainTask.map((t, i) => {   // t is the object(which is task and desc) adn i is the iterator
      return (
        <li key={i} className="flex items-center justify-between mb-8">
{/* key={i} - above it provides the unique identification to the i which is iterator */}
          <div className="flex items-center justify-between  w-2/3">
            <h5 className="text-2xl font-semibold">{t.title}</h5>
            <h6 className="text-lg font-medium">{t.desc}</h6>
          </div>

          <button
            onClick={() => {
              deleteHandler(i);
            }}
            className=" text-black px-4 py-2  font-bold m-auto  
            placeholder-black  placeholder-opacity-75 rounded-xl 
           border-b-2
           transition duration-500 ease-in-out bg-green-300 hover:bg-red-100 transform hover:-translate-y-1 hover:scale-110 ..."
          >
            Delete
          </button>


        </li>
      );
    });
  }

  return (
    <>
      <div className="  h-screen w-screen  text-black font-serif
      bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500  ">
        
      <h1 className=" text-center font-bold text-6xl bg-black-900 px-5 py-10 m-auto ">
        TO DO LIST
      </h1>

      <form onSubmit={submitHandler}>
       
        <div className="space-y-4  py-10 px-20  h-full rounded-3xl flex gap-2
        0 "   >
          <input
          type="text"
           className=" bg-blue-300 py-5 placeholder-black  placeholder-opacity-75 rounded-xl 
           border-b-2 border-fuchsia-600 px-20 m-auto text-center"
           placeholder="Enter Title Here"
            value={title}
            // the above title has no value as in hook state we have not stored any value
            // beforehand to print so , after the onchange fun we are storing the value in the usestate hook
            // and the data is replicted to usestate hook 
            onChange={(e) => {
              settitle(e.target.value);
            }}
          />

          <input
            type="text"
            className=" bg-blue-300 py-5 placeholder-black  placeholder-opacity-75 rounded-xl 
            border-b-2 border-fuchsia-600 m-auto px-20 text-center "
            placeholder="Enter Description here"
            value={desc}
            onChange={(e) => {
              setdesc(e.target.value);
            }}
          
          />

          
        <button className="  py-5 placeholder-black  placeholder-opacity-75 rounded-xl 
           border-b-2 px-20 m-auto text-center 
           transition duration-500 ease-in-out bg-green-300 hover:bg-yellow-100 transform hover:-translate-y-1 hover:scale-110 ...">
            Add Task
          </button>
        </div>


        {/* <br></br> */}
        
         
       
      </form>

      <hr />


{/* below the  */}
      <div className=" py-10 pl-20 m-20 h-auto rounded-3xl">
        <ul className="m-auto">{renderTask}</ul>
      </div>
      </div>
    </>
  );
};

export default page;
