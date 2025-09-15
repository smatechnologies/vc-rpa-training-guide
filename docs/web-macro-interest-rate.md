---
sidebar_label: 'Web Macro Exercise - Get Interest Rate'
hide_title: 'true'
---

## Web Macro Exercise - Get Interest Rate

#### Use an RPA Web Macro to pull an interest rate from a bank website


:::tip [Walkthrough Video](../static/img/vs-web-macro-get-interest-rate.mp4)

:::

## Instructions 

### Create the Job and Task

1. In the RPA Tray Client, click **Add Job**.
2. Within the new Job add a new **Web Macro Task**

### Create a User Variable

1. Navigate to the **Variables** section (bottom left of the interface).
2. Click **Add a User Variable**.
3. Name the variable: **30YearFixedRate**.
4. Set the initial value to **TEST**.
5. Click **Add** to create the variable.
6. Confirm the variable appears with the correct name and value.
7. Click **Close**.

### Record the Automation Steps

1. Navigate to **Web Macro > Actions** to view the Action Sequence

*You have two options:*

:::info

In this exercise we will use the **Record Feature**

:::

**Drag and Drop**: Manually drag actions from the left panel to the right sequence panel.

*or* 

**Record Feature** (*Recommended*):

2. Click the Record button.
3. If a new window opens on another screen, drag it into view.
4. Begin recording your actions.

### Navigate to the Target Website

1. In the recording window, go to citi.com.

Observe that:
- Actions are logged on the right.
- As you hover over elements, OpCon RPA highlights what it will capture.

### Capture the Mortgage Rate

1. Navigate to **Home Lending**.
2. Click on 'View Purchase Rates', scroll to find the 30-year fixed rate.
3. Right-click the rate and select **Add Extract Data Action**.
4. On the **Extract data** tab, select and confirm the element (e.g., “InnerText: 6.75”) is correctly identified.
5. Select the **Destination** tab and set the destination to the 30 year fix rate variable.
6. Click **OK** to confirm.
7. **Stop** the recording.

### Save and Test

1. **Save** your automation.
2. Check the variable — it should still show test.
3. Run the automation by clicking **Test run**:
4. Watch OpCon RPA step through the process.
5. It should navigate to the site, find the rate, and extract it.
6. After completion, check the variable again — it should now contain the actual rate value.