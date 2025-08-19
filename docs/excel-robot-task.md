---
sidebar_label: 'Excel Robot Task Exercise'
hide_title: 'false'
---

# Creating an Excel Robot Task

Use an Excel Task to pull Excel Cell data from a workbook and transfer it to a new/different workbook

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

### Create a Variable

1. Launch the VisualCron Tray Client.
2. Create a new Job and name it **excel-robot-task**
3. Navigate to the **Main settings** tab.
4. In the right hand corner of the Main Settings tab, click the **Job Variables** button.
5. In the  Variables screen, click **Add**.
6. Name the Variable **interest_rate_amegy**.
7. Leave the Variable value blank.
8. Click the **Add** button.

### Create the RPA Task to Read the Cell

4. Select an Excel **Open Workbook** task from the left menu and drag it into the **Sequence** window.
5. In the **File name** box enter the path to your created workbook (**rpasourcebook**).
6. Select an **Excel Cell - Get Cell Value** task from the left menu and drag it into the **Sequence** window below the **Open Workbook** task.
7. Click the **Click to select Excel element** link in the task window.
8. With the source workbook and sheet in focus,click on the cell you wish to retrieve the value from.
9. Hold down the CTRL button and left-click at the same time.
10. Back in the Edit Task Screen - Verify the Cell Address.
11. Select or verify the **Variable type** as **User**.
12. Select or verify the **Variable** as **interest_rate_amegy**.

### Create the RPA Task to Set the Cell 

1. Select an Excel **Open Workbook** task from the left menu and drag it into the **Sequence** window below the **Get Cell Value** task.
2. In the **File name** box enter the path to your created workbook (**rpatargetbook**).
3. Select an **Excel Cell - Set Cell Value** task from the left menu and drag it into the **Sequence** window below the **Open Workbook** task.
4. Click the **Click to select Excel element** link in the task window.
5. With the target workbook and sheet in focus, click on the cell you wish to set cell value on.
6. Hold down the CTRL button and left-click at the same time.
7. Back in the Edit Task Screen - Verify the Cell address.
8. Select or verify the **Value** as the **User Variable** `{USERVAR(interest_rate_amegy)}`.

### Save the Excel File

1. Select an Excel Workbook **Save Workbook** task from the left menu and drag it into the **Sequence** window below the **Set Cell Value** task.
2. Click the **Click to select Excel element** link in the task window.
3. Verify the Workbook name to save is correct.

### Test the Robot

1. Click **Test Run** in the bottom right hand corner of the Robot **Edit Taks** screen.
2. The Robot will run the sequence.
3. Verify that the sequence has completed successfully by checking that the interest rate variable has been set in **rpatargetbook** cell **B2** and that it matches the value in **rpasourcebook** cell **B2**.

### Save the Robot

1. Click **OK** in the bottom right hand corner of the Robot **Edit Task** screen.
2. Choose from **Save and Publish** or **Save as Draft**. In this case, choose **Save and Publish**.
3. Click **OK** to acknowledge that the Robot has been saved and published.