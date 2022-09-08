# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here
Ticket 1: 
Title: Allow facilities to assign agentId when adding new Agents
Acceptance criteria: Facility Users are able to assign custom agentId when adding new Agents
Time/effort estimates: 
  - Work effort: 3 (Low)
  - Overall complexity: 2 (Low)
  - Risk: 4 (Medium) There is a risk in that existing agents in the database will have no agentId fields.
  - Deployment: 4 (Medium) We will need to create a migration script to update all existing agents with their corresponding agentId.
Implementation details: 
  - Add agentId field/column to the Agent object/table
  - Update the add agent endpoint to accept one more parameter in the request body 
  - Update the form used by facilities admin user to create new agents.

Ticket 2: 
Title: Allow facilities to assign agentId when updating existing Agents
Acceptance criteria: Facility Users are able to assign custom agentId updating existing  Agents records
Time/effort estimates: 
  - Work effort: 2 (Low)
  - Overall complexity: 1 (Low)
  - Risk: 1 (Low) There is a risk in that existing agents in the database will have no agentId fields.
  - Deployment: 1 (Low) 
Implementation details: 
  - Update the edit agent endpoint to accept one more parameter in the request body 
  - Update the form used by facilities admin user to edit existing agents.

Ticket 3:  
Title: Update getShiftsByFacility to return assigned agentId in report
Acceptance criteria: getShiftsByFacility should include assigned custom agentId in returned List
Time/effort estimates: 
  - Work effort: 2 (Low)
  - Overall complexity: 2 (Low)
  - Risk: 1 (Low)
  - Deployment: 1(Low)
Implementation details:
  - Update the getShiftsByFacility function to include assigned custom agentId in returned objects

Ticket 4:  
Title: Add assigned agentId to generateReport to be included in PDF conversion
Acceptance criteria: Generated PDF report should include assigned custom agentId for each shift
Time/effort estimates: 
  - Work effort: 2 (Low)
  - Overall complexity: 2 (Low)
  - Risk: 1 (Low)
  - Deployment: 1(Low)
Implementation details:
  - Update the generateReport function to include assigned custom agentId when generating PDF report document