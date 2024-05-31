function Certification(title, year, company){
    
    this.title = title;
    this.year = year;
    this.company = company;

    Object.defineProperty(this, 'description', {
        get: function(){
            return `${this.title} (${this.year}) by ${this.company}`;
        }
    });
    
    Object.defineProperty(this, 'year', {
        get: function(){
            return year;
        },
        set: function(value){
            if (value < 2000) {
                throw new Error('Invalid year');
            }
            year = value;
        }
    })
    
    this.about = function(){
        console.log(this.description);
    }
}

var certification = new Certification('AI-102', 2023, 'Microsoft');
certification.about();

certification.year = 2024;
certification.about();

