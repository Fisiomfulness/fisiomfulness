// eslint-disable-next-line no-restricted-syntax
"use client";
import React from "react";
import Question from "@/components/pregunta_experto/Question";
import Comment from "@/components/pregunta_experto/Comment";
import { useState, useEffect } from "react";

function PreguntaExperto() {
  const [question, setQuestion] = useState();
  const [response, setResponse] = useState();
  const [num, setNum] = useState(0);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const item = localStorage.getItem("comments");
    const comments = JSON.parse(item);
    if (comments?.length > 0) setComments(comments);
  }, []);

  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments, response]);

  const handleClick = () => {
    setComments([]);
  };

  return (
    <div className="w-[1028px] flex flex-col items-center mx-auto px-3">
      <Question
        question={question}
        setQuestion={setQuestion}
        num={num}
        setNum={setNum}
        comments={comments}
        setComments={setComments}
      ></Question>
      {comments.length <= 0 ? (
        <p className="my-7">Ninguna pregunta</p>
      ) : (
        <div className="w-full mt-12 mb-16 flex flex-col">
          {comments?.map((com) => (
            <Comment
              key={com.id}
              comment={com}
              response={response}
              setResponse={setResponse}
              comments={comments}
            ></Comment>
          ))}
          <button className="mt-14" onClick={handleClick}>
            Limpiar
          </button>
        </div>
      )}
    </div>
  );
}

export default PreguntaExperto;
