import React, { useState } from 'react'
import img1 from "./img/pngwing.com.png"
import Todo from './Todo'


const TodoList = () => {

    const [title, settitle] = useState('')

    const [maintask, setmaintask] = useState([]);

    let getElement = (e) => {
        settitle(e.target.value)

    }



    let add = function () {

        if (title === "") {
            alert("You must write something!")
        }
        else {

            setmaintask((olditmes) => {
                return [...olditmes, title]

            })

            settitle('')

            clear()
            // textdecor()

        }

    }
    let clearAll = function () {
        setmaintask([])
    }

    let clear = function (id) {
        setmaintask((olditmes) => {
            return olditmes.filter((arrEle, indx) => {
                return indx !== id;
            })
        })

    }
    // let textdecor=function(){
    //     return document.getElementById('todo-textHolder').style.textDecoration='line-throug'
    // }

    return (
        <>
            <div className="container">

                <div className="todo-app">
                    <div className="main">
                        <h2>To-Do List </h2>
                        <img src={img1} alt="TodoImage" />
                    </div>
                    <div className="row">
                        <input value={title} onChange={getElement} type="text" id="input-box" placeholder="Add Your Text" />

                    </div>
                    <div className="btn">
                        <button onClick={add} type="submit">Add</button>
                        <button onClick={clearAll} id="clearAll" type="submit">Clear All</button>
                    </div>
                    
                    <div id="list-todo">
                        {
                            maintask.map((item, indx) => {
                                return <Todo key={indx} id={indx}
                                    onSelect={clear} item1={item} />

                            })
                        }
                        {/* <div id="todo-holder">
                            <input onClick={textDecor} type="checkbox" id="checkbox" />
                            <h2 id="todo-textHolder">{title}</h2>
                            <i onclick={clear} className="fa-solid fa-trash-can" id="icon"></i> 
                        </div> */}

                    </div>
                    {/* <div id="contain"></div> */}

                </div>
            </div>
        </>
    )
}
export default TodoList
