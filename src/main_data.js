class Main_Data{
    constructor(){
        this.data=[]
    }
    add_blog(blog){
        this.data.push(blog)
    }
    delete_blog(index){
        this.data = this.data.filter(blg=> blg.id!==index)
    }
    update_blog(prev_blog,new_blog){
        let index = this.data.indexOf(prev_blog)
        console.log(index)
        this.data[index].id=new_blog.id
        this.data[index].title=new_blog.title
        this.data[index].body=new_blog.body
    }
    get_data(index){
        return this.data.find(blog=>blog.id===index)
    }
}
export default new Main_Data()
