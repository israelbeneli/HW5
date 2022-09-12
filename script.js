let col = [];
for (let i=0 ; i < 8 ; i++)
{
    let arrey = [];
    for(let j=0 ; j < 8 ; j++){
        if ((j+i)%2 == 0)
        {
            arrey.push("black");
        }
        else
        {
            arrey.push("white");
        }
    }
    col.push(arrey);
}