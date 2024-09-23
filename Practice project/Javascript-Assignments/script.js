async function fetchUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const users = await response.json();
        displayUsers(users);
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

function displayUsers(users) {
    const userList = document.getElementById('userList');

    users.forEach(user => {
        const li = document.createElement('li');
        li.innerHTML = `
            <strong>Name:</strong> ${user.name} <br>
            <strong>Email:</strong> ${user.email} <br>
            <strong>Address:</strong> ${user.address.street}, ${user.address.city} 
        `;
        userList.appendChild(li);
    });
}

// Fetch and display users when the page loads
fetchUsers();
