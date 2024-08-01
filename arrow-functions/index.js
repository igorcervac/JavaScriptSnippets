class Certification{
    title;
    year;

    constructor(title, year){
        this.title = title;
        this.year = year;
    }

    about = () => this.title + ' ' + this.year;
}

const certification = new Certification('AZ-400', 2024);
console.log(certification.about());

const counter = {
    count: 0,
    inc(){
        setTimeout(() => {
            this.count++;
            console.log(this.count);
        }, 300);
    },
    dec(){
        setTimeout(() => {
            this.count--;
            console.log(this.count);
        }, 300);
    }
};

counter.inc();
counter.dec();
  
