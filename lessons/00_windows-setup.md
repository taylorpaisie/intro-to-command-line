---
layout: default
title: 0. Windows + WSL Setup
---

# 0. Windows + WSL Setup (Ubuntu)

This setup page is for our team at Technomics/Navy BFM, where everyone is on Windows.

In this course we’ll use **WSL (Windows Subsystem for Linux)** with **Ubuntu**. That gives us a standard Linux command line (bash) while still working on our Windows machines.

> **Important:** Installing WSL requires **administrator approval/rights** on your laptop. If you don’t have admin access, you’ll need IT (or whoever manages your machines) to approve or perform the install.

Goal:

- Install WSL + Ubuntu (if needed)
- Open an Ubuntu terminal
- Create a `cli-practice` folder inside WSL

You only need to do this once per machine.

---

## 1. Check if WSL/Ubuntu is Already Installed

1. Press **Windows key**.
2. Type **"Ubuntu"**.
3. If you see an app like **Ubuntu** or **Ubuntu 22.04 LTS**, click it.

If a terminal window opens and you see something like:

```bash
username@machinename:~$
```

then you already have WSL + Ubuntu. Skip to **Step 3**.

If you don’t see Ubuntu, continue to the next step to install WSL.

---

## 2. Install WSL + Ubuntu (One-Time, Admin Required)

This step **must** be done by someone with administrator rights on your machine (you or IT). If you’re not sure whether you have admin access, assume you **don’t** and coordinate with IT before proceeding.

1. Press **Windows key**.
2. Type **"PowerShell"**.
3. Right-click **Windows PowerShell** and choose **"Run as administrator"**.
4. In the PowerShell window, run:

```powershell
wsl --install
```

5. If prompted, restart your computer.
6. After restart, Windows will finish installing Ubuntu and ask you to create a **UNIX username** and **password**. This is just for WSL (not your Navy network account).

When it’s done, you should have an **Ubuntu** app available from the Start menu.

---

## 3. Open Ubuntu (WSL)

Each time you want to use the command line for this course:

1. Press **Windows key**.
2. Type **"Ubuntu"**.
3. Open the **Ubuntu** app.

You should see a prompt like:

```bash
username@machinename:~$
```

This is your **Linux home folder** inside WSL.

---

## 4. Check Your Current Folder

In Ubuntu, type this and press **Enter**:

```bash
pwd
```

You should see something like:

```text
/home/yourname
```

This tells you **where** you are in the WSL file system. We’ll use this a lot in later lessons.

---

## 5. Create a Practice Folder in WSL

We’ll use a simple folder for all examples so we don’t touch anything important.

In Ubuntu, run:

```bash
mkdir -p ~/cli-practice
cd ~/cli-practice
pwd
```

You should see a path ending in `/home/yourname/cli-practice`.

From now on, whenever lessons mention a folder, assume we’re working in this `~/cli-practice` folder inside WSL.

---

## 6. (Optional) View the Folder from Windows

If you want to see the same files in File Explorer:

1. In Ubuntu, type:

```bash
explorer.exe .
```

2. File Explorer will open, showing the WSL folder. You’ll see `cli-practice` there.

This is a nice way to verify that the command line and Windows Explorer are looking at the same files.

---

## 7. Create a Test File

Let’s confirm everything works by creating a small text file.

From inside `~/cli-practice`, run:

```bash
echo "Hello from WSL" > hello.txt
ls
```

You should see `hello.txt` listed.

If you ran `explorer.exe .` earlier, you’ll see `hello.txt` in File Explorer too.

---

## 8. Summary

You’re ready for the rest of the course if:

- You can open the **Ubuntu (WSL)** terminal
- `pwd` and `ls` work without errors
- You created a `~/cli-practice` folder and `hello.txt` inside it

If something didn’t work, take a screenshot or copy the error text and share it with the team so we can troubleshoot together.

When you’re set up, continue to:

**[Lesson 1: What is the Command Line?]({{ "/lessons/01_what-is-cli" | relative_url }})**
