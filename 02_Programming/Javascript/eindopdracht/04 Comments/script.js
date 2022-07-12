const container = document.querySelector('container');
const containerComment = document.querySelector('container-comment');

const createComment = (comment) => {
    const commentEl = document.createElement('div')
    commentEl.classList.add('container-comment')

    const commentInnerHTML = `
    <div class="container-comment">
        <div class="container-comment__commenter-info">
            <img src="https://images.unsplash.com/photo-1657577082289-500c2f3d77c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
            alt="">
            <small class="container-comment__person">Person</small>
            <small class="container-comment__post-number">#1</small>
        </div>
        <div class="container-comment__comment">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt accusantium ex, quam repudiandae rerum
            veritatis, quo, esse enim quod odit consequuntur. Totam inventoredolorem rem mollitia eaque est dolorum
            sunt.</p>
        </div>
        <button class="container-comment__reply">Reply</button>

    </div>`
    commentEl.innerHTML = commentInnerHTML
    container.appendChild(commentEl)
}