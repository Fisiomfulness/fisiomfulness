"use client";
import React from "react";
import { Button } from "@nextui-org/react";

function Question({
  question,
  setQuestion,
  comments,
  setComments,
  num,
  setNum,
}) {
  const handleChange = (e) => {
    setQuestion(e.target.value);
  };

  const handleClick = () => {
    if (question) {
      setNum((num += 1));
      setComments([...comments, { id: num, question: question, response: "" }]);
      setQuestion("");
    }
  };

  return (
    <div className="w-full flex flex-col">
      <textarea
        value={question}
        placeholder={!question ? "Escribe tu pregunta..." : question}
        onChange={(e) => handleChange(e)}
        className="h-[162px] bg-[#EEEEEE] border-1 border-[#C6C6C6] resize-none outline-none mt-8 p-4"
      ></textarea>
      <div className="w-56 mt-3 ml-auto">
        <Button className="w-full" color="primary" onClick={handleClick}>
          Enviar
        </Button>
      </div>
    </div>
  );
}

export default Question;
