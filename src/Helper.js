export function getYearsDiference(year) {
    return new Date().getFullYear() - year;
}

export function calcularMarca(marca) {
    let incremento;
   switch (marca) {
       case 'europeo':
           incremento = 1.30;
           break;
       case 'americano':
           incremento = 1.15;
           break;
       case 'aiatico':
           incremento = 1.05;
           break;       
       default:
           break;
    }
    return incremento;
}
export function obtenerPlan(plan) { 
    return plan === 'basico' ? 1.20 : 1.50;
}
