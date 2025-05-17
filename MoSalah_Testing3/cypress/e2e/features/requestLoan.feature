Feature: Loan Request

  Scenario: Successfully request a loan from Parabank
    Given I am logged in to the Parabank application
    And I have more than one account
    When I request a loan of "5000" with a down payment of "1000"
    Then I should see the loan request processed successfully


  Scenario: Deny a loan request with invalid or excessive values
    Given I am logged in to the Parabank application
    And I have more than one account
    When I request a loan of "1000000" with a down payment of "50"
    Then I should see that the loan request was denied
