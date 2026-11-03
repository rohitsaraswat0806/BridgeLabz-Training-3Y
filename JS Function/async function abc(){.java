async function abc(){
    try{
        let res = await fetch("https://jsonplaceholder.typicode.com/comments")
        let img = await fetch("https://jsonplaceholder.typicode.com/photos");
        let imgdata =   await img.json()
        let data = await res.json();
        console.log("data",data);
        console.log("imag data ", imgdata);
        // thumbnailUrl: 'https://picsum.'
            }
}
