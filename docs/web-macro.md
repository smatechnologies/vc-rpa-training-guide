---
sidebar_label: 'Web Macro - Download File'
hide_title: 'false'
---


# Web Macro - Download File

Create a Web Macro Task to download a file

## Objective 

Use an RPA Web Macro to download a file from a website

:::tip [Walkthrough Video](../static/img/vs-web-macro-download-file.mp4)

:::

## Instructions 

1. On the left, right-click and create a ‘container’ (Add folder to root) to categorize the workflow to be created. Name the folder as **TestJob**

<a href="img/Picture1.png" target="_blank"><img src="img/Picture1.png" width="500" /></a>

2. Toward the top, click **Add Job**

<a href="img/Picture2.png" target="_blank"><img src="img/Picture2.png" width="500" /></a>


3. Name the Job as **Quick Start Test**

<a href="img/Picture3.png" target="_blank"><img src="img/Picture3.png" width="500" /></a>

4. Select the **Tasks** tab

<a href="img/Picture4.png" target="_blank"><img src="img/Picture4.png" width="500" /></a>

5. Click **Add > Net > Web Macro**

<a href="img/Picture5.png" target="_blank"><img src="img/Picture5.png" width="500" /></a>

6. Select the **Web Macro** tab

<a href="img/Picture6.png" target="_blank"><img src="img/Picture6.png" width="500" /></a>

7. Select the **Actions** tab

<a href="img/Picture7.png" target="_blank"><img src="img/Picture7.png" width="500" /></a>

8. Select **Record** (Bottom right-hand corner of the window)

<a href="img/Picture8.png" target="_blank"><img src="img/Picture8.png" width="500" /></a>

9. Enter the desired URL at the top and  browse to the page

<a href="img/Picture9.png" target="_blank"><img src="img/Picture9.png" width="500" /></a>

10. As you click through the webpage, a blue outline around the selected object will indicate that the step is saved. You will see the steps populate in the right Sequence frame as they are clicked.
    - In this case, we are navigating to `https://github.com/smatechnologies`.
    - Next click on the **opcon-web-installer** link.
    - Scroll to and click the **latest release** link.
    - Click the **OpConWebIntaller.zip** file link.

<a href="img/Picture10.png" target="_blank"><img src="img/Picture10.png" width="500" /></a>

11. Modify the folder and other parameters if necessary and click **OK**.

<a href="img/Picture11.png" target="_blank"><img src="img/Picture11.png" width="500" /></a>

12. Click the **Stop** button in the bottom right hand corner of the client to stop the recording.

<a href="img/Picture12.png" target="_blank"><img src="img/Picture12.png" width="500" /></a>

13. Select **Yes** to save the recorded actions.

<a href="img/Picture13.png" target="_blank"><img src="img/Picture13.png" width="500" /></a>

14. Click on **Test Run** to test the workflow.

<a href="img/Picture14.png" target="_blank"><img src="img/Picture14.png" width="500" /></a>

15. Verify that the expected file was downloaded during the worklfow test run.

<a href="img/Picture15.png" target="_blank"><img src="img/Picture15.png" width="500" /></a>

16. The Job and task are now saved to your queue.

<a href="img/Picture16.png" target="_blank"><img src="img/Picture16.png" width="500" /></a>


