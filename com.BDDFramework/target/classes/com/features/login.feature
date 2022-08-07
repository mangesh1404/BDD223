Feature: JBK offline application

@run1
Scenario: JBK logo test

Given user enters "file:///C:/Users/LENOVO/Downloads/Offline%20Website/index.html" 
Then  user should see JBK logo

@run2
Scenario Outline: register user test

When user click on register link
And  user should be on registration page
Then user fills "<name>" and "<mobile>" and "<email>" and "<pass>"
And  user click on submit
And  user handles an alert

Examples: 
|name|mobile|email|pass|
|mangesh|123456|mangesh@gmail.com|qwerty|

