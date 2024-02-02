import React from "react";
import img from "../../../public/imgPerfil.png";
import { RiQuestionLine } from "react-icons/ri";
import { MdChatBubbleOutline } from "react-icons/md";
import { FaRegArrowAltCircleUp } from "react-icons/fa";

function Comment({ comment, response, setResponse, comments }) {
  const handleChange = (e) => {
    setResponse(e.target.value);
  };

  const handleClick = () => {
    if (response) {
      comments.map((c) => {
        if (c.id === comment.id) comment.response = response;
      });
      setResponse("");
    }
  };

  return (
    <div className="w-full flex-row md:flex justify-between bg-[#D8EEF8] h-[300px] md:h-[230px] mt-5">
      <div className="flex flex-col justify-center mx-6 md:mx-0 md:pl-10">
        <div className="flex items-center mb-2 mt-6 md:mt-0">
          <RiQuestionLine size={21} className="text-primary" />
          <span className="font-semibold mx-2">Pregunta:</span>
          {comment.question}
        </div>
        <div className="flex items-center">
          <MdChatBubbleOutline size={19} className="text-primary" />
          <span className="font-semibold mx-2">Respuesta:</span>
          {comment.response}
        </div>
        <div className="w-full md:w-[773px] h-[46px] flex items-center bg-[#ffffff] border-1 border-[#C6C6C6] mt-8 py-2 pl-3">
          <textarea
            maxLength={88}
            placeholder={"Responder..."}
            onChange={(e) => handleChange(e)}
            className="w-full h-full resize-none outline-none"
          ></textarea>
          <FaRegArrowAltCircleUp
            size={19}
            className="text-primary w-10 cursor-pointer"
            onClick={handleClick}
          />
        </div>
      </div>

      <div className="w-full flex flex-col items-center justify-center mt-3 md:mt-0">
        <div
          className="rounded-full w-12 h-12 bg-cover "
          style={{ backgroundImage: `url(${img.src})` }}
        ></div>
        <p className="mt-2 mb-3 text-sm font-semibold">Dr. Mario Gomez</p>
        <div className="w-full flex gap-x-3 md:flex-col justify-center items-center gap-y-1">
          <button className="w-[91px] bg-primary text-sm text-white rounded-sm">
            Ver perfil
          </button>
          <button className="w-[91px] bg-primary text-sm text-white rounded-sm">
            CITA
          </button>
        </div>
      </div>
    </div>
  );
}

export default Comment;
