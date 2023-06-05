let options = {
    root:null,
    rootMargin:'0px',
    threshold:1.0
};
let callback= (entries,observer)=>{
    entries.foreach(entry=>{
        if (entry.target.id=='sulvideo')
        {
            if(entry.isIntersecting){
                entry.target.play(); 
            }
            else{
                entry.target.pause()
            }

        }
    

    });
};