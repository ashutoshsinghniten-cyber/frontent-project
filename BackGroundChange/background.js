
    const randomColor=function(){
      const temp='0123456789ABCDEF';
      let color='#';
      for(i=0;i<6;i++){
        color += temp[Math.floor(Math.random() * 16)]
      }
      return color;
    }
    let set;
    const startChangingColor=function(){
      if(!set){
        set=setInterval(bgColor, 1000)
      }
      function bgColor(){
        document.body.style.backgroundColor=randomColor();
      }
    }
    const stopChangingColor=function(){
      clearInterval(set)
      set=null;
    }
    document.querySelector('#start').addEventListener('click', startChangingColor);
    document.querySelector('#stop').addEventListener('click', stopChangingColor);
    