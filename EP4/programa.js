var i,nu1, nu2;

nu1 = parseInt(prompt("INGRESAR NUMERO 1"));
nu2 = parseInt(prompt("INGRESAR NUMERO 2"));


nuMENOR = Math.min(nu1, nu2);
nuMAYOR = Math.max(nu1, nu2);

i = nuMENOR;

do {
if (i % 2 != 0) {
    resultado=i*i*i
    document.write("El cubo de  " +i+" es " +resultado +"<br>");
}
i++;
} while (i <= nuMAYOR);