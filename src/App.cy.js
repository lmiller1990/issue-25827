import App from "./App.vue";

describe("<App />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(App);
    cy.get("#amount").clear().type("100");
    cy.get("#amount").invoke("val").should("eq", "100");
  });
});
