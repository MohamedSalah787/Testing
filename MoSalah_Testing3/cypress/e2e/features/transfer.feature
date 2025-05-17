Feature: Fund Transfer

  Scenario: Successfully transfer funds between two different accounts
    Given I am logged in to the Parabank application
    And I open a new account to enable transfers
    When I transfer "100" from one account to another
    Then I should see the transfer completed successfully
