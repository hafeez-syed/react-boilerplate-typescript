describe('App E2E', () => {
  it('should assert that true is equal to true', () => {
    expect(true).to.equal(true);
  });

  it('hardcoded data', () => {
    cy.server();
    cy.route('GET', '/api/users?page=2', {
      page: 2,
      per_page: 3,
      total: 12,
      total_pages: 4,
      data: [
        {
          id: 4,
          first_name: 'Eve',
          last_name: 'Holt',
          avatar:
            'https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg'
        },
        {
          id: 5,
          first_name: 'Charles',
          last_name: 'Morris',
          avatar:
            'https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg'
        },
        {
          id: 6,
          first_name: 'Tracey',
          last_name: 'Ramos',
          avatar:
            'https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg'
        }
      ]
    }).as('load');

    cy.visit('https://reqres.in');

    cy.wait('@load').then(xhr => {
      assert.isNotNull(xhr.response.body.data, '1st API call has data');
    });
  });

  it('should have a header', () => {
    // it will default to http://localhost:8070 as baseURL defined in cypress.json
    cy.visit('/');

    cy.get('header p').should('have.text', 'Hello Company-Logo');
  });

  it('should increment and decrement the counter', () => {
    cy.visit('/');

    cy.get('main h1').should(
      'have.text',
      'React, Webpack, Babel, Dev-server Boilerplate !!!...'
    );

    cy.get('main h2').should('have.text', '0');

    cy.get('main button:first').click();
    cy.get('main h2').should('have.text', '1');
    cy.get('main button:first').click();
    cy.get('main h2').should('have.text', '2');

    cy.get('main button:last').click();
    cy.get('main h2').should('have.text', '1');
    cy.get('main button:last').click();
    cy.get('main h2').should('have.text', '0');
  });
});
