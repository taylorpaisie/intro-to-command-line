---
layout: default
title: 5. Aliases & Simple Scripts
---

# 5. Aliases & Simple Scripts

So far, you’ve run commands one by one. In this lesson you’ll learn how to:

- Create **aliases**: short names for longer commands
- Create and run simple **shell scripts**
- Save a small, repeatable workflow you might actually use for BFM / Power BI work

We’ll keep using **Ubuntu on WSL** and your `~/cli-practice` folder.

---

## Temporary Aliases (Last Until You Close the Terminal)

An **alias** is a shortcut for a command or pipeline.

### Basic alias

```bash
alias ll='ls -lh'
```

Now typing:

```bash
ll
```

is the same as:

```bash
ls -lh
```

This alias only exists in the **current terminal session**. If you close Ubuntu and reopen it, it will be gone.

### Alias for your practice folder

```bash
alias ccli='cd ~/cli-practice'
```

Now you can quickly jump back to your practice folder:

```bash
ccli
pwd
```

---

## Permanent Aliases (Saved in Your Shell Config)

To keep aliases between sessions, you add them to a config file that runs whenever your shell starts.

On Ubuntu/WSL with the default bash shell, a common place is `~/.bashrc`.

### 1. Open `~/.bashrc` in a text editor

From Ubuntu:

```bash
cd ~
nano ~/.bashrc
```

This opens the file in the `nano` text editor.

### 2. Add your aliases at the bottom

Scroll to the end of the file and add lines like:

```bash
alias ll='ls -lh'
alias la='ls -lha'
alias ccli='cd ~/cli-practice'
```

Then:

- Press `Ctrl + O`, then Enter to save
- Press `Ctrl + X` to exit

### 3. Reload your config

```bash
source ~/.bashrc
```

Now your aliases are available in any new terminal:

```bash
ll
la
ccli
```

---

## Simple Scripts: Turn a Sequence into a Command

Aliases are great for **single commands or short pipelines**.

If you have several steps, a **shell script** can bundle them into one file you can run.

We’ll create a tiny script that:

- Goes to `~/cli-practice/data/FY25`
- Counts how many rows are in each `.csv` file
- Prints a short report

### 1. Create a `scripts` folder

```bash
cd ~/cli-practice
mkdir -p scripts
cd scripts
```

### 2. Create a script file

Use `nano` to create `count_rows.sh`:

```bash
nano count_rows.sh
```

Put this inside the file:

```bash
#!/usr/bin/env bash

DATA_DIR="$HOME/cli-practice/data/FY25"

cd "$DATA_DIR" || {
  echo "Directory $DATA_DIR does not exist."
  exit 1
}

echo "Row counts for CSV files in $DATA_DIR:" 

echo

for f in *.csv; do
  if [ -f "$f" ]; then
    rows=$(wc -l < "$f")
    echo "$f: $rows rows"
  fi
done
```

Then save and exit (`Ctrl + O`, Enter, then `Ctrl + X`).

### 3. Make the script executable

```bash
cd ~/cli-practice/scripts
chmod +x count_rows.sh
```

`chmod +x` tells the system the file can be run as a program.

### 4. Run the script

Make sure you have some CSVs in `~/cli-practice/data/FY25`.

If you created the files with `touch` in Lesson 4, they’ll be **empty**, so the script will show `0` rows. Add a little sample content first:

```bash
cd ~/cli-practice/data/FY25

for m in 01 02 03; do
   f="bfm_fy25_m${m}.csv"
   printf "PE,Month,Amount\n" > "$f"
   printf "PE123,M${m},100000\n" >> "$f"
   printf "PE456,M${m},75000\n" >> "$f"
done
```

Now run:

```bash
./count_rows.sh
```

You should see output like:

```text
Row counts for CSV files in /home/yourname/cli-practice/data/FY25:

bfm_fy25_m01.csv: 3 rows
bfm_fy25_m02.csv: 3 rows
...
```

Note: this is a **line count** (so it includes the header row). If you want “data rows only”, you can subtract 1.

This is a tiny example of automating a pre-refresh data check.

---

## (Optional) Add a Shortcut to Run Your Script

If you use the script often, you can make an alias for it.

1. Open `~/.bashrc` again:
   ```bash
   nano ~/.bashrc
   ```
2. Add this line near your other aliases:
   ```bash
   alias rowcheck='~/cli-practice/scripts/count_rows.sh'
   ```
3. Save and exit, then reload:
   ```bash
   source ~/.bashrc
   ```

Now you can run your check from **anywhere** with:

```bash
rowcheck
```

---

## Practice Exercises

Do these in your Ubuntu/WSL terminal.

### Exercise 1: Make Your Own Navigation Aliases

1. Add an alias to jump to `~/cli-practice/projects`.
2. Add an alias to jump directly to `~/cli-practice/data/FY25`.
3. Reload `~/.bashrc` and test them.

### Exercise 2: Alias for a Common Pipeline

1. Create an alias that shows your 10 most recent files in `~/cli-practice`:
   ```bash
   alias recent='cd ~/cli-practice && ls -lt | head'
   ```
2. Add it to `~/.bashrc` so it’s permanent.
3. Run `recent` from a different directory and confirm it works.

### Exercise 3: Simple Cleanup Script

1. In `~/cli-practice/scripts`, create a script `cleanup_logs.sh` that:
   - Goes to `~/cli-practice/projects/bfm_dashboard/logs`
   - Lists `.log` or `.csv` files there
   - Asks for confirmation, then removes them
2. Make it executable with `chmod +x cleanup_logs.sh`.
3. (Optional) Add an alias `bfmclean` to run it.

### Exercise 4: Parameterized Script (Stretch)

1. Modify `count_rows.sh` (or make a copy) so that it accepts a directory as an argument:
   ```bash
   ./count_rows.sh ~/cli-practice/data/FY25
   ```
2. Use `$1` inside the script to read the first argument.

*(This is a first step toward more flexible automation.)*

---

## Quick Reference

| Thing | What it does | Example |
|-------|--------------|---------|
| `alias name='cmd'` | Create a temporary alias | `alias ll='ls -lh'` |
| `~/.bashrc` | Bash config file (runs on startup) | `nano ~/.bashrc` |
| `source file` | Reload a config file | `source ~/.bashrc` |
| Shebang (`#!/usr/bin/env bash`) | Tell system to run script with bash | First line of script |
| `chmod +x file` | Make script executable | `chmod +x count_rows.sh` |
| `./script.sh` | Run script in current directory | `./count_rows.sh` |

---

## Next Steps

You now know how to turn repetitive command-line work into shortcuts and small scripts. In the final lesson, we’ll pull everything together into a quick reference and some suggested next steps for learning more.

Continue to: **[Lesson 6: Quick Reference & Next Steps]({{ "/lessons/06_cheatsheet" | relative_url }})**
