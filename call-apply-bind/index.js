const certifications = [{id:1, title:'AZ-204', year:2023}, {id:2,title:'AZ-400', year:2023}];

function printCertification(company){
    console.log(this.title, this.year, 'by', company);
}

const [az204, az400] = certifications;

function callExample(company){
    console.group('Call example');
    printCertification.call(az204, company);
    printCertification.call(az400, company);
    console.groupEnd();
}

function applyExample(company){
    console.group('Apply example');
    printCertification.apply(az204, [company]);
    printCertification.apply(az400, [company]);
    console.groupEnd();
}

function bindExample(company){
    console.group('Bind example');
    printCertification.bind(az204)(company);
    printCertification.bind(az400)(company);
    console.groupEnd();
}

(() => {
    console.info('Certifications');
    callExample('Microsoft');
    applyExample('Microsoft');
    bindExample('Microsoft');
})();


