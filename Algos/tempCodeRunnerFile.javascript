/* 
  Given an array of objects / dictionaries to represent new inventory,
  and an array of objects / dictionaries to represent current inventory,
  update the quantities of the current inventory
  
  if the item doesn't exist in current inventory, add it to the inventory
  return the current inventory after updating it.
*/

const newInv1 = [
    { name: "Grain of Rice", quantity: 9000 },
    { name: "Peanut Butter", quantity: 50 },
    { name: "Royal Jelly", quantity: 20 },
];
const currInv1 = [
    { name: "Peanut Butter", quantity: 20 },
    { name: "Grain of Rice", quantity: 1 },
];
const expected1 = [
    { name: "Peanut Butter", quantity: 70 },
    { name: "Grain of Rice", quantity: 9001 },
    { name: "Royal Jelly", quantity: 20 },
];



const newInv2 = [];
const currInv2 = [{ name: "Peanut Butter", quantity: 20 }];
const expected2 = [{ name: "Peanut Butter", quantity: 20 }];



const newInv3 = [{ name: "Peanut Butter", quantity: 20 }];
const currInv3 = [];
const expected3 = [{ name: "Peanut Butter", quantity: 20 }];

/**
 * @typedef {Object} Inventory
 * @property {string} Inventory.name The name of the item.
 * @property {number} Inventory.quantity The quantity of the item.
 */

/**
 * Updates the current inventory based on the new inventory.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<Inventory>} newInv A shipment of new inventory.
 *    An array of inventory objects.
 * @param {Array<Inventory>} currInv
 * @return The currInv after being updated.
 */
function updateInventory(arr1, arr2) {
    let newInv = {};
    let shipment = arr2;
    let result =[];
    // populate inventory with arr1 kv pairs
    for(let item of arr1){
        newInv[item[1]] = item[0]
    }
    //update or add items to inventory
    for(let item of shipment){
        if(newInv.hasOwnProperty(item[1])){
            newInv[item[1]]+= item[0]
        }else{
            newInv[item[1]] = item[0]
        }
    }
    
    //re arrange from k v to  v k pairs
    for(let item of Object.entries(newInv)){
    result.push([item[1],item[0]])
    }
    //This will not sort alphabetically
    result.sort((a,b)=>a[1]-b[1])
    
    //niether will this
    // result.sort((a,b)=>a[1][0] - b[1][0])
    
    // this works to sort by quantity ascending
    // result.sort((a,b)=>a[0]-b[0])
    
    console.log(result)
    
    return result;
    }

console.log(updateInventory(newInv1, newInv2))
// console.log(updateInventory(newInv2, currInv2))
// console.log(updateInventory(newInv3, currInv3))

