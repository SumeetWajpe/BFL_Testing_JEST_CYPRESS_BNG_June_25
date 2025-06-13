/// <reference types="cypress" />
import { AppComponent } from '../../src/app/app.component';
describe('test suite for app.component', () => {
  it('should instantiate (mount) app component', () => {
    // 1st way
    // cy.mount(AppComponent); // instantiates & mounts the AppComponent in the browser

    // 2nd way
    // cy.mount(AppComponent, {
    //   declarations: [AppComponent],
    //   imports: [],
    //   providers: [],
    // });
    // cy.get('h1').should('contain', 'Hello, ang_cypress_component_testing');

    // 3rd way
    cy.mount(AppComponent, {
      componentProperties: {
        title: 'Dynamic Title',
      },
    });
    cy.get('h1').should('contain', 'Dynamic Title');
  });
});
