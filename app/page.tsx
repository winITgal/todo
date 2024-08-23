'use client';
import { TabsContainer, Title, TodoForm } from '@/components';
import React, { useEffect, useState } from 'react';
import { seedTodos } from './lib';
import { todos as todosData, LOCAL_STORAGE_KEY_TODOS } from './constants';
import { Todo } from '@/interfaces';

const Home = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const initializeTodos = () => {
      const existingTodos = localStorage.getItem(LOCAL_STORAGE_KEY_TODOS);

      if (existingTodos) {

        setTodos(JSON.parse(existingTodos));
      } else {

        seedTodos(todosData);
        setTodos(todosData);
      }
    };

    initializeTodos();
  }, []);


  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem(LOCAL_STORAGE_KEY_TODOS, JSON.stringify(todos));
    }
  }, [todos]);

  return (
    <>
      <div className="bg-[url('/img/bg-desktop-light.jpg')] bg-no-repeat bg-cover h-72">
        <div className='md:mx-12 lg:mx-96 px-10 py-20'>
          <Title />
          <TodoForm todos={todos} setTodos={setTodos} />
          <TabsContainer todos={todos} setTodos={setTodos} />
        </div>
      </div>
    </>
  );
};

export default Home;
