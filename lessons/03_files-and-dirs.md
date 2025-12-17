---
layout: default
title: 3. Working with Files & Directories
---

# 3. Working with Files & Directories

In the last lesson you learned how to **move around** the file system with `cd`, `pwd`, and `ls`.

In this lesson you'll learn how to:

- Create and remove directories
- Create, view, and remove files
- Rename and move files and folders
- See file contents without opening Excel or another app

We’ll keep using your `~/cli-practice` folder in **Ubuntu on WSL**.

---

## Setup: Go to Your Practice Folder

First, make sure you’re in the right place:

```bash
cd ~/cli-practice
pwd
ls
```

If you don’t see it, go back to the setup lesson and recreate the folder.

---

## Creating Directories: `mkdir`

`mkdir` stands for **make directory**. It creates new folders.

### Basic usage

```bash
mkdir data
mkdir reports
```

Check the result:

```bash
ls
# You should see: data  reports  (plus anything you already had)
```

### Create nested folders with `-p`

```bash
mkdir -p data/FY25/monthly
```

The `-p` option creates parent folders as needed.

---

## Creating Files: `touch` and `echo`

There are many ways to create files. Two simple ones for practice:

### `touch` – create an empty file or update its timestamp

```bash
cd ~/cli-practice/data

touch bfm_fy25_m01.csv
touch bfm_fy25_m02.csv
ls
```

You now have two empty files that could later hold data.

### `echo` with redirection – create a file with some content

```bash
echo "PE,Amount" > sample.csv
ls
```

This creates `sample.csv` containing a single header line `PE,Amount`.

- `>` **overwrites** the file (or creates it if it doesn’t exist)
- `>>` **appends** to the file

```bash
echo "PE123,100000" >> sample.csv
```

---

## Viewing File Contents: `cat`, `less`, `head`, `tail`

You don’t always need Excel or a text editor. Use these to peek inside files.

### `cat` – show the whole file

```bash
cat sample.csv
```

Good for small files.

### `head` – show the first lines

```bash
head sample.csv       # First 10 lines by default
head -n 5 sample.csv  # First 5 lines
```

### `tail` – show the last lines

```bash
tail sample.csv       # Last 10 lines by default
tail -n 5 sample.csv  # Last 5 lines
```

These are handy when checking the top/bottom of CSVs used in reports.

---

## Moving and Renaming: `mv`

`mv` stands for **move**. It also renames files and directories.

### Rename a file

```bash
cd ~/cli-practice/data

mv bfm_fy25_m01.csv bfm_fy25_JAN.csv
ls
```

Same command, new name.

### Move a file into another folder

```bash
mv bfm_fy25_JAN.csv ../reports/
```

Now check:

```bash
ls              # In data
ls ../reports   # In reports
```

### Rename a folder

```bash
cd ~/cli-practice
mv reports reports_FY25
ls
```

---

## Copying Files: `cp`

`cp` stands for **copy**.

### Copy a single file

```bash
cd ~/cli-practice

cp data/sample.csv data/sample_backup.csv
ls data
```

### Copy into another directory

```bash
cp data/sample.csv reports_FY25/
ls reports_FY25
```

### Copy a directory recursively with `-r`

```bash
cp -r data data_backup
ls
```

The `-r` option means **recursive** – it copies the directory and everything inside it.

---

## Removing Files and Directories: `rm`, `rmdir`

Be careful here. There is **no recycle bin** in the terminal – when you delete, it’s gone.

### Remove a file

```bash
cd ~/cli-practice
rm data/sample_backup.csv
ls data
```

### Remove an empty directory

```bash
rmdir data_backup
```

This only works if the directory is empty.

### Remove a directory and everything inside it: `rm -r`

```bash
rm -r data_backup
```

- `-r` means recursive – delete the folder and everything in it.
- Many people also use `rm -rf` (force). **Avoid** that while learning; it will delete without asking.

For this course, keep deletions inside `~/cli-practice` so you don’t touch anything important.

---

## Putting It Together: Mini Workflow

Here’s a small practice scenario that looks like real work:

```bash
cd ~/cli-practice

# 1. Set up folders
mkdir -p data/FY25/monthly
mkdir -p reports_FY25

# 2. Create a fake data file
cd data/FY25/monthly
echo "PE,Month,Amount" > bfm_fy25_m01.csv
echo "PE123,JAN,100000" >> bfm_fy25_m01.csv

# 3. Inspect the file
head bfm_fy25_m01.csv

# 4. Move it to reports folder for use in a (future) model
mv bfm_fy25_m01.csv ~/cli-practice/reports_FY25/

# 5. Confirm where it is
ls ~/cli-practice/reports_FY25
```

This is the same kind of pattern you might use when preparing files before a Power BI refresh – just simplified.

---

## Practice Exercises

Try these exercises to build muscle memory. Do them in `~/cli-practice`.

### Exercise 1: Create a Simple Project Structure

```bash
cd ~/cli-practice
mkdir -p projects/bfm_dashboard/logs
ls
ls projects
```

### Exercise 2: Create and Inspect Files

```bash
cd ~/cli-practice/projects/bfm_dashboard

echo "Run,Status" > refresh_log.csv
echo "1,Success" >> refresh_log.csv

a) Use cat to view the file
b) Use head to show just the first line
c) Use tail to show the last line
```

### Exercise 3: Rename and Move

```bash
cd ~/cli-practice/projects/bfm_dashboard

mv refresh_log.csv refresh_log_FY25.csv
mv refresh_log_FY25.csv logs/

ls
ls logs
```

### Exercise 4: Copy and Clean Up

```bash
cd ~/cli-practice/projects/bfm_dashboard

cp logs/refresh_log_FY25.csv logs/refresh_log_backup.csv
ls logs

# Now remove the backup file
rm logs/refresh_log_backup.csv
ls logs
```

### Exercise 5: Reset the Practice Area (Optional)

If you want to start fresh:

```bash
cd ~
rm -r ~/cli-practice
mkdir ~/cli-practice
ls ~/cli-practice
```

---

## Quick Reference

| Command | What it does | Example |
|--------|---------------|---------|
| `mkdir` | Create a directory | `mkdir data` |
| `mkdir -p` | Create nested directories | `mkdir -p data/FY25/monthly` |
| `touch` | Create an empty file | `touch notes.txt` |
| `echo` + `>` / `>>` | Create/append to a file | `echo "Hello" > file.txt` |
| `cat` | Show full file | `cat file.txt` |
| `head` / `tail` | Show start/end of file | `head file.txt` |
| `cp` | Copy a file | `cp a.txt b.txt` |
| `cp -r` | Copy a directory | `cp -r data data_backup` |
| `mv` | Move/rename | `mv old.csv new.csv` |
| `rm` | Remove a file | `rm file.txt` |
| `rmdir` | Remove empty directory | `rmdir old_dir` |
| `rm -r` | Remove directory + contents | `rm -r old_project` |

---

## Next Steps

Now that you can create, inspect, move, and delete files and directories, you’re ready to learn how to **chain commands together** using redirection and pipes.

Continue to: **[Lesson 4: Redirection & Pipes](04_redirection-pipes.md)**
