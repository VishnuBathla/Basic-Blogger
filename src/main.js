import UI from './ui'
import blogpost from './blogpost'
import Main_Data from './main_data'
let ind=0
let previous_blog={}
function adder(e){
    e.preventDefault()
    try{
        const title = document.querySelector("#Title").value
        const body = document.querySelector("#post_body").value
        const post = new blogpost(ind.toString(),title,body)
        Main_Data.add_blog(post)
        const ui = new UI()
        console.log(Main_Data)
        ui.blog(post)
        document.querySelector(`#d${ind}`).addEventListener('click',del)
        document.querySelector(`#i${ind}`).addEventListener('click',edit)
        ind+=1
    }catch(e){
        console.log(e.message)
    }  
}
function del(e){
    e.preventDefault()
    try{
      if (confirm("Are you sure?") == true) {
        Main_Data.delete_blog(e.target.id.substring(1))
        const ui = new UI()
        console.log(Main_Data)
        ui.reset()
        Main_Data.data.forEach(blog=>{
            ui.blog(blog)
            document.querySelector(`#d${blog.id}`).addEventListener('click',del)
            document.querySelector(`#i${blog.id}`).addEventListener('click',edit)
        }
            )
        
        } 
        
    }catch(e){
        console.log(e.message)
    }  
}
function updater(e){
    e.preventDefault()
    
    try{
        // console.log(prev_blog)
        const title = document.querySelector("#Title").value
        const body = document.querySelector("#post_body").value
        const post = new blogpost(previous_blog.id,title,body)
        console.log(post)
        Main_Data.update_blog(previous_blog,post)
        reset_back(e)
    }catch(e){
        console.log(e.message)
    }  
}
function edit(e){
    e.preventDefault()
    try{
        const index = e.target.id.substring(1)
        const prev_blog = Main_Data.get_data(index)
        previous_blog = prev_blog
        document.querySelector("#Title").value = prev_blog.title
        document.querySelector("#post_body").value = prev_blog.body
        const cancel = document.querySelector("#cancel_edit_btn")
        cancel.style.display="inline-block"
        const update = document.querySelector("#update_btn")
        update.style.display="inline-block"
        document.querySelector("#post_it").style.display="none"
    }catch(e){
        console.log(e.message)
    }  
}

function reset_back(e){
    e.preventDefault()
    document.querySelector("#Title").value = ""
    document.querySelector("#post_body").value = ""
    const cancel = document.querySelector("#cancel_edit_btn")
    cancel.style.display="none"
    const update = document.querySelector("#update_btn")
    update.style.display="none"
    document.querySelector("#post_it").style.display="inline-block"
    // document.querySelector('#post_it').addEventListener('click',adder) 
    const ui = new UI()
    console.log(Main_Data)
    ui.reset()
    Main_Data.data.forEach(blog=>{
            ui.blog(blog)
            document.querySelector(`#d${blog.id}`).addEventListener('click',del)
            document.querySelector(`#i${blog.id}`).addEventListener('click',edit)
        }
            )
}

document.querySelector('#post_it').addEventListener('click',adder) 
document.querySelector("#update_btn").addEventListener('click',updater)
document.querySelector("#cancel_edit_btn").addEventListener('click',reset_back)