console.group('Getters and setters');
var certification = new Certification('AI-102', 2023, 'Microsoft');
certification.about();

certification.year = 2024;
certification.about();
console.groupEnd();

