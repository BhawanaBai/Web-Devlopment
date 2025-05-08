document.addEventListener('DOMContentLoaded', function () {
    const input = document.querySelector('.input input');
    const button = document.querySelector('.input button');
    const taskContainer = document.querySelector('.task');

    button.addEventListener('click', function () {
        const taskText = input.value.trim();
        if (taskText === "") return;

        // Create task item
        const taskItem = document.createElement('div');
        taskItem.style.display = 'flex';
        taskItem.style.alignItems = 'center';
        taskItem.style.marginTop = '10px';

        const taskContent = document.createElement('span');
        taskContent.textContent = taskText;

        const deleteBtn = document.createElement('span');
        deleteBtn.innerHTML = '❌';
        deleteBtn.style.cursor = 'pointer';
        deleteBtn.style.marginLeft = '10px';
        deleteBtn.addEventListener('click', () => taskContainer.removeChild(taskItem));

        taskItem.appendChild(taskContent);
        taskItem.appendChild(deleteBtn);
        taskContainer.appendChild(taskItem);

        input.value = "";
    });
});