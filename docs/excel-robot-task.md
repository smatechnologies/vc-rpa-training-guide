---
sidebar_label: 'Excel Robot Task Exercise'
hide_title: 'false'
---

# Creating an Excel Robot Task

Use an Excel Task to pull Excel Cell data from a workbook and transfer it to a new/different workbook

:::tip [Walkthrough Video](../static/img/vs-excel-robot.mp4)

:::

## Instructions

:::info Note

Depending on how your Windows Service is run, you may need to run the Excel Application as an Administrator in this exercise.

:::

## Set up the Excel Source and Target Files for the Exercise

#### Set Up the Excel Source File

1. Create a new Excel Workbook.
2. Name the Excel Workbook **rpasourcebook**.
3. In Cell A1 enter **Bank**.
4. In Cell B1 enter **Rate**.
5. In Cell A2 enter **Amegy**.
6. In Cell B2 enter **8**.
7. Save the Workbook.

#### Set up the Excel Target File

1. Create a new Excel Workbook.
2. Name the Excel Workbook **rpatargetbook**
3. In Cell A1 enter **Bank**.
4. In Cell B1 enter **Rate**.
5. In Cell A2 enter **Amegy**.
6. Leave Cell B2 blank.
7. Save the Workbook.

## Create the Robot Job

### Create a New Job and a User Variable

1. Launch the VisualCron Tray Client.
2. Create a new Job and name it **excel-robot**
3. Navigate to the **Main settings** tab.
4. In the left hand corner of the Main Settings tab, click the **Variables** button.
5. In the  Variables screen, click **Add**.
6. Name the Variable **interest_rate**.
7. Leave the Variable value blank.
8. Click the **Add** button.

### Create the RPA Task to Get Cell Data


1. In the **Edit Job** screen, select the **Tasks** tab.
2. Select an **Excel Cell - Get Cell** task.
3. In the **Get Cell** edit screen, select the **Excel - Get cell** tab.
4. In the **Select Excel file** line, enter or click to select the file path for the desired Excel workbook - in this instance use the path for the `rpasourcebook.xlsx` file previously created.
5. In the **Cell Coordinates** section, select the desired cells by position, or reference - in this case use **Cell reference** `B2`.
6. Select **OK** in the bottom right hand corner to save the task.

### Create the RPA Task to Set the User Variable

1. In the **Edit Job** screen, select the **Tasks** tab.
2. Select an **Internal - Set User Variable** task.
3. Click the checkbox for **Translate value to constant in Variable when running**.
4. In the **Set User Variable** edit screen, select the **Set User Variable**  tab.
5. Set the name of the desired Variable (in this instance use `interest_rate`).
6. Set the value of the desired Variable (in this instance use `{TASK(PrevTask|StdOut)}`). This variable will call the value of the last task action in the Job, thus giving us the value of the cell retreived in the **Get Cell** action.
7. Select **OK** in the bottom right hand corner to save the task.

### Create the RPA Task to Set Cell Data

1. In the **Edit Job** screen, select the **Tasks tab.
2. Select an **Excel - Set Cell** task.
3. In the **Set Cell** edit scren, select the **Excel - Set Cell** tab.
4. In the **source** tab, for the input value, enter the name of the user variable created previously - in this instance use `{USERVAR(interest_rate)}`.
5. Select the **File filter** subtab.
6. In the **Include file mask** line, enter or click to select the desired target workbook - in this instance use the `rpatargetbook.xlsx` file previously created. The Folder path about should be auto-populated once the file is selected. 
7. Select the **Target** subtab.
8. Select the desired cell coordinated by position or reference - in this case use **Cell reference** `B2`.
9. Select **OK** in the bottom right hand corner to save the task.


### Test the Robot

1. In the main Client tray menu, highlight the excel-robot job and click **Run Job** in the actions menu above the job list.
2. The Robot will run the sequence.
3. Each task should finish with an **Exit code** of `0`.
4. Verify that the sequence has completed successfully by checking that the interest rate variable has been set in **rpatargetbook** cell **B2** and that it matches the value in **rpasourcebook** cell **B2**.
