import React from "react";
import { AppButton } from "../../Module/Button/button";
import { ModalContainer } from "../../Module/ModuleContainer/modalContainer";

type Props = {
  id: number;
  deleteTask: (e: React.MouseEvent<HTMLButtonElement>) => void;
  canselDeleteTask: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export const ModalDelete = ({ id, deleteTask, canselDeleteTask }: Props) => {
  return (
    <ModalContainer>
      <div className="w-80  p-4 pb-8 rounded bg-white">
        <h3>Are you sure?</h3>
        <p className="my-4">Do you whont to delete task?</p>
        <span className="block w-full flex justify-around">
          <AppButton
            style=""
            onClick={(e) => deleteTask(e)}
            title="Yes"
            nameValue="confirmDelete"
          />
          <AppButton
            style=""
            onClick={(e) => canselDeleteTask(e)}
            title="No"
            nameValue="canselDelete"
          />
        </span>
      </div>
      ;
    </ModalContainer>
  );
};
