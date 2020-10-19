

function mynum(){
    var num1=parseInt(document.getElementById("num").value);
    var x=10;
    var y=16;
    for(var i=0; i<=x;i++)
    {
        for(var j=0; j<=y;j++)
        {
            if (i==0 || i==x || j==0 || j==y)
            {   document.write("* ");
            }else
                switch (num1) {
                    case 1:
                        mynum1(num1,i ,j,x,y);
                        break;
                    case 2:
                        mynum2(num1,i ,j,x,y);
                        break;
                    case 3:
                        mynum3(num1,i ,j,x,y);
                        break;
                    case 4:
                        mynum4(num1,i ,j,x,y);
                        break;
                    case 5:
                        mynum5(num1,i ,j,x,y);
                        break;
                    case 6:
                        mynum6(num1,i ,j,x,y);
                        break;
                    case 7:
                        mynum7(num1,i ,j,x,y);
                        break;
                    case 8:
                        mynum8(num1,i ,j,x,y);
                        break;
                    case 9:
                        mynum9(num1,i ,j,x,y);
                        break;
                    case 0:
                        mynum0(i ,j,x,y);
                        break;
                    default:
                        document.write("&nbsp;&nbsp;&nbsp;");
                }

        }
        document.write("<br/>");
    }}

let num,i,j,x,y;
function mynum1(num,i,j,x,y){
    if( i+j==11 && (j>=6 && j<=x) || j==x && (i>=1 && i<=x)){
        document.write(num+" ");
    }
    else
    {
        document.write("&nbsp;&nbsp;&nbsp;");
    }
}
function mynum2(num,i,j,x,y){
    if( i==1 && (j>=6 && j<=x) || j==x && (i>=1 && i<=x-5) ||
        i==x-5 && (j>=6 && j<=x) ||  j==x-4 && (i>=x-4 && i<=x) || i==x-1 && (j>=6 && j<=x)){
        document.write(num+" ");
    }
    else
    {
        document.write("&nbsp;&nbsp;&nbsp;");
    }
}
function mynum3(num,i,j,x,y){
    if( i==1 && (j>=6 && j<=x) || j==x && (i>=1 && i<=x-1) ||
        i==x-5 && (j>=6 && j<=x)  || i==x-1 && (j>=6 && j<=x)){
        document.write(num+" ");
    }
    else
    {
        document.write("&nbsp;&nbsp;&nbsp;");
    }
}
function mynum4(num,i,j,x,y){
    if( i+j==11 && (j>=6 && j<=x) || j==x && (i>=1 && i<=x-1) ||
        i==x-5 && (j>=6 && j<=x+1)){
        document.write(num+" ");
    }
    else
    {
        document.write("&nbsp;&nbsp;&nbsp;");
    }
}
function mynum5(num,i,j,x,y){
    if(i==1 &&(j>=6 && j<=x)|| j==6 && (i>=1 && i<=x-5) || j==x && (i>=x-5 && i<=x-1) ||
        i==x-5 && (j>=6 && j<=x) || i==x-1 && (j>=6 && j<=10)){
        document.write(num+" ");
    }
    else
    {
        document.write("&nbsp;&nbsp;&nbsp;");
    }
}
function mynum6(num,i,j,x,y){
    if(i==1 &&(j>=6 && j<=x)|| j==6 && (i>=1 && i<=x-1) || j==x && (i>=x-5 && i<=x-1) ||
        i==x-5 && (j>=6 && j<=x) || i==x-1 && (j>=6 && j<=10)){
        document.write(num+" ");
    }
    else
    {
        document.write("&nbsp;&nbsp;&nbsp;");
    }
}

function mynum7(num,i,j,x,y){
    if(i==1 &&(j>=6 && j<=x)|| j==x && (i>=1 && i<=x-1) ){
        document.write(num+" ");
    }
    else
    {
        document.write("&nbsp;&nbsp;&nbsp;");
    }
}

function mynum8(num,i,j,x,y){
    if(i==1 &&(j>=6 && j<=x)|| j==x && (i>=1 && i<=x-1) ||
        i==x-1 && (j>=6 && j<=10) || j==6 && (i>=1 && i<=x-1) ||
        i==x-5 && (j>=6 && j<=10)){
        document.write(num+" ");
    }
    else
    {
        document.write("&nbsp;&nbsp;&nbsp;");
    }
}

function mynum9(num,i,j,x,y){
    if(i==1 &&(j>=6 && j<=x)|| j==x && (i>=1 && i<=x-1) ||
        i==x-1 && (j>=6 && j<=10) || j==6 && (i>=1 && i<=x-5) ||
        i==x-5 && (j>=6 && j<=10)){
        document.write(num+" ");
    }
    else
    {
        document.write("&nbsp;&nbsp;&nbsp;");
    }
}

function mynum0(i,j,x,y){
    if(i==1 &&(j>=6 && j<=x)|| j==x && (i>=1 && i<=x-1) ||
        i==x-1 && (j>=6 && j<=10) || j==6 && (i>=1 && i<=x-1)){
        document.write("0 ");
    }
    else
    {
        document.write("&nbsp;&nbsp;&nbsp;");
    } }