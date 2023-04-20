import main_data from "./main_data";
export default class UI{
    blog(post){
        const list = document.querySelector('.main_body')
        const row = document.createElement('section')
        row.innerHTML =`<h5>${post.title}</h5>
                        <h5>${post.body}</h5>
                        <button class="edit_but" id=i${post.id}>✏️</button><button class="cancel_but" id=d${post.id}>❌</button>
                        `
        row.setAttribute('class','blog')
        list.appendChild(row)        
    }
    reset(){
        const list = document.querySelector('.main_body')
        list.innerHTML=``
    }

}
