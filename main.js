var tbody = document.getElementById('tbody');
var trynimasPerModala = document.querySelector('.taip');
var pasleptiModala = document.querySelector('.ne');
var editModalas = document.querySelector('.duomenu_modalas');
var prideti = document.getElementById('prideti');
var atmesti = document.getElementById('atmesti');
function duomenys(event) {
    // standartines formos veiksmas yra perkrauti puslapi, 
    // arba nueiti i puslapi, kur nurodo action, taip pat yra ir su nuorodom <a href="">, 
    // o event.preventDefault(); neperkrauna puslapio.
    event.preventDefault();
    var data = document.getElementById('data').value;
    var nr = document.getElementById('nr').value;
    var atstumas = document.getElementById('atstumas').value;
    var laikas = document.getElementById('laikas').value;
    if (data <= 0 || nr <= 0 || atstumas <= 0 || laikas <= 0) {
        alert('truksta duomenu');
    } else{
            var m = [data, nr, atstumas, laikas];
            tr = document.createElement ('tr');
        }
        // SUKURTI MYGTUKA, KURIO PAGALBA REIKES ISTRINTI EILUTE, taip pat kuriame mygtuka redaguoti
        var redaguoti = document.createElement ('button');
        var trinti = document.createElement ('button');
        // MYGTUKO UZRASAS
        redaguoti.innerHTML = 'Redaguoti';
        trinti.innerHTML = 'Trinti';
        // PRISKYRIAU MYGTUKUI KLASE, KAD GALECIAU SUSTILIUOTI ir toliau naudoti pagal klase
        redaguoti.classList.toggle ('redaguoti');
        trinti.classList.toggle('trinti');
        for (var i = 0; i < m.length; i++) {
            var td = document.createElement ('td');
            td.innerHTML = m[i];
            tr.appendChild(td);
            tr.appendChild(trinti);
            tr.appendChild(redaguoti);
        }
     // // Atliekant funkcija sis eventas isvalo duomenis is inputu, ji reikia rasyti gale, nes issitrins ir suvesti duomenys
    event.target.reset();
    tbody.appendChild(tr);
};
var tr;
var modalas = document.querySelector('.modaloFonas');
tbody.addEventListener('click', function(event){
    tr = event.target.parentElement;
    tr.classList.toggle('spalva');
    // su siuo if istriname butent ta eilute, kurioje yra mygtukas, nes priskirta klase
    // tr.remove();
    if(event.target.classList.contains('trinti')){
        modalas = document.querySelector('.modaloFonas');
        modalas.classList.add('modalasVeikia');
    
    } 
});
trynimasPerModala.addEventListener('click', function(){
    // nuimama aktyvaus modalo veikimo klase, kad jis isnyktu
modalas.classList.remove('modalasVeikia');
// istrinama eilute
tr.remove();
});
pasleptiModala.addEventListener('click', function(){
    modalas.classList.remove('modalasVeikia');
});
tbody.addEventListener('click', function(e){
if (e.target.classList.contains('redaguoti')){
    editModalas.classList.add('modalasVeikia');
    }
});
atmesti.addEventListener('click', function(){
    editModalas.classList.remove('modalasVeikia');
})











// tbody.addEventListener('click', function (e) {
//     if (e.target && e.target.classList.contains('redaguoti')) {
//         duomenuModal.classList.add('modal_overlay--active');
//         editIndex = e.target.parentElement.parentElement.rowIndex - 1;
//         // sudedam duomenis is masyvo i modalo inputus
//         data.value = duomenys[editIndex][0];
//         numeris.value = duomenys[editIndex][1];
//         laikas.value = duomenys[editIndex][2];
//         kelias.value = duomenys[editIndex][3];
//         mainModalButton.innerHTML = 'Redaguoti';
//         redaguotiDuomenis = true;
//     }
// })



// REDAGUOTI PRADZIA
// // Atidarom edit modala
// tbody.addEventListener('click', function (e) {
//     if (e.target.classList.contains('edit')) {
//         // Atidarom edit modal
//         editModal.style.display = 'block';
//         // Susirandam eilute
//         editIndex = e.target.parentElement.rowIndex - 1;
//         editData.value = duomenys[editIndex][0];
//         editNumeris.value = duomenys[editIndex][1];
//         editKelias.value = duomenys[editIndex][2];
//         editLaikas.value = duomenys[editIndex][3];
//     }
// });
// // Atsaukiam elemento redagavima ir uzdarom modala
// cancelEdit.addEventListener('click', function (e) {
//     editModal.style.display = 'none';
// });
// // Redaguojam elementa
// confirmEdit.addEventListener('click', function (e) {
//     const redaguotiDuomenys = [editData.value, editNumeris.value, parseInt(editKelias.value), parseInt(editLaikas.value)];
//     console.log(redaguotiDuomenys);
//     duomenys.splice(editIndex, 1, redaguotiDuomenys);
//     spausdinti();
//     editModal.style.display = 'none';
// });
