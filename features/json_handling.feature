@tagName
Feature: JSON Handling

  Scenario: Deserialize JSON String
    Given JSON String
    When Serialize JSON to Profile Model
    Then Validate Name and Address are correct
