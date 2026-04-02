function addTask() {
    const input = document.getElementById('taskInput');
    const taskText = input.value.trim();

    if (taskText === "") return; // Don't add empty tasks

    const ul = document.getElementById('taskList');
    const li = document.body.appendChild(document.createElement('li'));

    // 1. Set the text and the delete button
    li.innerHTML = `
    <span class="text">${taskText}</span>
    <span class="delete-btn" onclick="event.stopPropagation(); this.parentElement.remove()">x</span>
    `;

    // 2. Add click event toggle "completed" status
    li.onclick = function() {
        this.classList.toggle('completed');
    };

    ul.appendChild(li);
    input.value = ''; // Clear input
}

function clearAll() {
    document.getElementById('taskList').innerHTML = '';
}

function filterTasks(type) {
    const items =document.querySelectorAll('#taskList');

    items.forEach(item => {
        const isDone = item.classList.contains('completed');

        switch(type) {
            case 'all':
                item.style.display = 'flex';
                break;
            case 'active':
                item.style.display = isDone ? 'none' : 'flex';
                break;
            case 'completed':
                item.style.display = isDone ? 'flex' : 'none';
                break;
        }
    });
}