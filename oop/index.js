function Certification(title, year, company){
    
    this.title = title;
    this.year = year;
    this.company = company;

    Object.defineProperty(this, 'description', {
        get: function(){
            return `${this.title} (${this.year}) by ${this.company}`;
        }
    }); 
    
    this.about = function(){
        console.log(this.description);
    }
}

var certification = new Certification('AI-102', 2024, 'Microsoft');
certification.about();
