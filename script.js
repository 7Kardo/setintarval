
var start;
var clear = document.getElementById('clear');
var set = document.getElementById('set');
var comments = ['comment one','comment two','comment three','comment four'];
var index = -1;


set.addEventListener('click',function(){
   start=setInterval(function(){
      ++index;
      if(index >= comments.length){
         clearInterval(start)
        alert('finished')
      }else{
         var list = document.createElement('li');
         list.innerHTML = comments[index];
         document.body.append(list);
      }
   },3000); 
})

 clear.addEventListener('click',function(){
   clearInterval(start)
      
})

   

