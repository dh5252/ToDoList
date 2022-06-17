
var workList = {
    
    "addToToday" : function(work){
            
        const li = document.createElement("li");
        const checkBox = document.createElement('input');
   
        li.setAttribute('id', work);
        checkBox.setAttribute('type','checkbox');
        checkBox.setAttribute('class',"isChecked");
   
        const textNode = document.createTextNode(work);
        li.appendChild(textNode);

        document.getElementById('todayList').appendChild(li);
        li.prepend(checkBox);

    },  

    
    "removeTodayWork" : function(){
        var checkBoxList = document.getElementsByClassName("isChecked");
        var tmp = 0;


        for(var i = 0; i<checkBoxList.length;i++){
            if (checkBoxList[i].checked == true){
                checkBoxList[i].parentElement.remove();
                i--;
                tmp = 1;
            }
            
        }

        if(tmp == 0){
            alert('삭제할 일을 체크해주세요');
        }
        else{
            alert('할일을 완료하거나 삭제했습니다.')
        }
    },
    
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






