---
layout: default
title: 0. Windows Setup
---

# 0. Windows Setup (PowerShell)

This short setup page is for our team at Technomics/Navy BFM, where everyone is on Windows. The goal is simple:

- Make sure you can open a terminal
- Use a modern shell (PowerShell)
- Be ready to follow the rest of the lessons

You only need to do this once per machine.

---

## 1. Open PowerShell (or Windows Terminal)

You have two good options. Either is fine for this course.

### Option A: Windows PowerShell

1. Press **Windows key**.
2. Type **"PowerShell"**.
3. Click **Windows PowerShell**.

You should see a window that looks like:

```powershell
PS C:\Users\yourname>
```

### Option B: Windows Terminal (Recommended)

If you have **Windows Terminal** installed:

1. Press **Windows key**.
2. Type **"Windows Terminal"**.
3. Open it and make sure the tab says **PowerShell**.

If it opens something else (like Command Prompt), use the menu in the title bar to switch to **PowerShell**.

---

## 2. Check Your Current Folder

In PowerShell, type this and press **Enter**:

```powershell
pwd
```

You should see something like:

```text
Path
----
C:\Users\yourname
```

This tells you **where** you are in the file system. We’ll use this a lot.

---

## 3. Create a Practice Folder

We’ll use a simple folder for all examples so we don’t touch anything important.

In PowerShell, run:

```powershell
cd C:\Users\yourname\Documents
mkdir cli-practice
cd cli-practice
```

Replace `yourname` with your actual Windows username if needed. After this, check where you are:

```powershell
pwd
```

You should see a path ending in `Documents\\cli-practice`.

If `cd C:\Users\yourname\Documents` doesn’t work, try just:

```powershell
cd ~\Documents
mkdir cli-practice
cd cli-practice
```

(`~` is shorthand for your home folder.)

---

## 4. Create a Test File

Let’s confirm everything works by creating a small text file.

From inside `cli-practice`, run:

```powershell
echo "Hello from the command line" > hello.txt
ls
```

You should see `hello.txt` listed.

If you open File Explorer and browse to **Documents → cli-practice**, you’ll see the same file there. This is the bridge between clicking and the command line.

---

## 5. Summary

You’re ready for the rest of the course if:

- You can open **PowerShell** or **Windows Terminal**
- `pwd` and `ls` work without errors
- You created a `cli-practice` folder and `hello.txt` inside it

If something didn’t work, take a screenshot or copy the error text and share it with the team so we can troubleshoot together.

When you’re set up, continue to:

**[Lesson 1: What is the Command Line?](01_what-is-cli.md)**
