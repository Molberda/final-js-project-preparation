const postMod = document.querySelector('.post')

async function getPosts(){
    const id = localStorage.getItem('id')
    const posts = await fetch (`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
    const postsData = await posts.json()
    postMod.innerHTML = postsData.map(post => postHTML(post)).join('')
}

getPosts()


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