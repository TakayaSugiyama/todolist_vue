var app = new Vue({
    el : "#app",
    data :{
        todos :[],
        newthing : ""
    },
    methods : {
        addItem : function(){
          if(this.newthing == ""){
            return ;
          }
           var todo = {
               Item : this.newthing,
               isDone : false
            }
         this.todos.push(todo)
         this.newthing =  ""
        },
        delItem : function(index){
            this.todos.splice(index,1)
        }
    }
})