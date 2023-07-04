# Frontend Challenge

## Setup Instructions

1. Clone this repository
2. cd into the /dragoonis-tech-test directory
3. Type the following command to install the dependencies and run the project

```
yarn install && yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

**This technical test aims to evaluate the candidate's basic ability to work with a JS Framework by creating a basic dashboard, importing reusable components, and handling data / sanitization.**

_Please complete the following tasks and submit your code using a Git repository. Include clear instructions on how to set up and run your solution in a README.md file._

## Acceptance Criteria:

##### :wrench: The application should:

###### _Task 1: Basic Dashboard_

- [ ] Create a simple project using your chosen framework with the following structure:

```
- src
    - components
        - Dashboard
        - ReusableComponent
    - App
    - data.js
```

- [ ] Develop a basic dashboard in the `Dashboard` component that displays a list of items, importing the data from data.js. Use the provided wireframe as a reference for the layout and design.

###### _Task 2: Reusable (list item) Component_

- [ ] Build and use a reusable component to display the company information -> company name, previous names and sectors.
- [ ] Using the data imported to the dashboard, pass down the relevant required data for the component.
- [ ] The coloured blobs visually represent the sector of the company.
- [ ] Build a tooltip, when a user hovers over the question mark symbol, the black helper box appears and provides more information, when they hover away it disappears.
- [ ] Sanitise the data, decide how to handle any missing fields, special characters.

###### _Personal Additions Once Task Are Complete_

###### _Notes_

###### <ins>_If I had more time_</ins>
