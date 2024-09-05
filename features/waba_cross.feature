# features/waba_cross.feature

Feature: Atendimento via Waba Cross

  Scenario: Receive and view a new protocol via "Waba Cross"
    Given I am logged into the customer service interface
    And a new protocol is sent via "Waba Cross" by a customer
    When I check the protocols section
    Then I should see the new protocol in the protocol list
    And the protocol should be displayed correctly with the relevant information
