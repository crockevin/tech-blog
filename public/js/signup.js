const signup = async (e) => {//signup post fetch
    e.preventDefault()
    const firstName = document.querySelector('#first_name').value.trim()
    const lastName = document.querySelector('#last_name').value.trim()
    const email = document.querySelector('#email').value.trim()
    const password = document.querySelector('#password').value.trim()

    if (firstName && lastName && email && password) {
        const response = await fetch('/api/signup', {
            method: 'POST',
            body: JSON.stringify({ firstName, lastName, email, password }),
            headers: { 'Content-Type': 'application/json' }
        })
        if (response.ok) {
            document.location.replace('/')
        } else {
            alert(response.statusText)
        }
    }
}

document.querySelector('.signup-form').addEventListener('submit', signup)