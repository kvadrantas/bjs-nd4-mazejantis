var skaiciai = [45, 7, -4, -7, 42, 7, 1, 0, 9];
console.log('\n\nOriginalas: ', skaiciai);
// surusiuoti masyvo elementus didejimo tvarka
// surusiuoti masyvo elementus mazejimo tvarka
var dezute;
var skLength = skaiciai.length;

for (var i = 0; i < skLength; i++) {
    max = i;
    for (var j = i + 1; j < skLength; j++) {
        if(skaiciai[j] > skaiciai[max]) {
            dezute = skaiciai[max];
            skaiciai[max] = skaiciai[j];
            skaiciai[j] = dezute;
        }
    }
}
console.log('\n\nSurūšiuotas mažėjančiai:');
console.log(skaiciai);