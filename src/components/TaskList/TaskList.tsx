'use client';
import React, { useState } from 'react';
import Task from './Task';
import Image from 'next/image';

interface TaskItem {
  image: string;
  taskText: string;
}

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<TaskItem[]>([
    {
      image: '/img/Mr.IncreibleGod.png',
      taskText: 'Learn React...',
    },
    {
      image: '/img/Mr.IncreibleGood.png',
      taskText: 'Make him/her love me',
    },
    {
      image: '/img/Mr.IncreibleDeep.png',
      taskText: 'Bench press deadlift 100kg',
    },
    {
      image: '/img/Mr.IncreibleSuicidal.png',
      taskText: 'Give Up',
    },
    {
      image: '/img/Mr.IncreibleGood.png',
      taskText: 'Make This App',
    },
  ]);

  const TalksLeft: string = tasks.length.toString();

  const [openTaskId, setOpenTaskId] = useState<number | null>(null);

  const handleTaskClick = (taskId: number) => {
    if (taskId != openTaskId) {
      setOpenTaskId(taskId);
    }
  };

  const addTask = (newTask: TaskItem) => {
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id: number) => {
    const newTasks = [...tasks];
    newTasks.splice(id, 1);
    setTasks(newTasks);
  };

  return (
    <div className='w-2/5 -mt-28 flex flex-col items-center'>
      <button
        onClick={() =>
          addTask({
            image: '/img/Mr.IncreibleGood.png',
            taskText: 'New Task Here',
          })
        }
        type='button'
        className='w-[90%] flex justify-start p-3 bg-gradient-to-r from-primary to-secondary rounded-lg items-center'
      >
        <Image src='/Icon/AddTask.svg' alt='Add Task' width={30} height={30} />
        <p className='ml-2 text-white font-bold'>Learn React...</p>
      </button>
      <div className='bg-gradient-to-b from-primary to-secondary h-auto rounded-xl w-full my-5'>
        <div className='px-8 py-4'>
          <div className='flex justify-between pt-2 text-gray font-bold'>
            <p>{TalksLeft} Tasks Left</p>
            <button>Clear all tasks</button>
          </div>
          <div className='space-y-3 mt-10'>
            {tasks.map((task, id) => (
              <div key={id}>
                <Task
                  TaskImage={task.image}
                  TaskText={task.taskText}
                  isOpen={id === openTaskId}
                  id={id}
                  onClick={handleTaskClick}
                  onDelete={() => deleteTask(id)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskList;
