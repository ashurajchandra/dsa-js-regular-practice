// let objects = [{
//     name: 'Geeks',
//     id: 10
// }, {
//     name: 'GeeksForGeeks',
//     id: 10
// }, {
//     name: 'Geeks',
//     id: 20
// }, {
//     name: 'Geeks',
//     id: 10
// }];

// const mymap = new Map();

// const result = objects.filter((item,index)=>{
//     console.log("item",item)
//     const element = mymap.get(item.name);

//    if(element){
//     console.log("element",mymap.get(item.name),mymap.get(item.id))
//     if(item.id<element.id){
//         return false
//     }else{
//         mymap.delete(item.name)
//         mymap.set(item.name , item.id)
//         return true
//     }
//    }
//    mymap.set(item.name, item.id)
// })

// console.log("result",result)

let objects = [{
	name: 'Geeks',
	id: 10
}, {
	name: 'GeeksForGeeks',
	id: 10
}, {
	name: 'Geeks',
	id: 20
}, {
	name: 'Geeks',
	id: 10
}];

let mymap = new Map();

let unique = objects.filter(el => {
	const val = mymap.get(el.name);
    console.log("val",val)
    console.log("el",el.id,el)
	if (val) {
		if (el.id < val) {
			mymap.delete(el.name);
			mymap.set(el.name, el.id);
			return true;
		} else {
			return false;
		}
	}
	mymap.set(el.name, el.id);
    console.log("mymap",mymap)
	return true;
});

console.log(unique);
