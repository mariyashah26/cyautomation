import 'cypress-file-upload'
describe('File Uploads', () => {


it("Single file upload", ()=>{
   cy.visit('https://the-internet.herokuapp.com/upload')

    cy.get('#file-upload').attachFile('seo-content-writing.jpg') //using aatachFile method
    cy.get('#file-submit').click();
    cy.wait(5000);
    cy.get("div[class='example'] h3").should('have.text','File Uploaded!')
})


it("File upload- Rename", ()=>{

        cy.visit('https://the-internet.herokuapp.com/upload')
     
         cy.get('#file-upload').attachFile({filePath:'seo-content-writing.jpg', fileName:'myFile.jpg'}) //using aatachFile method
         cy.get('#file-submit').click();
         cy.wait(5000);
         cy.get("div[class='example'] h3").should('have.text','File Uploaded!')
     })

    



it("File upload- Drag and Drop", ()=>{

    cy.visit('https://the-internet.herokuapp.com/upload')
     
         cy.get('#drag-drop-upload').attachFile('seo.png',{subjectType: 'drag-n-drop'});
         cy.wait(5000)
         cy.get('#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span').contains('seo.png')
         
})


it("Multiple files upload", ()=>{

    cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
    cy.get('#filesToUpload').attachFile(['seo-content-writing.jpg', 'seo.png'])
    cy.wait(5000)

    cy.get(':nth-child(6) > strong').should('contain.text', 'Files You Selected:')


})

it.skip("File upload- Shadow DOM", ()=>{    //Shadow Dom= Dom inside Dom

     
cy.visit('https://www.htmlelements.com/demos/fileupload/shadow-dom/')
cy.get('.smart-browse-input',{includeShadowDom:true}).attachFile('seo.png');

cy.wait(5000);

cy.get('.smart-item-name', {includeShadowDom:true}).contains('seo.png');



})











 })