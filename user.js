const postMod = document.querySelector('.post')
const localId = localStorage.getItem('id')

async function onSearchChange(event){
    const id = event.target.value 
    getPosts(id)
}

async function getPosts(userId){
    const posts = await fetch (`https://jsonplaceholder.typicode.com/posts?userId=${userId || localId}`)
    const postsData = await posts.json()
    postMod.innerHTML = postsData.map(post => postHTML(post)).join('')
}

function postHTML(post){
    return `<div class="post">
    <div class="post__title">
    ${post.title}
    </div>
    <p class="post__body">
    ${post.body}
    </p>
    </div>`
}

getPosts(localId)