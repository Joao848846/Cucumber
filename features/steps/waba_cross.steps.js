const { Given, When, Then } = require("@cucumber/cucumber");

// Passo existente
Given("I am logged into the customer service interface", function () {
  console.log("Logged into the customer service interface");
});

// Novo passo adicionado
Given("a new protocol is sent via {string} by a customer", function (string) {
  // Aqui você pode adicionar a lógica para simular o envio de um novo protocolo via "Waba Cross"
  console.log(`New protocol sent via ${string} by a customer`);
});

// Passos existentes
When("I check the protocols section", function () {
  console.log("Checking the protocols section");
});

Then("I should see the new protocol in the protocol list", function () {
  console.log("New protocol is in the list");
});

Then(
  "the protocol should be displayed correctly with the relevant information",
  function () {
    console.log("Protocol information is correct");
  }
);
