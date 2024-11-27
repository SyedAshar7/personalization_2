import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import '../Navigation/Navigation.css';
import '../main/main.css';

function Main() {
  const tasks = [
    { title: 'Clean Gutters', time: '09:00', completed: true },
    { title: 'Change Furnace Filters', time: '10:30', completed: false },
    { title: 'Clear Roof Decks', time: '18:15', completed: false },
    { title: 'Mow Lawn', time: '22:00', completed: false },
  ];

  return (
    <>
      <div className="navmain">
        <div className="appbox">
          <Header />
          <main className="navcontent">
            <div className="maintenance-logs">
              <h2 className="main-heading">Maintenance Logs</h2>
              <div className="today-section">
                <div className="today-header">
                  <p className="date">Today</p>
                  <button
  className="add-task-button"
  onClick={() => alert('Add Task functionality not implemented')}
>
  +
</button>
                </div>
                <p className="sub-date">Monday, 1 Nov</p>
                <div className="task-list">
                  {tasks.map((task, index) => (
                    <div
                      className={`task-item ${task.completed ? 'completed' : ''}`}
                      key={index}
                    >
                      <input
                        type="checkbox"
                        className="task-checkbox"
                        checked={task.completed}
                        readOnly
                      />
                      <div className="task-content">
                        <p className="task-title">{task.title}</p>
                        <p className="task-time">Due time: {task.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="see-more">See 4 other more</p>
              </div>
            </div>
            
          </main>
          
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Main;
