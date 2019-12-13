
console.log("How many bills would you like to sort?");
var bills = readline();
console.log("How many people were part of at least in one of those bills?");
var total_people = readline();

let debts = []
let spending = []

let j = 1

while (bills >= j){
    let i = 1
    console.log("What was the total cost of bill number " + j + " ?");
    let cost_of_bill = readline();
    while (total_people >= i){
        let e = 0
        let a = 1
        for (let q = 0; q < total_people; q++){
            console.log("How much money was paid by person " + a + " for bill number " + j + "?");
            let plir = readline();
            spending.append(plir)
            if (spending[q] === 'e'){
                e = e + 1
                a = a + 1
            }   
            else{
                a = a + 1
            }
        }
        cost_per_person = cost_of_bill / (total_people - e);

        for (let w = 0; w < total_people ; w++){ 
            if (spending[w] == 'e'){
                B[j-1][i-1] = 0
                i = i + 1
            }
            else{
                B[j-1][i-1] = spending[w] - cost_per_person
                i = i + 1
            }
        }
            spending = []
        j = j + 1
        }
}



function listCalculation(lista){
    let k = 0
    let l = 1

    while (l != len(lista)){
        if (lista[k] > 0){
            if (lista[l] >= 0){
                l = l + 1
            }
            else if (lista[l] < 0){
                if (lista[k] > abs(lista[l])){
                    lista[k] = lista[k] - abs(lista[l])
                    lista[l] = 0
                    l = l + 1
                }
                else{
                    lista[l] = lista[k] + lista[l]
                    lista[k] = 0
                    k = k + 1
                }
            }
        else if (lista[k] == 0){
            k = k + 1
            if (lista[l] < 0){
                l = l
            }
            else{
                l = l + 1
            }
        }
        else{
            if (lista[l] <= 0){
                    l = l + 1
            }
            else if (lista[l] > 0){
                if (abs(lista[k]) < lista[l]){
                    print("Person", k+1 , "owes", abs(lista[k]), "to person", l+1 )
                    lista[l] = lista[k] + lista[l]
                    lista[k] = 0
                    k = k + 1
                }
                else{
                    print("Person", k+1 , "owes", abs(lista[l]), "to person", l+1 )
                    lista[k] = lista[k] + lista[l]
                    lista[l] = 0
                    l = l + 1
                }
            }
        }
        }
    }
}