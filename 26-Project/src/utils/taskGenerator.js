const generateTask=(subject)=>{
    // phele check krna he ke subject title is equla task subject
    if(subject.priority.toLowerCase()==="high" && subject.difficulty.toLowerCase()==="hard"){
        // hard task show krne hein
    }
    else if(subject.priority.toLowerCase()==="medium" && subject.difficulty.toLowerCase()==="medium"){
        // medium task show krne hein
    }
    else if(subject.priority.toLowerCase()==="low" && subject.difficulty.toLowerCase()==="easy"){
        // low task show krne hein
    }
    else{
        //fallback generic task show krne hein 
    }
}