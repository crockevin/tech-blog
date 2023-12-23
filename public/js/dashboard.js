var form = document.querySelector('.form')
var newPostBtn = document.querySelector('#post-btn')
var sendPost = document.querySelector('#update-btn')


async function postFetch() {// post new blog fetch
    var title = document.getElementById('blog-title').value.trim()
    var body = document.getElementById('blog-body').value.trim()
    if (title && body) {
        var postData = {
            title: title,
            body: body
        }
        console.log('test')
        const response =  await fetch('/api/blog', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postData)
        })
        if (response.ok) {
            console.log('test')
            form.classList.add('hide-form')//hides post form
        }      
    }
}

newPostBtn.addEventListener('click', () => {
    form.classList.toggle('hide-form');// shows new post form
})
sendPost.addEventListener('click', postFetch)