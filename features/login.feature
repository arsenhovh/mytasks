Feature: Login functionality in Ebay Website


  Scenario Outline: Login negative

    Given I am on the "signin" page
    When  I login with "<username>"
    Then  I should compare "<massage>" with error message

    Examples:
      | username           | password      | massage                   |
      | 27arsn277@gmail.cm | gamil.com2012 | Oops, that's not a match. |

  Scenario Outline: password negative

    Given I am on the "signin" page
    When  I login with "<username>"
    Then  I should wait "10" seconds and continue write "<password>"
    Then  I should compare "<massage>" with error message

    Examples:
      | username            | password    | massage                   |
      | 27arsn277@gmail.com | gamil.com22 | Oops, that's not a match. |

  Scenario: Login positive

    Given I am on the "signin" page
    When  I login with "27arsn277@gmail.com"
    Then  I should wait "10" seconds and continue write "gamil.com2012"
    Then  I should see a flash message saying "You are logged in"
