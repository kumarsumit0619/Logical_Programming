//using simple function
const fileName= "invoice.xlsx";

function getFileExtension(fName){
    let i,count=0,res='';
    for(i=0;i<fName.length;i++){
        if( count==1 || fName.charAt(i) == '.'){
            count=1;
            res+=fName[i];
        }
    }
    return res;
}
console.log(getFileExtension(fileName));//.xlsx
