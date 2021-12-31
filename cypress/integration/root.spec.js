describe('The Home page (root url /', () => {
  it('Successfully loads', () => {
    cy.visit('/')
  })
})

describe('The Home page (root url /)with - .then()', () => {
  it('successfully loads', () => {
    cy.visit('/')
      .then((response) => {
        console.log('Root Response=>', response);
      });
  })
})
