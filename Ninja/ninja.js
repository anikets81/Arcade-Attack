var row = 8;
var col =8;

var currTile;
var otherTile;

var turns =0;
// if (document.getElementById("board").children[34].src.search("1.jpg")!=-1) console.log("Done");
 
window.onload=function(){
    
    for(let r = 0 ;r<row; r++)
    {
        for(let c= 0 ; c< col;c++)
        {
            let tile=document.createElement("img");
            tile.src="./Images/blank.jpg";

            tile.addEventListener("dragstart",dragStart);
            tile.addEventListener("dragover",dragover);
            tile.addEventListener("dragleave",dragleave);
            tile.addEventListener("dragenter",dragEnter);
            tile.addEventListener("drop",dragDrop);
            tile.addEventListener("dragend",dragEnd);
            document.getElementById("board").append(tile);
        }
    } 

    let pieces=[];
    for(let i=1;i<=64;i++)
    {
        pieces.push(i.toString());
    }
    pieces.reverse();
    
    for(let i=0;i<pieces.length;i++)
    {
        let j=Math.floor(Math.random()* pieces.length);
        let temp;
        temp=pieces[i];
        pieces[i]=pieces[j];
        pieces[j]=temp;
    }

    for(let i=0;i<64;i++)
    {
        let tile=document.createElement("img");
        tile.src="./Images/"+pieces[i]+".jpg";

        tile.addEventListener("dragstart",dragStart);
        tile.addEventListener("dragover",dragover);
        tile.addEventListener("dragleave",dragleave);
        tile.addEventListener("dragenter",dragEnter);
        tile.addEventListener("drop",dragDrop);
        tile.addEventListener("dragend",dragEnd);
        document.getElementById("pieces").append(tile);
    }

}
// drag functions
function dragStart(){ 
    currTile=this;        // refers to img was clicked       
}
function dragover(e){
    e.preventDefault();
}
function dragEnter(e){
    e.preventDefault();
}
function dragleave(){

}

function dragDrop(){
    otherTile=this;
}
function dragEnd(){
    if(currTile.src.includes("blank")){
        return ;
    }
    let currImg=currTile.src;
    let otherImg=otherTile.src;    
    currTile.src=otherImg;
    otherTile.src = currImg; 
    if (currTile.src != otherTile.src) {
    turns +=1;
        document.getElementById("turns").innerHTML = turns;

    }
}
let ans=[];
for(let i=1;i<=64;i++)
    {
        ans.push(i.toString());
    }
    // let z=;
// for(let i=0 ; i<64;i++)

    
            // tile.src=;


var element =document.getElementById("board");
var children =element.children;
for(var i=0 ; i<children.length;i++)
{
    var child = children[i];
    child.src="./Images/"+ans[i]+".jpg";
}

document.getElementById("board").children[6].src="./Images/"+ans[6]+".jpg";
function fun1(){
    // for(let i=0;i<36;i++)
    //     {

    //     }
    
    if (document.getElementById("board").children[62].src.search("2.jpg")!=-1) {
        document.getElementById("score").innerHTML="Score: 100";
    }else{
        document.getElementById("score").innerHTML="Score: 0";
    }


}