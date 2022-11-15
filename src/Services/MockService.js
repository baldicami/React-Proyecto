import products from "../Data/Data";

function getItems(idCategory) {
    return new Promise ( (resolve) => {
        if(idCategory === undefined){
            setTimeout( () => {
                resolve(products);
            }, 2000);
        }else{
            setTimeout( () => {
                let itemsReq = products.filter( (item) => item.category === idCategory)
                resolve(itemsReq);
            }, 2000);
        }
    });
}

export function getSingleItem(paramId){
    return new Promise ( (resolve) => {
        let itemReq = products.find( (item) => item.id === Number(paramId))
        setTimeout( () => {
            resolve(itemReq);
        }, 2000);
    });
}

export default getItems;