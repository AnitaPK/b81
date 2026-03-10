function printSquare(n){
    for(i=1;i<=n;i++){
        line = ''
        for(j=1; j<=n;j++){
            line+='* '
        }
        console.log(line)
    }
}
printSquare(5)

//                       i        j          line
// 1st ite of i          1                    ''
//     j 1st ite         1.       1           '* '
//       2nd             1        2           '* * '
//       3rd             1.       3           '* * * '
//       4th             1.       4           '* * * * '
//       5th             1        5           '* * * * * '  1st row
//       6th             1        6


function printRightAngleTriangle(n){
    for(i=1;i<=n;i++){
        line = ''
        for(j=1; j<=i;j++){
            line+='* '
        }
        console.log(line)
    }
}
printRightAngleTriangle(5)



function printInvertedTriangle(n){
    for(i=1;i<=n;i++){
        line = ''
        for(j=1; j<=n-i+1;j++){
        // for(j=n; j<=1; j--){
            line+='* '
        }
        console.log(line)
    }
}
printInvertedTriangle(5)