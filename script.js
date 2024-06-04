document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addTaskButton = document.getElementById('add-task-button');
    const taskList = document.getElementById('task-list');

    // Přidání nového úkolu do seznamu (AI)
    addTaskButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const taskItem = document.createElement('li');
            taskItem.classList.add('task');
            taskItem.innerHTML = `${taskText} <button class="delete-button">Smazat</button>`;
            taskList.appendChild(taskItem);
            taskInput.value = '';

            // Přidání funkce pro smazání úkolu (Me)
            const deleteButton = taskItem.querySelector('.delete-button');
            deleteButton.addEventListener('click', () => {
                taskList.removeChild(taskItem);
            });
        }
    });

    // Přidání úkolu při stisknutí Enter (AI + Me)
    taskInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            addTaskButton.click();
        }
    });
});
