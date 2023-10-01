'use client';
import React, { ChangeEvent, useEffect, useState } from 'react';
import Image from 'next/image';

interface TaskProps {
  TaskImage: string;
  TaskText: string;
  isOpen: boolean;
  id: number;
  onClick: (taskId: number) => void;
  onDelete: () => void;
}

const Task: React.FC<TaskProps> = ({
  TaskImage,
  TaskText,
  isOpen,
  onDelete,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const setVisibility = () => {
    setIsVisible(true);
  };

  const unSetVisibility = () => {
    setIsVisible(false);
  };

  useEffect(() => {
    setIsVisible(isOpen);
  }, [isOpen]);

  return (
    <>
      <section className='w-full'>
        <div className='flex items-center'>
          <Image src={TaskImage} alt='Task Image' width={45} height={45} />
          <Input toggleVisibility={setVisibility} TaskText={TaskText} />
        </div>
        <div
          className={`transition-max-height duration-700 overflow-hidden ${
            isVisible ? 'max-h-[300px]' : 'max-h-0'
          }`}
        >
          <EditTask closeDroppdown={unSetVisibility} onDelete={onDelete} />
        </div>
      </section>
    </>
  );
};

export default Task;

interface InputProps {
  toggleVisibility: () => void;
  TaskText: string;
}

export const Input: React.FC<InputProps> = ({ toggleVisibility, TaskText }) => {
  return (
    <>
      <input
        type='text'
        placeholder={TaskText}
        className='bg-white p-3 rounded-2xl w-[29rem] text-gray placeholder:text-black ml-3 text-xl'
        onClick={toggleVisibility}
      />
    </>
  );
};

export const EditTask = ({
  closeDroppdown,
  onDelete,
}: {
  closeDroppdown: () => void;
  onDelete: () => void;
}) => {
  const [description, setDescription] = useState('');
  const [isEditing, setIsEditing] = useState(true);

  const handleDescriptionChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(event.target.value);
  };

  const handleEditClick = () => {
    setIsEditing((prevIsEditing) => !prevIsEditing);
    if (buttonText === 'Done') {
      closeDroppdown();
    }
  };

  const buttonText = isEditing ? 'Edit' : 'Done';

  return (
    <div className='space-y-2 w-full'>
      <textarea
        className='min-h-[7rem] p-2 rounded-2xl text-gray placeholder:text-black w-full text-xl mt-2 word-wrap'
        placeholder='Description...'
        onChange={handleDescriptionChange}
        disabled={isEditing}
      />
      <div className='flex justify-between'>
        <button
          type='button'
          className='bg-gray py-2 px-5 w-2/5 rounded-2xl text-2xl'
          onClick={handleEditClick}
        >
          {buttonText}
        </button>
        <button
          onClick={onDelete}
          type='button'
          className='bg-gray py-2 px-5 rounded-2xl text-2xl w-2/5 flex justify-center'
        >
          <Image
            src='/icon/Trash.svg'
            alt='Task Image'
            width={20}
            height={20}
            className='mr-2'
          />
          Delete
        </button>
      </div>
    </div>
  );
};
