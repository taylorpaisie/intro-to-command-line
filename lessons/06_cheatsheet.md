---
layout: default
title: 6. Quick Reference & Next Steps
---

# 6. Quick Reference & Next Steps

This page is a **cheat sheet** for everything you’ve used in this mini-course, plus a few ideas for what to learn next.

Assumptions:

- You’re on **Windows**, using **Ubuntu on WSL**
- You’ve been working in `~/cli-practice`

---

## Navigation

| Command | Description | Example |
|--------|-------------|---------|
| `pwd` | Show current directory | `pwd` |
| `ls` | List files and folders | `ls` |
| `ls -lh` | List with sizes, human-readable | `ls -lh` |
| `ls -a` | Include hidden files | `ls -a` |
| `cd dir` | Change to directory | `cd data` |
| `cd ..` | Go up one level | `cd ..` |
| `cd ~` / `cd` | Go to home directory | `cd ~` |
| `cd /` | Go to root | `cd /` |
| `cd -` | Go to previous directory | `cd -` |

Special path symbols:

- `.` – current directory
- `..` – parent directory
- `~` – your home directory (e.g., `/home/yourname`)

---

## Working with Files & Directories

| Command | Description | Example |
|--------|-------------|---------|
| `mkdir NAME` | Create directory | `mkdir data` |
| `mkdir -p PATH` | Create nested directories | `mkdir -p data/FY25/monthly` |
| `touch FILE` | Create empty file / update timestamp | `touch notes.txt` |
| `echo TEXT > FILE` | Create/overwrite file with text | `echo "PE,Amount" > sample.csv` |
| `echo TEXT >> FILE` | Append text to file | `echo "PE123,100000" >> sample.csv` |
| `cat FILE` | Show full file | `cat sample.csv` |
| `head FILE` | Show first lines | `head sample.csv` |
| `tail FILE` | Show last lines | `tail sample.csv` |
| `cp SRC DEST` | Copy file | `cp a.csv b.csv` |
| `cp -r SRC DEST` | Copy directory recursively | `cp -r data data_backup` |
| `mv SRC DEST` | Move/rename file or directory | `mv old.csv new.csv` |
| `rm FILE` | Remove file | `rm old.csv` |
| `rmdir DIR` | Remove empty directory | `rmdir empty_dir` |
| `rm -r DIR` | Remove directory + contents | `rm -r data_backup` |

**Careful** with `rm -r`. In the terminal there’s no recycle bin.

---

## Redirection & Pipes

| Thing | Description | Example |
|-------|-------------|---------|
| `>` | Redirect output (overwrite) | `echo "Hi" > out.txt` |
| `>>` | Redirect output (append) | `echo "Hi" >> out.txt` |
| `|` | Pipe output into next command | `ls -lt | head` |
| `grep TEXT FILE` | Filter lines that match TEXT | `grep "PE123" demo.csv` |
| `wc -l` | Count lines | `grep "JAN" demo.csv | wc -l` |
| `sort` | Sort lines | `sort demo.csv` |
| `head -n N` | First N lines | `head -n 5 demo.csv` |
| `tail -n N` | Last N lines | `tail -n 5 demo.csv` |

Typical patterns:

- Recent files: `ls -lt | head`
- Count matches: `grep "PE123" file.csv | wc -l`
- Filter + sort + save: `grep "JAN" demo.csv | sort > demo_JAN_sorted.csv`

---

## Aliases & Scripts

| Thing | Description | Example |
|-------|-------------|---------|
| `alias name='cmd'` | Temporary alias (current session) | `alias ll='ls -lh'` |
| `~/.bashrc` | Bash config file (runs on shell start) | `nano ~/.bashrc` |
| `source FILE` | Reload a config file | `source ~/.bashrc` |
| Shebang line | Choose interpreter for script | `#!/usr/bin/env bash` |
| `chmod +x script.sh` | Make script executable | `chmod +x count_rows.sh` |
| `./script.sh` | Run script in current dir | `./count_rows.sh` |

Example handy aliases (add to `~/.bashrc`):

```bash
alias ll='ls -lh'
alias la='ls -lha'
alias ccli='cd ~/cli-practice'
alias recent='cd ~/cli-practice && ls -lt | head'
```

Example script skeleton (in `~/cli-practice/scripts/something.sh`):

```bash
#!/usr/bin/env bash

# Your logic here
```

---

## Quick WSL / Ubuntu Notes

- Launch Ubuntu: press Windows key, type `Ubuntu`, press Enter.
- Your Linux home is usually `/home/yourname`.
- Your practice folder is `~/cli-practice`.
- To open the current WSL folder in File Explorer:
  ```bash
  explorer.exe .
  ```

---

## Suggested Next Steps (For You / Your Team)

Once your team is comfortable with this mini-course, good next steps are:

- **Git & GitHub basics**
  - Track changes to Power BI docs, DAX measures, or small scripts
  - Learn `git status`, `git diff`, `git commit`, `git log`

- **More shell scripting**
  - Add parameters to scripts (e.g., pass the folder to check)
  - Use `if` conditions and simple loops for richer automation

- **Python or R in WSL**
  - Use them for data cleaning or pre-processing before a Power BI refresh
  - Call scripts from the command line as part of a routine

- **Learn one text editor well**
  - `nano` is fine to start; later you might explore VS Code with WSL integration

---

## How to Practice Day-to-Day

A few small habits will build comfort over time:

- Open Ubuntu/WSL once a day and:
  - Use `cd` + `ls` to get where you need to go
  - Use `grep` or `head`/`tail` instead of opening a file in Excel for a quick check
  - Use an alias like `ccli` or `recent` whenever you remember
- Look for **one small manual step** in your BFM/Power BI workflow that you could move to the command line (renaming files, checking row counts, zipping/sharing outputs, etc.).

You don’t need to be a full-time engineer to benefit from the command line—small, repeatable wins add up quickly.
