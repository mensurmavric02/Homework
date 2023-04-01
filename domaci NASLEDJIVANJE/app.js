//Napraviti klasu Osoba koja sadrzi ime i prezime
//Napraviti klasu Student koja nasledjuje Osoba i ima jedan properti visak, a to je fakultet
//Klasa student ima metodu prijavaIspita()
//Klasa student treba da ispisuje ime i prezime studenta i fakultet
//Primer: "Ja sam Pera Peric sa fakulteta Racunarskih nauka"



class Osoba{
    constructor(ime, prezime){
        this.ime = ime
        this.prezime = prezime
    }
} 

class Student extends Osoba{
    constructor(ime, prezime, fakultet){
        super(ime, prezime)
        this.fakultet = fakultet
    }
    
    prijavaIspita(){
        return`I'm  ${this.ime} ${this.prezime}, I'm going to ${this.fakultet} college.  `
    }
}

const display = (contet) => {
    console.log(contet);
}

const student = new Student("Anes", "Medjedovic", "Internacinalni")
display(student.prijavaIspita())
