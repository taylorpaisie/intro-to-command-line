---
layout: default
title: 1. What is the Command Line?
---

# 1. What is the Command Line?

The **command line** (also called *terminal*, *console*, or *shell*) is a text-based interface for interacting with your computer. Instead of clicking through folders and menus with your mouse, you type commands directly.

For our Navy BFM / Power BI work, think of it as a fast, repeatable way to:
- Get data files where you need them
- Clean or reorganize folders full of CSVs
- Run the same steps every time before you refresh a report

---

## Why Learn the Command Line?

You might be thinking: *"Why would I type commands when I can just click in File Explorer or Power BI?"* Here's why it's worth it for our team:

### 1. **Speed & Efficiency**
Once you know a few commands, tasks that take multiple clicks can be done in seconds:
- Rename 100 monthly files like `BFM_FY25_M01.csv`, `BFM_FY25_M02.csv`, etc.
- Search across thousands of CSVs or text files for a specific PE or UIC
- Quickly see which files changed before a data refresh

### 2. **Automation & Repeatability**
Repetitive steps can be turned into a simple script and rerun whenever needed:
- Pre-process or copy data files before refreshing a Power BI report
- Standardize file names and folder layouts for new reporting cycles
- Run the same data-cleanup steps every month or quarter

### 3. **Power & Precision**
Many professional tools we rely on are built around the command line:
- Git (version control) for tracking changes to models, measures, and documentation
- Python/R scripts and data pipelines that feed Power BI
- Database and server tools used by IT and data teams

### 4. **Universal Skill**
Whether you're on Windows, Mac, or Linux, command line skills transfer. It's the common language across all operating systems and teams (devs, data engineers, analysts).

### 5. **Troubleshooting & Transparency**
When something breaks, the command line often gives more detail:
- Check where a file actually lives when Power BI can't find it
- Inspect logs or error output from scripts and tools
- Run quick checks without waiting on a full UI to load

---

## Common Names: Terminal, Console, Shell, Command Line

You'll hear several terms used interchangeably. Here's what they mean:

- **Command Line Interface (CLI)**: The general concept of typing commands instead of using a graphical interface
- **Terminal**: The application/window where you type commands (like "Terminal" on Mac or "Command Prompt" on Windows)
- **Shell**: The program that interprets your commands (e.g., bash, zsh, PowerShell)
- **Console**: Often used synonymously with terminal

**Don't worry about the terminology**—they all refer to that text-based window where you type commands.

---

## What Does It Look Like?

When you open a terminal, you'll see something like this:

**On Windows (PowerShell):**
```powershell
PS C:\Users\username>
```

**On Mac/Linux (bash/zsh):**
```bash
username@computername:~$
```

This is called the **prompt**. It's waiting for you to type a command.

After the prompt, you type a command and press Enter:

```bash
ls
cd projects
pwd
```

The computer executes your command and shows you the result, then displays the prompt again, ready for the next command.

---

## Your First Commands

Let's try some basic commands. Don't worry if you don't understand them yet—we'll cover them in detail in the next lessons.

### `pwd` - Print Working Directory
Shows you where you currently are in the file system:

```bash
pwd
```

**Example output:**
```
/Users/tpaisie/Documents
```

### `ls` - List
Shows you what files and folders are in your current location:

```bash
ls
```

**Example output:**
```
reports    data    scripts    README.md
```

### `echo` - Print Text
Displays whatever text you give it:

```bash
echo "Hello, command line!"
```

**Example output:**
```
Hello, command line!
```

---

## Command Structure

Most commands follow this pattern:

```bash
command [options] [arguments]
```

- **command**: What you want to do (e.g., `ls`, `cd`, `mkdir`)
- **options**: Modify how the command works (usually start with `-` or `--`)
- **arguments**: What to apply the command to (files, folders, text, etc.)

**Example:**
```bash
ls -l Documents
```
- `ls` is the command (list files)
- `-l` is an option (show detailed/long format)
- `Documents` is the argument (list the Documents folder)

---

## Opening the Terminal on Your System

### Windows
You have several options:

1. **PowerShell** (Recommended for Windows)
   - Press `Windows + X` and select "Windows PowerShell" or "Terminal"
   - Or search for "PowerShell" in the Start menu

2. **Command Prompt**
   - Search for "cmd" in the Start menu
   - (Older, more limited than PowerShell)

3. **Git Bash** (If you have Git installed)
   - Gives you Linux-style commands on Windows
   - Search for "Git Bash" in the Start menu

4. **WSL (Windows Subsystem for Linux)**
   - If you have it installed, search for "Ubuntu" or "WSL"
   - Provides a full Linux environment on Windows

### macOS
- Press `Command + Space` to open Spotlight
- Type "Terminal" and press Enter
- Or find it in Applications → Utilities → Terminal

The default shell is **zsh** (on newer macOS) or **bash** (on older versions).

### Linux
- Press `Ctrl + Alt + T` (on most distributions)
- Or search for "Terminal" in your applications menu

The default shell is usually **bash**.

---

## Tips for Beginners

### 1. **Tab Completion is Your Friend**
Start typing a command or filename and press `Tab`—the terminal will try to complete it for you. This saves time and prevents typos!

```bash
cd Doc[Tab]  →  cd Documents/
```

### 2. **Up Arrow = Command History**
Press the `↑` (up arrow) key to cycle through commands you've typed before. No need to retype!

### 3. **Don't Panic!**
If something goes wrong or a command seems stuck:
- Press `Ctrl + C` to cancel/stop the current command
- Type `exit` and press Enter to close the terminal window

### 4. **Case Matters**
On Mac and Linux, `Documents` and `documents` are different. Windows is usually case-insensitive, but it's good practice to match the case exactly.

### 5. **Spaces Matter**
If a folder name has spaces, you need to either:
- Put it in quotes: `cd "My Documents"`
- Or escape the space: `cd My\ Documents`

---

## What You've Learned

✅ What the command line is and why it's useful  
✅ Different names for the command line (terminal, console, shell)  
✅ What the prompt looks like  
✅ Basic command structure  
✅ How to open the terminal on your operating system  
✅ A few starter commands (`pwd`, `ls`, `echo`)  
✅ Essential tips for using the terminal  

---

## Practice Exercise

Before moving to the next lesson, try this:

1. **Open your terminal**
2. **Type `pwd` and press Enter** - Where are you?
3. **Type `ls` and press Enter** - What files do you see?
4. **Type `echo "I can use the command line!"` and press Enter**

Congratulations! You've just executed your first commands. 🎉

---

## Next Steps

Ready to learn how to move around your file system? Continue to:

**[Lesson 2: Moving Around (cd, pwd, ls)](02_navigation.md)**

---

## Quick Reference

| Command | What it does |
|---------|-------------|
| `pwd` | Show current directory |
| `ls` | List files in current directory |
| `echo "text"` | Print text to the screen |
| `Ctrl + C` | Cancel current command |
| `exit` | Close the terminal |
| `↑` (up arrow) | Show previous command |
| `Tab` | Auto-complete command/filename |
