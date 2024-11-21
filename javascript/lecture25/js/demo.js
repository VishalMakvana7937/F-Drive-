let stu = {
    id : 2341,
    name : 'vishal',
    age : 19,
    college : 'BCA',
    contact : '90992 31730',
    count : ['c','c++','html','javascript','css']
}
console.log(stu);

for(const a in stu){
    console.log(a,"=",stu[a]);
    if(a == "count"){
        let g = stu[a].map(count => {
            return count;
        })
        console.log(g);
    }
}