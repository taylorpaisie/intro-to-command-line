---
layout: default
title: 4. Redirection & Pipes
---

# 4. Redirection & Pipes

So far you've run simple commands that print to the screen or work with a single file.

In this lesson you'll learn how to:

- Save command output to a file instead of the screen
- Append to existing files
- Chain commands together so the output of one becomes the input of another

This is where the command line starts to feel *really* powerful for data work.

We’ll keep using your `~/cli-practice` folder in **Ubuntu on WSL**.

---

## Standard Input and Output (Concept)

Most commands follow a simple pattern:

- **stdin** – standard input (usually your keyboard)
- **stdout** – standard output (usually your screen)
- **stderr** – error output (also usually your screen)

Redirection and pipes let you:

- Send stdout **to a file** instead of the screen
- Take output from one command and **pipe** it into another

---

## Redirection: `>` and `>>`

### `>` – send output to a file (overwrite)

```bash
cd ~/cli-practice

echo "PE,Month,Amount" > fy25_summary.csv
```

- If `fy25_summary.csv` doesn’t exist, it’s created.
- If it **does** exist, its previous contents are **replaced**.

Now append a few rows:

```bash
echo "PE123,JAN,100000" >> fy25_summary.csv
echo "PE123,FEB,120000" >> fy25_summary.csv
```

Check the result:

```bash
cat fy25_summary.csv
```

### Overwrite vs append

- `>` – overwrite the file
- `>>` – append to the end of the file

Be careful with `>` on important files.

---

## Redirecting Command Output to a File

You can redirect the output of **any** command, not just `echo`.

### Example: Save a directory listing

```bash
cd ~/cli-practice

ls > listing.txt
cat listing.txt
```

### Example: Save a filtered list

First, create a few fake CSV files if you don’t already have some:

```bash
cd ~/cli-practice
mkdir -p data/FY25
cd data/FY25

touch bfm_fy25_m01.csv bfm_fy25_m02.csv bfm_fy25_m03.csv
ls
```

Now save a list of just the `.csv` files into a text file:

```bash
ls *.csv > csv_files.txt
cat csv_files.txt
```

---

## Pipes: `|` (The Real Power Tool)

A **pipe** connects two commands:

```bash
command1 | command2
```

- `command1` runs first
- Its output is sent directly into `command2` as input

Think of it like connecting Lego blocks: each command does one small thing; together they do something useful.

---

## Common Pipeline Commands: `grep`, `wc`, `sort`, `head`

We’ll use these a lot:

- `grep` – filter lines that **match** a pattern
- `wc -l` – **count** lines
- `sort` – sort lines
- `head` – show the first lines

---

## Example 1: Count Matching Lines

Imagine `fy25_summary.csv` has many rows and you want to know how many are for a specific PE.

```bash
cd ~/cli-practice

grep "PE123" fy25_summary.csv | wc -l
```

- `grep "PE123" fy25_summary.csv` – finds all lines containing `PE123`
- `| wc -l` – counts how many lines came through the pipe

This gives you a quick count without opening Excel.

---

## Example 2: Find Recent Files

Let’s list the most recently modified files in `~/cli-practice`.

```bash
cd ~/cli-practice

ls -lt | head
```

- `ls -lt` – long listing, sorted by time (newest first)
- `| head` – show the first 10 lines

You can change the number of lines:

```bash
ls -lt | head -n 5
```

---

## Example 3: Search Within Data Files

Create a small fake data file:

```bash
cd ~/cli-practice

echo "PE,Month,Amount" > demo.csv
echo "PE123,JAN,100000" >> demo.csv
echo "PE999,JAN,50000" >> demo.csv
echo "PE123,FEB,120000" >> demo.csv
echo "PE456,JAN,75000" >> demo.csv
```

Now filter it:

```bash
grep "PE123" demo.csv
```

Combine with `wc -l` to count matching rows:

```bash
grep "PE123" demo.csv | wc -l
```

---

## Example 4: Save a Filtered View

You can combine pipes **and** redirection.

```bash
cd ~/cli-practice

grep "JAN" demo.csv | sort > demo_JAN_sorted.csv
```

- `grep "JAN" demo.csv` – keep only JAN rows
- `| sort` – sort the lines alphabetically
- `> demo_JAN_sorted.csv` – save the result to a new file

Check the file:

```bash
cat demo_JAN_sorted.csv
```

This is like doing a filter + sort in Excel, but from the command line.

---

## Example 5: Quick Row Counts for Multiple Files

Suppose you have monthly CSVs and want quick row counts.

```bash
cd ~/cli-practice/data/FY25

ls *.csv

for f in *.csv; do
  echo "$f: $(wc -l < "$f") rows"
done
```

- `for f in *.csv; do ... done` – loop over each CSV file
- `wc -l < "$f"` – count lines in the file

This is a small step toward automating checks you might do before a Power BI refresh.

---

## Practice Exercises

Do these in your `~/cli-practice` folder.

### Exercise 1: Save and Reuse Command Output

1. List files and save to `all_files.txt`:
   ```bash
   cd ~/cli-practice
   ls > all_files.txt
   ```
2. Use `cat` to view `all_files.txt`.
3. Run `ls -lt | head` and compare with the saved file.

### Exercise 2: Filter and Count

Using `demo.csv` from earlier:

1. Show only lines containing `PE123`.
2. Count how many lines contain `JAN`.
3. Save all `JAN` lines to `demo_JAN.csv`.

*(Hint: combine `grep`, `wc -l`, and `>`.)*

One possible solution:

```bash
cd ~/cli-practice

# 1. Show only lines containing PE123
grep "PE123" demo.csv

# 2. Count how many lines contain JAN
grep "JAN" demo.csv | wc -l

# 3. Save all JAN lines to demo_JAN.csv
grep "JAN" demo.csv > demo_JAN.csv
```

### Exercise 3: Sort and Inspect

1. Create a small file:
   ```bash
   cd ~/cli-practice
   echo -e "C\nA\nB\nD" > letters.txt
   ```
2. Use `sort letters.txt` to see the sorted output.
3. Use `sort letters.txt | head -n 2` to see only the first two.

### Exercise 4: Quick Line Counts

1. In `~/cli-practice`, create a few files with different numbers of lines.
2. Use `wc -l` on a single file.
3. Use `wc -l` on multiple files at once:
   ```bash
   wc -l file1.txt file2.txt
   ```

### Exercise 5: Build a Mini Data Check

1. In `~/cli-practice/data/FY25`, ensure you have several `.csv` files.
2. For each file, print its name and number of rows using the `for` loop pattern from Example 5.
3. Think about how this could help you quickly spot a file that has way fewer rows than expected.

---

## Quick Reference

| Operator / Command | What it does | Example |
|--------------------|-------------|---------|
| `>` | Redirect output (overwrite file) | `echo "Hi" > file.txt` |
| `>>` | Redirect output (append) | `echo "Hi" >> file.txt` |
| `|` | Pipe output to another command | `ls -lt | head` |
| `grep` | Filter lines by text | `grep "PE123" demo.csv` |
| `wc -l` | Count lines | `grep "JAN" demo.csv | wc -l` |
| `sort` | Sort lines | `sort demo.csv` |
| `head` | Show first lines | `head -n 5 demo.csv` |
|
---

## Next Steps

Next you’ll learn how to save frequently used commands and small workflows as **aliases and simple scripts**, so you can run them with just a few keystrokes.

Continue to: **[Lesson 5: Aliases & Simple Scripts](05_aliases-scripts.md)**
