Feature: User Authentication

  Scenario: Successful login with valid credentials
    Given I open the Parabank login page
    When I login with username "john" and password "demo"
    Then I should be redirected to the dashboard

  Scenario: Login fails with invalid credentials
    Given I open the Parabank login page
    When I login with username "invalid" and password "wrong"
    Then I should see an error message
