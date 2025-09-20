import React, { useState } from 'react';
import { Plus, Trash2 } from 'lucide-react';

const App = () => {
  // State hooks to store task details and form inputs
  const [tasks, setTasks] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [taskText, setTaskText] = useState('');

  // Function to add a new task
  const handleAddTask = () => {
    // Only add if all fields are non-empty
    if (name.trim() !== '' && email.trim() !== '' && taskText.trim() !== '') {
      const newTask = {
        id: Date.now(),
        name: name,
        email: email,
        text: taskText
      };
      setTasks([...tasks, newTask]);
      // Clear form inputs after adding
      setName('');
      setEmail('');
      setTaskText('');
    }
  };

  // Function to delete a task
  const handleDeleteTask = (id) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans flex items-center justify-center p-4 sm:p-6">
      <div className="bg-gray-900 p-6 sm:p-8 rounded-xl shadow-xl w-full max-w-2xl transform transition-all duration-300">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-center text-amber-400 mb-6 sm:mb-8">
          Mera Task Manager
        </h1>
        
        {/* Task input section */}
        <div className="flex flex-col space-y-4 mb-8">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Aap ka naam"
            className="p-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Aap ka email"
            className="p-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400"
          />
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <input
              type="text"
              value={taskText}
              onChange={(e) => setTaskText(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleAddTask();
                }
              }}
              placeholder="Naya task likhein..."
              className="flex-grow p-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400 w-full"
            />
            <button
              onClick={handleAddTask}
              className="flex items-center justify-center px-6 py-3 bg-amber-400 text-gray-950 rounded-lg font-bold shadow-lg hover:bg-amber-500 transition-colors duration-300 w-full sm:w-auto"
            >
              <Plus size={20} className="mr-2" />
              Task Add Kren
            </button>
          </div>
        </div>

        {/* Task list section */}
        {tasks.length > 0 ? (
          <ul className="space-y-4">
            {tasks.map((task) => (
              <li
                key={task.id}
                className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 bg-gray-800 rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
              >
                <div className="flex flex-col">
                  <span className="font-bold text-lg text-gray-200">{task.name}</span>
                  <span className="text-sm text-gray-400">{task.email}</span>
                  <span className="text-lg text-gray-300 mt-2 sm:mt-0">{task.text}</span>
                </div>
                <button
                  onClick={() => handleDeleteTask(task.id)}
                  className="mt-4 sm:mt-0 p-2 rounded-full bg-gray-900 text-red-400 hover:bg-gray-700 transition-colors duration-300"
                >
                  <Trash2 size={20} />
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-400 text-lg py-12">
            Abhi koi task nahi hai. Naya task likhein!
          </p>
        )}
      </div>
    </div>
  );
};

export default App;
