---
sidebar_label: 'Web Macro - Download File'
hide_title: 'false'
---


# Web Macro - Download File


Use an RPA Web Macro to download a file from a website

:::tip [Walkthrough Video](../static/img/vs-web-macro-download-file.mp4)

:::

## Instructions 

1. On the left, right-click and create a ‘container’ (Add folder to root) to categorize the workflow to be created. Name the folder as **TestJob**

![](../static/img/Picture1.png)

2. Toward the top, click **Add Job**

![](../static/img/Picture2.png)


3. Name the Job as **Quick Start Test**

![](../static/img/Picture3.png)

4. Select the **Tasks** tab

![](../static/img/Picture4.png)

5. Click **Add > Net > Web Macro**

![](../static/img/Picture5.png)

6. Select the **Web Macro** tab

![](../static/img/Picture6.png)

7. Select the **Actions** tab

![](../static/img/Picture7.png)

8. Select **Record** (Bottom right-hand corner of the window)

![](../static/img/Picture8.png)

9. Enter the desired URL at the top and  browse to the page

![](../static/img/Picture9.png)

10. As you click through the webpage, a blue outline around the selected object will indicate that the step is saved. You will see the steps populate in the right Sequence frame as they are clicked.
    - In this case, we are navigating to `https://github.com/smatechnologies`.
    - Next click on the **opcon-web-installer** link.
    - Scroll to and click the **latest release** link.
    - Click the **OpConWebIntaller.zip** file link.

![](../static/img/Picture10.png)

11. Modify the folder and other parameters if necessary and click **OK**.

![](../static/img/Picture11.png)

12. Click the **Stop** button in the bottom right hand corner of the client to stop the recording.

![](../static/img/Picture12.png)

13. Select **Yes** to save the recorded actions.

![](../static/img/Picture13.png)

14. Click on **Test Run** to test the workflow.

![](../static/img/Picture14.png)

15. Verify that the expected file was downloaded during the worklfow test run.

![](../static/img/Picture15.png)

16. The Job and task are now saved to your queue.

![](../static/img/Picture16.png)

