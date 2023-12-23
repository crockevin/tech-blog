const updateBtn = document.getElementById('update-btn')
const deleteBtn = document.getElementById('delete-btn')

async function updateBlog(e) {//update blog fetch
    e.preventDefault()
    const updateBody = document.getElementById('update-blog').value
    try {
        const response = await fetch(`/api/blog/update/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ body: updateBody })
        })
        if (response.ok) {
            window.location.href = '/dashboard'
        }
    } catch (error){
        console.log(error)
    }
}

async function deleteBlog(e){//delete blog fetch
    e.preventDefault()
    try {
        const response = await fetch(`/api/blog/delete/${id}`,{
            method: 'DELETE'
        })
        if (response.ok) {
            window.location.href = '/dashboard'
        }
    } catch (error) {
        console.log(error)
    }
}
updateBtn.addEventListener('click', updateBlog)
deleteBtn.addEventListener('click', deleteBlog)
