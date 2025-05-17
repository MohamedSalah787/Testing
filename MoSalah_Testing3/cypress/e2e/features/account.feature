Feature: Account Management

  Scenario: Open a new savings account
    Given I am logged in as "john" with password "demo"
    When I open a new account of type "SAVINGS"
    Then I should see the new account created
