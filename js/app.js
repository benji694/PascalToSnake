export const pascalToSnake = (str) => {
    if(typeof str != 'string'){
        return str.toString();
    }
    else{
        let array = str.split('');
        let caractèreSpeciaux = ['-', '_', "'", '@', '+', '-', '(', ')', '#', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
        for (let i = 0; i < array.length; i++) {
            if (array[i] == array[i].toUpperCase() && caractèreSpeciaux.indexOf(array[i]) == -1) {
                if(i == 0){
                    array[i] = array[i].toLowerCase();
                }
                else{
                    array[i] = '_' + array[i].toLowerCase();
                }
            }
        }
        let result = array.join('');
        return result;
    }
}
