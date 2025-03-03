import React, { useRef } from "react";
import "./styles.css";

interface props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<props> = ({ todo, setTodo, handleAdd }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      className="input"
      onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur();
      }}
    >
      <input
          type="text"
          placeholder="Ajouter une tâche"
          value={todo}
          ref={inputRef}
          onChange={(e) => setTodo(e.target.value)}
          className="input__box"
      />
      <button type="submit" className="input_submit">
        Ajouter
      </button>
    </form>
  );
};

export default InputField;
