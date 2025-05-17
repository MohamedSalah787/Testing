Feature: Update Contact Information

  Scenario: Successfully update the user's contact information
    Given I am logged in to the Parabank application
    When I update my contact information with new details
    Then I should see a confirmation that my information was updated
