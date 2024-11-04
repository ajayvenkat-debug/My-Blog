function submitComment(commentSectionId,nameId,messageId){
    const name=document.getElementById(messageId).value;
    if(name && message){
        const commentSection =document.getElementById(newComment);
        const newComment = document.getElementById('div');
        newComment.innerHtml=`<strong>${name}</strong>:$(message)`;
        commentSection.appendChild(newComment);
        document.getElementById(nameId).value='';
        document.getElementById(messageId).value='';
    }
    else{
        alert("please fill out both fields.");
    }
    }