import React, { useState } from "react";
import Header from "./Header";
import Modal from "./Modal";
import { TypeTodo } from "./typeTodo";

type TodoListProps = {
  todoList: TypeTodo[];
  setTodos: (index: any) => void;
};
const TodoLists = ({ todoList, setTodos, onAdd }: any) => {
  const [openModal, setShowModal] = useState(false);

  const checkOn = todoList.filter((item: any) => {
    return item.complete === false;
  });
  const checkOff = todoList.filter((item: any) => {
    return item.complete === true;
  });

  return (
    <>
      <div className="app">
        <div className="main">
          <div className="grid">
            <Header checkOn={checkOn} checkOff={checkOff} />
            <div className="grid-row">
              <div className="incomplete">
                <h3 className="title">Incomplete</h3>
                <div className="list">
                  {checkOn.map((item: any, index: any) => {
                    return (
                      <div className="list-item" key={index}>
                        <div className="list-item-title">
                          <input
                            type="checkbox"
                            checked={false}
                            onClick={() =>
                              setTodos([...todoList, (item.complete = true)])
                            }
                          />
                          <h5>{item.title}</h5>
                        </div>
                        <div className="list-item-category">{item.content}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="grid-row">
              <div className="completed">
                <h3 className="title">Completed</h3>
                <div className="list">
                  {checkOff.map((item: any, index: any) => {
                    return (
                      <div className="list-item" key={index}>
                        <div className="list-item-title">
                          <input
                            type="checkbox"
                            checked={true}
                            defaultChecked
                            onClick={() =>
                              setTodos([...todoList, (item.complete = false)])
                            }
                          />
                          <h5>{item.title}</h5>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="btn-show-modal">
          <img
            src="https://scontent.xx.fbcdn.net/v/t1.15752-9/p206x206/251291240_5117816144914365_499214378354785186_n.png?_nc_cat=109&ccb=1-5&_nc_sid=aee45a&_nc_ohc=xCOj6BKlG3QAX-hj_2r&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=a3217a02415d0eb62ef2baa6ebc472a2&oe=61AAB145"
            width="40px"
            alt=""
            onClick={() => {
              setShowModal(true);
            }}
          />
          {openModal && <Modal closeModal={setShowModal} onAdd={onAdd} />}
        </div>
      </div>
    </>
  );
};

export default TodoLists;
