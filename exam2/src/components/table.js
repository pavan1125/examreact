export function Table(){
    let counter=1
    let rows=[]
    for(let i=0;i<5;i++){
        let row=[]
        for(let j=0;j<5;j++){
            row.push(counter++)
        }
        rows.push(row)
    }
    return rows
}

