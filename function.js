
var workList = {
    
    "addToToday" : function(work){
            
        const li = document.createElement("li");

        li.setAttribute('id', work);

        const textNode = document.createTextNode(work);
        li.appendChild(textNode);

        document.getElementById('todayList').appendChild(li);
    },  
    // 코드 이해가 안되니까 이해해보자
    // js를 이용해 html에서 뭔가를 가져오는 것과는 달리 js에서 뭔가를 만들어서 html에 넣을 수도 있다.




    // "removeTodayWork" : function(){
    //     this.todayList
    // },
    
    "addToLater" : function(work){
        
    },
    
    "addToOverdue" : function(work){
        
    },
    
    "inputWork" : function(){
        var work = prompt("할 일 입력");

        if (work != null){
            this.addToToday(work);
        }
    }
    
// 제거기능 만들어야함
}






