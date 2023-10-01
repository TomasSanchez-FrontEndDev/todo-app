'use client';
import React, { useState } from 'react';
import Task from './Task';

interface TaskItem {
  image: string;
  taskText: string;
}

const TaskList: React.FC = () => {
  const Tasks: TaskItem[] = [
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
  ];

  const TalksLeft: string = Tasks.length.toString();

  const [openTaskId, setOpenTaskId] = useState<number | null>(null);

  const handleTaskClick = (taskId: number) => {
    if (taskId != openTaskId) {
      setOpenTaskId(taskId);
    }
  };

  return (
    <div className='bg-gradient-to-b from-primary to-secondary w-2/5 h-auto rounded-xl'>
      <div className='px-8 py-4'>
        <div className='flex justify-between pt-2 text-gray font-bold'>
          <p>{TalksLeft} Tasks Left</p>
          <button>Clear all tasks</button>
        </div>
        <div className='space-y-3 mt-10'>
          {Tasks.map((task, id) => (
            <div key={id}>
              <Task
                TaskImage={task.image}
                TaskText={task.taskText}
                isOpen={id === openTaskId}
                id={id}
                onClick={handleTaskClick}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskList;
