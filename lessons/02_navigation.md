---
layout: default
title: 2. Moving Around (cd, pwd, ls)
---

# 2. Moving Around (cd, pwd, ls)

In the command line, you're always "inside" a folder (directory). Understanding where you are and how to navigate is fundamental to using the terminal effectively.

For this course, we assume you're using **Ubuntu on WSL** on a Windows machine, and that you've already created the `~/cli-practice` folder from the setup lesson.

Think of it like this: when you use File Explorer, you click through folders. In the command line, you use commands to move around instead.

In this lesson, we'll learn the three essential navigation commands:
- `pwd` – **P**rint **W**orking **D**irectory (Where am I?)
- `ls` – **L**i**s**t (What's here?)
- `cd` – **C**hange **D**irectory (Go somewhere else)

---

## Understanding File Paths

Before we dive into commands, let's understand how computers organize files.

### The File System Tree

Your (Linux/WSL) file system is organized like an upside-down tree:
- The **root** is at the top (represented by `/`)
- **Directories** (folders) branch off from the root
- Files and subdirectories live inside directories

**Example structure (Ubuntu / WSL):**
```
/                           (root)
├── home/                   (directory)
│   └── tpaisie/           (your user directory)
│       ├── Documents/
│       │   ├── reports/
│       │   └── data.xlsx
│       ├── Desktop/
│       └── Downloads/
├── usr/
└── etc/
```

### Absolute vs Relative Paths

**Absolute path**: The complete path from the root directory
- Ubuntu/WSL: `/home/tpaisie/Documents/reports`

**Relative path**: The path from your current location
- If you're in `/home/tpaisie/`, then `Documents/reports` is the relative path
- If you're in `/home/tpaisie/Documents/`, then `reports` is the relative path

### Special Path Symbols

| Symbol | Meaning | Example |
|--------|---------|---------|
| `.` | Current directory | `./file.txt` (file in current dir) |
| `..` | Parent directory (one level up) | `cd ..` (go up one level) |
| `~` | Your home directory | `cd ~` (go to home) |
| `/` | Root directory (or path separator) | `/home/tpaisie` |

---

## Where am I? (`pwd`)

`pwd` stands for "Print Working Directory". It shows you the full absolute path of where you currently are.

### Usage

```bash
pwd
```

### Example Output

**In Ubuntu/WSL (and Mac/Linux):**
```
/home/tpaisie/Documents/projects
```

### When to use `pwd`

- When you first open a terminal and want to know where you are
- After using `cd` several times and you're not sure of your location
- When writing scripts that need to know the current directory

**Pro tip**: Most terminals show your current directory in the prompt, but `pwd` gives you the full absolute path, which can be helpful.

---

## What's here? (`ls`)

`ls` stands for "list". It shows you the files and folders in your current directory (or any directory you specify).

### Basic Usage

```bash
ls
```

**Example output:**
```
Desktop    Documents    Downloads    Pictures    projects
```

### Useful Options

#### `ls -l` (Long format - detailed view)

Shows detailed information: permissions, owner, size, and modification date.

```bash
ls -l
```

**Example output:**
```
drwxr-xr-x  5 tpaisie  staff   160 Nov 15 10:30 Documents
drwxr-xr-x  3 tpaisie  staff    96 Nov 14 09:15 Downloads
-rw-r--r--  1 tpaisie  staff  2048 Nov 16 14:20 report.txt
```

- Lines starting with `d` are directories (folders)
- Lines starting with `-` are files
- The size is shown in bytes
- Date and time show last modification

#### `ls -a` (All files, including hidden)

Shows hidden files (files that start with `.`).

```bash
ls -a
```

**Example output:**
```
.    ..    .bashrc    .gitignore    Documents    Downloads
```

Hidden files often contain configuration settings.

#### `ls -lh` (Human-readable sizes)

Combines `-l` with human-readable file sizes (KB, MB, GB instead of bytes).

```bash
ls -lh
```

**Example output:**
```
drwxr-xr-x  5 tpaisie  staff   160B Nov 15 10:30 Documents
-rw-r--r--  1 tpaisie  staff   2.0K Nov 16 14:20 report.txt
-rw-r--r--  1 tpaisie  staff   1.5M Nov 16 15:45 data.xlsx
```

#### `ls -lah` (Combining options)

You can combine multiple options! This shows all files in long format with human-readable sizes.

```bash
ls -lah
```

#### `ls -t` (Sort by modification time)

Shows most recently modified files first.

```bash
ls -lt
```

#### `ls -R` (Recursive - show subdirectories)

Lists everything in the current directory AND all subdirectories.

```bash
ls -R
```

**Warning**: This can produce a lot of output if you have many subdirectories!

### List a Specific Directory

You don't have to be in a directory to see what's inside it:

```bash
ls Documents
ls ~/Desktop
ls /usr/local
```

---

## Go somewhere else (`cd`)

`cd` stands for "Change Directory". It's how you move from one folder to another.

### Basic Usage

```bash
cd directory_name
```

### Common `cd` Commands

#### Go to a subdirectory

```bash
cd Documents
cd projects
cd Documents/projects/my-project
```

#### Go up one level (to parent directory)

```bash
cd ..
```

#### Go up multiple levels

```bash
cd ../..          # Go up two levels
cd ../../..       # Go up three levels
```

#### Go to your home directory

```bash
cd ~
# or just
cd
```

On Ubuntu/WSL and Mac/Linux, both work.

#### Go to the root directory

```bash
cd /
```

#### Go to the previous directory

```bash
cd -
```

This is like a "back" button—it takes you to wherever you were before.

#### Use absolute paths

```bash
cd /home/tpaisie/Documents
```

#### Combine with `..` and subdirectories

```bash
cd ../Downloads                      # Go up one level, then into Downloads
cd ../../projects/new-project        # Go up two levels, then navigate down
```

### Tab Completion Saves Time!

Remember: you don't have to type full directory names. Start typing and press `Tab`:

```bash
cd Doc[Tab]  →  cd Documents/
```

If multiple directories start with the same letters, press `Tab` twice to see all options.

---

## Putting It All Together: Navigation Workflow

Here's a typical workflow combining all three commands:

```bash
# Where am I?
pwd
# Output: /home/tpaisie

# What's here?
ls
# Output: Desktop  Documents  Downloads  Pictures

# Go into Documents
cd Documents

# Where am I now?
pwd
# Output: /home/tpaisie/Documents

# What's in here?
ls
# Output: reports  presentations  data

# See details
ls -lh
# Output: (detailed file listing)

# Go into reports
cd reports

# Go back up one level
cd ..

# Go back to home directory
cd ~
```

---

## Practice Exercises

Try these exercises in your **Ubuntu/WSL terminal**, using the `~/cli-practice` folder you created in the setup lesson.

### Exercise 1: Explore Your Practice Folder
```bash
cd ~/cli-practice   # Go to your practice folder
pwd                 # Confirm where you are
ls                  # See what's there
ls -lh              # See details with file sizes
```

If the folder is empty, that's fine.

### Exercise 2: Create and Navigate Subfolders
```bash
cd ~/cli-practice   # Ensure you're in the practice folder
mkdir data reports  # Create two subdirectories
ls                  # Confirm they exist
cd data             # Go into data
pwd                 # Check your location
cd ..               # Go back up to cli-practice
pwd
```

### Exercise 3: Use Relative Paths
```bash
cd ~/cli-practice   # Start at practice folder
cd data             # Go into data
cd ../reports       # Go up one level, then into reports
pwd                 # See where you ended up
```

### Exercise 4: List Hidden Files
```bash
cd ~                # Go to home directory
ls                  # See visible files
ls -a               # See ALL files (including hidden)
```

### Exercise 5: Jump Around
```bash
cd /                # Go to root
pwd                 # Check location
cd ~/cli-practice   # Jump to practice folder
cd -                # Jump back to root
cd -                # Jump back to cli-practice
```

---

## Common Mistakes & How to Fix Them

### "No such file or directory"

**Problem**: You tried to `cd` into a directory that doesn't exist.

```bash
cd Documnets
# bash: cd: Documnets: No such file or directory
```

**Solution**: 
- Check spelling (use `ls` to see what's actually there)
- Use Tab completion to avoid typos
- Remember that names are case-sensitive on Mac/Linux

### Spaces in Directory Names (VERY Important)

This is one of the most common gotchas for new CLI users.

**Problem**: Directory names with spaces behave like **separate words** unless you quote or escape them.

```bash
cd My Documents
# bash: cd: My: No such file or directory
```

The shell thinks you are trying to `cd` into **two** separate things: `My` and `Documents`.

**Safe patterns (pick one and stick with it):**

```bash
cd "My Documents"        # 1) Use double quotes around the whole path
cd My\ Documents         # 2) Escape the space with a backslash
cd My[Tab]               # 3) Type part of the name, then press Tab
```

For this course, whenever you see a folder like `My Documents` or `BFM Reports FY25`, **assume you must either quote it or escape spaces**:

```bash
cd "BFM Reports FY25"
cd BFM\ Reports\ FY25
```

If a `cd` command ever fails and you see `No such file or directory`, first check:

- Does the folder name contain spaces?
- Did you forget quotes or backslashes?

When in doubt, use **Tab completion** – it will add the right quoting/escaping for you.

### "Permission denied"

**Problem**: You don't have permission to access that directory.

```bash
cd /root
# bash: cd: /root: Permission denied
```

**Solution**: Some directories are restricted. You may need administrator privileges (use `sudo` in Ubuntu/WSL or Mac/Linux). For this course, you can usually just work in your home folder and `~/cli-practice`.

### Lost in the File System

**Problem**: You've used `cd` many times and don't know where you are.

**Solution**: 
```bash
pwd               # See where you are
cd ~              # Go home and start over
```

---

## Tips & Tricks

### 1. **Use Tab Completion Religiously**
It's faster and prevents typos. Get in the habit of pressing Tab after typing a few characters.

### 2. **Use `cd -` to Toggle Between Two Directories**
If you're working between two directories, `cd -` lets you quickly switch back and forth.

### 3. **Combine `ls` and `cd` with Tab**
```bash
ls Do[Tab]        # See what's in Documents without going there
cd Do[Tab]        # Then navigate there
```

### 4. **Use `ls -lt | head` to See Recent Files**
Shows only the 10 most recently modified files:
```bash
ls -lt | head
```

### 5. **Create Bookmarks with Environment Variables**
In your shell configuration file, you can set shortcuts:
```bash
export REPORTS=~/Documents/reports
cd $REPORTS       # Quickly jump to reports
```

---

## What You've Learned

✅ How file systems are organized (tree structure)  
✅ The difference between absolute and relative paths  
✅ Special path symbols (`.`, `..`, `~`, `/`)  
✅ How to check your location with `pwd`  
✅ How to list files and folders with `ls` (and useful options like `-l`, `-a`, `-h`)  
✅ How to navigate directories with `cd`  
✅ Common navigation patterns and workflows  
✅ How to troubleshoot common navigation errors  

---

## Quick Reference

| Command | What it does | Example |
|---------|-------------|---------|
| `pwd` | Show current directory | `pwd` |
| `ls` | List files and folders | `ls` |
| `ls -l` | List with details | `ls -l` |
| `ls -a` | List all (including hidden) | `ls -a` |
| `ls -lh` | List with human-readable sizes | `ls -lh` |
| `cd directory` | Go into directory | `cd Documents` |
| `cd ..` | Go up one level | `cd ..` |
| `cd ~` or `cd` | Go to home directory | `cd ~` |
| `cd /` | Go to root directory | `cd /` |
| `cd -` | Go to previous directory | `cd -` |

---

## Next Steps

Now that you can navigate your file system, you're ready to start working with files and directories!

Continue to: **[Lesson 3: Working with Files & Directories](03_files-and-dirs.md)**

---

## Cheat Sheet: Navigation Scenarios

**"I want to go to my home directory"**
```bash
cd ~
```

**"I want to see what files are in my current folder"**
```bash
ls
```

**"I want to see detailed info about files, including sizes"**
```bash
ls -lh
```

**"I want to see hidden files"**
```bash
ls -a
```

**"I'm in Documents and want to go to Desktop"**
```bash
cd ../Desktop
```

**"I want to go back to where I just was"**
```bash
cd -
```

**"I'm lost and want to start over from home"**
```bash
cd ~
pwd
ls
```
