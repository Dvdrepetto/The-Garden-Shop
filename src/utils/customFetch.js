import data from './data';

let is_ok = true;


let customFetch = () => {
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
        if (is_ok){
                resolve(data);
        }else{
            reject("Error");
        }
    },2000);
    });
}

export default customFetch;