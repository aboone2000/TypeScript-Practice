type StringOrNum = string | number
type objWithName = {name:string, uid: StringOrNum}
//This above is a way to create a Type before implementing it into an object. 

const logDetails = (uid: StringOrNum, item: string) => {
    console.log(`${item} has a uid of ${uid}`);
}

const greet = (user: objWithName ) =>{
    console.log(`${user.name} says hello`)
}

const greetAgain = (user: objWithName) => {
    console.log(`${user.name} says hello again`)
}
