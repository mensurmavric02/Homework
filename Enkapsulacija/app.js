//Potrebno je implementirati sistem upravljanja radnicima u nekoj firmi. Svi radnici imaju zajednička svojstva (ime, prezime, godine),
//ali postoje i neke razlike među radnicima,
//npr. menadžer i običan radnik imaju različite nadležnosti i plate.
//Potrebno je kreirati klase Radnik i Menadžer koje nasleđuju zajednička svojstva iz klase Osoba,
//a zatim dodati i neke dodatne metode i svojstva.
//Osim toga, sve privatne varijable treba da budu enkapsulirane.

class Osoba{
    constructor(ime, prezime, godine, plata){
        let _ime = ime
        let _prezime = prezime
        let _godine = godine
        let _plata = plata

        this.getIme = function(){
            return _ime
        }
                    
        this.getPrezime = function(){
            return _prezime
        }
            
        this.getGodine = function (){
            return _godine
        }

        this.getPlata = function (){
            return _plata
        }
            
        this.setIme = function(){
            _ime = ime
        }
            
        this.setPrezime = function(){
            _prezime = prezime
        }
            
        this.setGodine = function(){
            _godine = godine
        }
        
        this.setPlata = function (){
            _plata = plata
        }
    }
}

console.log("Radnik");
// ovde je za radnika
class Radnik extends Osoba{
    constructor(ime, prezime, godine, plata){
        super(ime, prezime, godine, plata)
    }
}

const radnik = new Radnik ("Edin", "Mavric", "20 godina", "100 000 RSD")
console.log(`${radnik.getIme()} ${radnik.getPrezime()} ima ${radnik.getGodine()} radi kao programer i prima platu u iznosu od ${radnik.getPlata()}.`);

console.log("------------------------------");
console.log("Menadzer");

// ovde je za menadzera
class Menadžer extends Osoba{
    constructor(ime, prezime, godine, plata){
        super(ime, prezime, godine, plata)
    }
}

const menadzer = new Menadžer ("Demir", "Subasic", "25 godina", "250 000 RSD")
console.log(`${menadzer.getIme()} ${menadzer.getPrezime()} ima ${menadzer.getGodine()} radi kao menadzer i prima platu u iznosu od ${menadzer.getPlata()}.`);