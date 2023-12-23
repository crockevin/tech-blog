const comment = document.getElementById('comment-btn')

async function postComent(e) {//comment post fetch
    e.preventDefault()
    const commentBody = document.getElementById('comment').value.trim()
    if (commentBody) {
        var commentData = {
            content: commentBody,
            blog_id: id
        }
        const response = await fetch('/api/comment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(commentData)
        })
        if (response.ok) {
            console.log('Comment posted')
            location.reload()//reload to show new posted comment
        } else {
            console.log('an error occured')
        }
    }
}

comment.addEventListener('click', postComent)