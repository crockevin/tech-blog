const login = async (e) => {//login post fetch
    e.preventDefault()
    const email = document.querySelector('#email').value.trim()
    const password = document.querySelector('#password').value.trim()
    if (email && password) {
        const response = await fetch('/api/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' }
        })
        if (response.ok) {
            document.location.replace('/')
        } else {
            alert(response.statusText)
        }
    }
}

document.querySelector('.login-form').addEventListener('submit', login)