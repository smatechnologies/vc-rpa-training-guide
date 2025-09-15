---
sidebar_label: 'Web Macro Exercise - Download File'
hide_title: 'true'
---


## Web Macro Exercise - Download File


#### Use an RPA Web Macro to download a file from a website

:::tip [Walkthrough Video](../static/img/vs-web-macro-download-file.mp4)

:::

## Instructions 

### Create the Web Macro Job and Task

1. In the RPA Tray Client, click **Add Job**
2. Name the Job as **Quick Start Test**
3. Select the **Tasks** tab
5. Click **Add > Net > Web Macro**

### Record the Web Macro Actions

1. Select the **Web Macro** tab
2. Select the **Actions** tab
3. Select **Record** (Bottom right-hand corner of the window)
4. Enter the desired URL at the top and  browse to the page
5. As you click through the webpage, a blue outline around the selected object will indicate that the step is saved. You will see the steps populate in the right Sequence frame as they are clicked.
    - In this case, we are navigating to `https://github.com/smatechnologies`.
    - Next click on the **opcon-web-installer** link.
    - Scroll to and click the **latest release** link.
    - Click the **OpConWebIntaller.zip** file link.
6. Modify the folder and other parameters if necessary and click **OK**.
7. Click the **Stop** button in the bottom right hand corner of the client to stop the recording.
8. Select **Yes** to save the recorded actions.

### Test Run and Verify File Download 

1. Click on **Test Run** to test the workflow.
2. Verify that the expected file was downloaded during the worklfow test run.



